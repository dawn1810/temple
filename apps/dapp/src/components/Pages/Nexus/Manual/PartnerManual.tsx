import styled from 'styled-components';
import Image from '../../../Image/Image';
import partnerManualLogo from '../../../../assets/images/nexus/partnermanual.png';
import applyingLogo from '../../../../assets/images/nexus/partnermanualapplying.png';

const NexusPartnerManual = () => {
  return (
    <ManualContainer>
      <ContentContainer>
        <ManualImage src={partnerManualLogo} />
        <Title>Temple Nexus - Partner manual</Title>
        <Paragraph>
          The Temple Nexus opens up a new suite of tooling for partners to create fun sybil resistant experiences as a
          means to token-gate protocol events for their userbase. Build a stronger moat for your community through
          gamification of quests and incentivising beneficial user behaviour to the protocol. Partners will be able to
          monitor these evergreen on-chain user statistics and curate new quests for themselves and partners.
          Customisable Relics (ERC721) and Shards (ERC1155) will be allowed to be minted on-chain and possibly sold on
          secondary marketplaces too. These immutable reputation scoring mechanics open up all kinds of composable
          opportunities within the vibrant Arbitrum L2 ecosystem.
        </Paragraph>
        <ManualImage src={applyingLogo} />
        <Title>Applying for a Shard</Title>
        <Paragraph>
          Potential partners will need to submit the following informations to apply for your Nexus Shard:
          <ul>
            <li>
              Contract address which implements the loot logic and calls the partnerMint function on Shards.sol to
              deliver the Shard for the user
            </li>
            <li>Corresponding URI for the Shard's visual metadata</li>
            <li>
              The total supply (applicable only if you are planning to enforce a maximum supply capit, otherwise,
              infinite supply Shards are allowed)
            </li>
            <li>
              A short description text about the Shard's lore to be displayed on the Quest card in the Quest tab of the
              Nexus dApp (x characters maximum)
            </li>
            <li>
              An image to be displayed on the Quest card in the Quest tab of the Nexus dApp (.png or .svg file format no
              more than 1.5mb in size)
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          In exchange you will be given a specific tokenId to be minted by your allowlisted contract address, using the
          following function:
        </Paragraph>
        <CodeBlock>
          <pre>
            {`
function partnerMint(
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes memory data
    ) external {
    require(partnerMinters[msg.sender], "You're not authorised to mint");
    require(partnerAllowedIds[msg.sender][_id], "This isn't your reserved itemId");
    _mint(_to, _id, _amount, data);
    emit MintedShard(_to, _id, _amount);
}
        `}
          </pre>
        </CodeBlock>
      </ContentContainer>
    </ManualContainer>
  );
};

const Paragraph = styled.p`
  font-size: 18px;
`;

const CodeBlock = styled.p`
    font-size: 16px;
    font-face: Courier New;
`;

const Title = styled.div`
  font-size: 24px;
  color: ${(props) => props.color ?? props.theme.palette.brand};
`;

const ManualImage = styled(Image)`
  width: 600px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  align-items: flex-start:
`;

const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default NexusPartnerManual;
