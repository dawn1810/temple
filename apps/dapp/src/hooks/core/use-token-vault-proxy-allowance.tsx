import { useEffect } from 'react';
import { Signer } from 'ethers';
import {
  VaultProxy__factory,
  TempleERC20Token__factory,
  OGTemple__factory,
  TempleStaking__factory,
} from 'types/typechain';
import { useWallet } from 'providers/WalletProvider';
import useRequestState from 'hooks/use-request-state';

import { fromAtto, toAtto } from 'utils/bigNumber';
import { useNotification } from 'providers/NotificationProvider';
import { TICKER_SYMBOL } from 'enums/ticker-symbol';
import { Nullable } from 'types/util';

const ENV = import.meta.env;

const DEFAULT_ALLOWANCE = toAtto(100000000);

const createTokenFactoryInstance = async (ticker: TICKER_SYMBOL, signer: Signer) => {
  switch (ticker) {
    case TICKER_SYMBOL.TEMPLE_TOKEN:
    // When depositing FAITH, it is actually Temple. Faith represents the intent
    // to include a user's FAITH balance in addition to the $Temple amount the user 
    // wants to deposit.
    case TICKER_SYMBOL.FAITH:
      return new TempleERC20Token__factory(signer).attach(ENV.VITE_PUBLIC_TEMPLE_ADDRESS);
    case TICKER_SYMBOL.OG_TEMPLE_TOKEN:
      const templeStakingContract = new TempleStaking__factory(signer).attach(ENV.VITE_PUBLIC_TEMPLE_STAKING_ADDRESS);
      const address = await templeStakingContract.OG_TEMPLE();  
      return new OGTemple__factory(signer).attach(address);
  }
  throw new Error('Unsupported Token');
};

type HookReturnType = [{ allowance: Nullable<number>, isLoading: boolean }, () => Promise<void>];

export const useTokenVaultProxyAllowance = (
  ticker: TICKER_SYMBOL = TICKER_SYMBOL.TEMPLE_TOKEN,
): HookReturnType => {
  const { signer, wallet, isConnected } = useWallet();
  const { openNotification } = useNotification();
  
  const getTokenAllowance = async () => {
    if (!signer || !wallet) {
      console.error(`Programming Error: Missing signer or wallet address when trying to get token allowance.`);
      return;
    }

    const token = await createTokenFactoryInstance(ticker, signer);
    const vault = new VaultProxy__factory(signer).attach(ENV.VITE_PUBLIC_TEMPLE_VAULT_PROXY);
    const allowance = await token.allowance(wallet, vault.address);
    return allowance;
  };
  
  const [
    getAllowanceRequest,
    {
      isLoading: getAllowanceLoading,
      response: allowance,
    },
  ] = useRequestState(getTokenAllowance);

  const increaseAllowance = async () => {
    if (!signer || !wallet) {
      console.error(`Programming Error: Missing signer or wallet address when trying to increase allowance.`);
      return;
    }

    const token = await createTokenFactoryInstance(ticker, signer);
    const approveTXN = await token.approve(ENV.VITE_PUBLIC_TEMPLE_VAULT_PROXY, DEFAULT_ALLOWANCE);
    await approveTXN.wait();
  
    openNotification({
      title: `${ticker} allowance approved`,
      hash: approveTXN.hash,
    });

    await getAllowanceRequest();
  };

  const [
    increaseAllowanceRequest, 
    { 
      isLoading: increaseAllowanceLoading,
    },
  ] = useRequestState(increaseAllowance);

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    
    getAllowanceRequest();
  }, [
    isConnected,
    getAllowanceRequest,
    ticker,
  ]);

  return [
    {
      allowance: !allowance ? null : fromAtto(allowance),
      isLoading: getAllowanceLoading || increaseAllowanceLoading,
    },
    increaseAllowanceRequest
  ];
};