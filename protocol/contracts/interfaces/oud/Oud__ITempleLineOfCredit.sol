pragma solidity ^0.8.17;
// SPDX-License-Identifier: AGPL-3.0-or-later
// Oud (protocol/contracts/interfaces/oud/IOudtoken.sol)

import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {IERC20Permit} from '@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol';

/// @notice Helper interface for calling the TempleLineOfCredit contract
interface Oud__ITempleLineOfCredit {

  function depositReserve(IERC20 debtToken, address account, uint256 amount) external;

}