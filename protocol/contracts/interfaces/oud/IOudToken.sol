pragma solidity ^0.8.17;
// SPDX-License-Identifier: AGPL-3.0-or-later
// OudToken Interface (protocol/contracts/interfaces/oud/IOudToken.sol)

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";

/// @notice An ERC20 token which can be minted/burnt by approved accounts
interface IOudToken is IERC20, IERC20Permit {
    function mint(address to, uint256 amount) external;
    function burn(address account, uint256 amount) external;
}