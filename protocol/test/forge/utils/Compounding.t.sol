// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import {Compounding} from "contracts/util/Compounding.sol";
import {TempleTest} from "../TempleTest.sol";

contract SetTest is TempleTest {
    struct Set {
        uint256 principal;
        uint256 elapsedSecs;
        uint256 rate;
        uint256 expected;
    }

    Set internal s;
    Set[] internal sets;

    modifier parameterizedTest(Set[] memory testSets) {
        uint256 length = testSets.length;
        for (uint256 i = 0; i < length; ) {
            s = testSets[i];
            _;
            unchecked {
                i += 1;
            }
        }
    }
}

contract CompoundingTest is SetTest {
    function cc_sets() internal returns (Set[] memory) {
        delete sets;
        sets.push(Set({ principal: 10_000e18, elapsedSecs: 30 days, rate: 0.05e18, expected: 10041_180449816514180000}));
        sets.push(Set({ principal: 10.12345675434e18, elapsedSecs: 43200, rate: 0.10234e18, expected: 10_124876079256983835}));
        sets.push(Set({ principal: 0, elapsedSecs: 43200, rate: 0.10234e18, expected: 0})); // 0 principal
        sets.push(Set({ principal: 10_000e18, elapsedSecs: 0, rate: 0.05e18, expected: 10_000e18})); // 0 elapsed
        sets.push(Set({ principal: 10_000e18, elapsedSecs: 30 days, rate: 0, expected: 10_000e18})); // 0 rate
        return sets;
    }

    function test_cc() external parameterizedTest(cc_sets()) {
        uint256 actual = Compounding.continuouslyCompounded(s.principal, s.elapsedSecs, s.rate);
        assertEq(actual, s.expected);
    }

}