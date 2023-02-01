import styled from 'styled-components';
import Image from '../../../Image/Image';
import userManualLogo from '../../../../assets/images/nexus/usermanual.png';
import shardsLogo from '../../../../assets/images/nexus/usermanualshards.png';

const NexusUserManual = () => {
  return (
    <UserManualContainer>
      <ContentContainer>
        <UserManualImage src={userManualLogo} />
        <Title>What is Temple Nexus?</Title>
        <Paragraph>
          Temple Nexus is the gateway into the Temple Ecosystem and its partner protocols. It allows users to chronicle
          their unique journey on-chain in the Arbitrum L2 ecosystem. Progression will unlock new tiers of rewards for a
          chance to compound incentives for more benefits. Being a higher ranked user in Nexus also gives one privileged
          access to partner systems and Temple experiences. Anyone can build atop Nexus with this new composable
          primitive powered by TempleDAO.
        </Paragraph>
        <Title>Relics</Title>
        <Paragraph>
          To begin your journey into the Nexus, you will need to mint Relics. Relics act as a passport giving users
          access to experiences within the Temple ecosystem. Just like a real passport, Relics are central to a
          Templar's identity. As users fill up their Relics, the “rarity” of these Relics increase over time, making
          them more and more valuable. Furthermore, Relics can be bought or sold on the marketplace, adding a whole new
          level of utility.
        </Paragraph>
        <Subtitle>How to mint a Relic ?</Subtitle>
        <Paragraph>
          Templars who wish to acquire such a Relic must sacrifice a small amount of $TEMPLE on the Arbitrum chain. The
          price of minting begins at 10 $TEMPLE and rises over the time of a year, capped at 50 $TEMPLE. The tokens used
          for the sacrifice are burned forever.
        </Paragraph>
        <UserManualImage src={shardsLogo} />
        <Title>Shards</Title>
        <Paragraph>
          If Relics are like passports, then Shards are like the stamps within the passports. Each experience or
          accomplishment milestone can generate a Shard which may be equipped into a Relic. Different projects
          internally or externally can create Shards with their own criteria for minting and token-gated use cases.
        </Paragraph>
        <Paragraph>
          As an example, completing a task on Twitter as a quest may allow a user to mint a Shard. These new Shards may
          be used for token-gated Whitelisting access to a project’s upcoming launch.
        </Paragraph>
        <Title>Transmutation</Title>
        <Paragraph>
          The Forge tab on the Nexus dApp allows Relic holders to execute transmutations, effectively using some Shards
          as components to create rarer Shards. Some transmutation recipes require multiple instances of the same Shard.
        </Paragraph>
        <Paragraph>Some Shards are obtainable only through transmutation.</Paragraph>
        <Paragraph>Click [Insert Link] to gain deeper information about mechanics in our Gitbook Guide.</Paragraph>
      </ContentContainer>
    </UserManualContainer>
  );
};

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-style: italic;
  color: ${(props) => props.color ?? props.theme.palette.brand};
`;

const Title = styled.div`
  font-size: 24px;
  color: ${(props) => props.color ?? props.theme.palette.brand};
`;

const UserManualImage = styled(Image)`
  width: 800px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: flex-start:
`;

const UserManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default NexusUserManual;
