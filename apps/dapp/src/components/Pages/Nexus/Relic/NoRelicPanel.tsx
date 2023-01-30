import { ItemInventory } from 'providers/types';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import MintRelicPanel from './MintRelicPanel';
import { NexusPanel } from './styles';
import Image from 'components/Image/Image';
import centerCircle from 'assets/images/nexus/central_circle.png';
import { Button } from 'components/Button/Button';
import { useRelic } from 'providers/RelicProvider';
import { useEffect } from 'react';
import { NexusLoading } from '.';
import { useWallet } from 'providers/WalletProvider';
import { useAccount } from 'wagmi';

export const NoRelicPanel = (props: { inventory: ItemInventory }) => {
  const { relics } = props.inventory;
  const { signer } = useWallet();
  const { address } = useAccount();

  const { checkWhiteList } = useRelic();

  useEffect(() => {
    if (signer && address) {
      checkWhiteList.handler();
    }
  }, [signer, address]);

  if (relics.length > 0) {
    return <Navigate to={`../${relics[0].id.toString()}`} />;
  }

  return (
    <>
      {checkWhiteList.isLoading && <NexusLoading />}
      {checkWhiteList.isWhitelisted && (
        <>
          <h3>You do not yet possess a Relic</h3>
          <MintRelicPanel />
        </>
      )}
      {!checkWhiteList.isLoading && !checkWhiteList.isWhitelisted && <SacrificePanel />}
    </>
  );
};

const SacrificePanel = () => {
  return (
    <NexusPanel>
      <SacrificePanelRow>Are you worthy...?</SacrificePanelRow>
      <Image width={300} src={centerCircle}></Image>
      <PriceRow>price:</PriceRow>
      <TempleRow>10.5 TEMPLE</TempleRow>
      <SacrificeButton />
    </NexusPanel>
  );
};

const TempleRow = styled.div`
  margin: auto;
  padding-bottom: 10px;
  font-family: Megant, serif;
  color: #bd7b4f;
  font-size: 24px;
  border: 0.0625rem solid ${(props) => props.color ?? props.theme.palette.brand};
  border-radius: 16px;
  padding: 10px;
  background: #000;
`;

const PriceRow = styled.div`
  margin: auto;
  padding-bottom: 10px;
  font-family: Megant, serif;
  color: #bd7b4f;
  font-size: 24px;
`;

const SacrificePanelRow = styled.h3`
  margin: auto;
  padding-bottom: 10px;
`;

const SacrificeButton = () => {
  const { sacrificeTemple } = useRelic();

  return (
    <SacrificeButtonStyled
      label={'Sacrifice'}
      loading={sacrificeTemple.isLoading}
      onClick={async () => {
        console.log('foo');
        await sacrificeTemple.handler();
        console.log('foo');
      }}
    />
  );
};

const SacrificeButtonStyled = styled(Button)`
  width: 200px;
  margin-top: 1rem;
  background: ${({ theme }) => theme.palette.gradients.dark};
  border: 2px solid ${({ theme }) => theme.palette.brandDark};
  box-shadow: 0px 0px 20px rgba(222, 92, 6, 0.4);
  border-radius: 0.75rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-shadow: 0 0 20px #fff;
`;

export default MintRelicPanel;
