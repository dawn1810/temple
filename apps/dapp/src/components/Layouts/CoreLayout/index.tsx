import { FC, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { phoneAndAbove } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { useRefreshWalletState } from 'hooks/use-refresh-wallet-state';
import { useWallet } from 'providers/WalletProvider';

import Header from './Header';
import { NexusSoundscape } from 'components/Pages/Nexus/NexusSoundscape';

type CoreLayoutProps = {
  mode: 'dapp' | 'nexus',
  headless?: boolean
}

const CoreLayout: FC<CoreLayoutProps> = (props) => {
  const { isConnected } = useWallet();
  const [_, resfreshWalletState] = useRefreshWalletState();
  const didRefreshRefresh = useRef(false);

  useEffect(() => {
    if (didRefreshRefresh.current) {
      return;
    }

    if (isConnected) {
      resfreshWalletState();
      didRefreshRefresh.current = true;
    }
  }, [isConnected, didRefreshRefresh]);

  return (
    <>
      {!props.headless && <Header mode={props.mode} />}
      {props.mode === 'nexus' && <NexusSoundscape />}
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default CoreLayout;

const Main = styled.main`
  margin: 0 auto;
  padding: 0px;

  ${phoneAndAbove(`
    max-width: ${theme.metrics.desktop.maxWidth};
  `)}
`;
