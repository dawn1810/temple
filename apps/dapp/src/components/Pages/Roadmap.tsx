import buildings from 'assets/images/roadmap-buildings.png';
import clouds from 'assets/images/roadmap-clouds.jpeg';
import roadmap1 from 'assets/images/roadmap-1.png';
import roadmap2 from 'assets/images/roadmap-2.png';
import roadmap3 from 'assets/images/roadmap-3.png';
import roadmap4 from 'assets/images/roadmap-4.png';
import roadmap5 from 'assets/images/roadmap-5.png';
import roadmap6 from 'assets/images/roadmap-6.png';
import roadmap7 from 'assets/images/roadmap-7.png';
import roadmap8 from 'assets/images/roadmap-8.png';
import roadmap9 from 'assets/images/roadmap-9.png';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BgDimension, getBgImgDimensions, getPositionStyles } from 'utils/imageSize';
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/animations/scale-subtle.css';
import { tabletAndAbove } from 'styles/breakpoints';

const RoadmapItems = [
  {
    title: 'Fire Ritual',
    description:
      'The First Temple Ritual known as the Fire Ritual, was a place where worthy Templars were given the right to early allocations of TEMPLE after burning their Incense.',
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'I',
    bottom: 0.26,
    left: 0.09,
    image: roadmap1,
  },
  {
    title: 'Enclave Organization',
    description:
      'TempleDAO organised itself into 5 Enclaves, designed in a way to thrive amongst specific talents of Templars. Templars were given the choice to join one of these enclaves. This structure made the process of finding talented Templars much more efficient.',
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'II',
    bottom: 0.16,
    left: 0.27,
    image: roadmap2,
  },
  {
    title: 'Opening Ceremony',
    description:
      'The Opening Ceremony (OC) allowed anyone to become a Templar by completing puzzles, collecting incense and sacrificing FRAX for $TEMPLE. Through this process TempleDAO raised almost $180M in FRAX — one of the largest initial fund raises for any DAO without traditional financing.',
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'III',
    bottom: 0.27,
    left: 0.38,
    image: roadmap3,
  },
  {
    title: 'AMM Launch',
    description:
      'The custom AMM allowed TempleDAO’s unique mechanisms to come into play, like Temple Defend and Exit Queue. Unfortunately, certain unforeseen factors during the exit queue created undue selling pressure on Temple. The team has rectified this issue and since then we are moving on full steam ahead!',
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'IV',
    bottom: 0.37,
    left: 0.2,
    image: roadmap4,
  },
  {
    title: 'DAO Operations',
    description: `Move to Notion as centralised repository
    Bug Bounty program to be opened up
    Open Sourcing Codebase
    Weekly Enclave Updates
    Temple Contract Audits`,
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'V',
    bottom: 0.4,
    left: 0.63,
    image: roadmap5,
  },
  {
    title: 'STAX',
    description: `UI/UX Design being finalised
    STAX Vaults to automate yield farming based on risk exposure of users
    Gain access to different vaults that provide exposure to FRAX/FXS/STAX/TEMPLE
    Streamline ability for users to provide TEMPLE/FRAX liquidity
    Allow users to stake FXS and receive maximum FXS rewards as well as additional STAX protocol rewards
    Launch v.01`,
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'VI',
    bottom: 0.64,
    left: 0.17,
    image: roadmap6,
  },
  {
    title: 'DAO Game',
    description: `DAO Game specification in Discord with custom Front End
    Return of rituals for new enclave members and onboard new engaged members (optional)
    DAO upgrades: automating and specifying mechanics to decentralise in a representative governance model
    Set up of Bounties with new comp structure for Full-time/Part-time templars`,
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'VII',
    bottom: 0.54,
    left: 0.84,
    image: roadmap7,
  },
  {
    title: 'Temple CORE',
    description: `Introduce v1 Vaults - 1 month lock period
    Allow borrowing against TEMPLE IV: in house borrowing market being developed for non-liquidatable loans against TEMPLE.
    Best in class - smart lazy whale strategy
    Retrace from an unsustainable yield model and to a revenue sharing model
    FRAX ecosystem plays - FRAX gauge, FRAX AMO, FRAXswap FPI/TEMPLE LP, Trinity lending markets
    Strengthen position in Curve wars - and creation of veFXS for bribing mechanics. Accumulating assets
    Deploy a new LP to Uniswap for additional exposure: funded via partnership with Ondo. Also deploying an arb bot to capture arb profits between pools for Templars.
    Enhance investment strategies: exploring partnerships for leverage & other strats to further juice returns in a low risk way beyond what individuals could do themselves
    `,
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'VIII',
    bottom: 0.63,
    left: 0.45,
    image: roadmap8,
  },
  {
    title: 'Metaverse',
    description: `Prototyping 3D environments & engines for our metaverse play
    Building our take on a metaverse platform itself for Temple & others
    Possible gamification of DeFi/DAO with Templefied rituals/puzzles
    NFT Passport for Nexus with different quest lines`,
    shortDescription: 'Also known as the beginnings of the Temple',
    icon: 'IX',
    bottom: 0.92,
    left: 0.72,
    image: roadmap9,
  },
];

const Roadmap = () => {
  // Used to determine background image size and position
  const [bgDimensions, setBgDimensions] = useState<BgDimension>();
  const [activeModal, setActiveModal] = useState(-1);

  // Update bgDimensions state on image load and window resize
  function handleResize(image: HTMLImageElement) {
    const backgroundDimensions = getBgImgDimensions(image, image.src);
    setBgDimensions(backgroundDimensions);
  }

  // Listen for left/right arrow and scroll through modal
  useEffect(() => {
    const handleKeydown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeModal > 0) setActiveModal(activeModal - 1);
      else if (e.key === 'ArrowRight' && activeModal < RoadmapItems.length - 1) setActiveModal(activeModal + 1);
    };
    if (activeModal !== -1) window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [activeModal]);

  return (
    <Container>
      <Clouds src={clouds} />
      <ScrollableContainer>
        <Building
          src={buildings}
          onLoad={(e) => {
            const el = e.currentTarget;
            window.onresize = () => handleResize(el);
            handleResize(el);
          }}
        />
        {bgDimensions != null &&
          RoadmapItems.map((item, i) => (
            <TippyStyled
              key={i}
              content={
                <>
                  <TooltipHeader>{item.title}</TooltipHeader>
                  <Linebreak />
                  <TooltipDescription>{item.shortDescription}</TooltipDescription>
                </>
              }
              animation={'scale-subtle'}
              duration={150}
              offset={[0, 15]}
              arrow={roundArrow}
            >
              <Item
                onClick={() => setActiveModal(i)}
                style={getPositionStyles(bgDimensions, 1, item.bottom, item.left, 0.03)}
              >
                {item.icon}
              </Item>
            </TippyStyled>
          ))}
      </ScrollableContainer>

      <ModalContainer
        style={activeModal == -1 ? { display: 'none' } : { display: 'flex' }}
        onClick={() => setActiveModal(-1)}
      >
        {activeModal !== -1 && (
          <>
            <Modal onClick={(e) => e.stopPropagation()}>
              <ModalBgImage source={RoadmapItems[activeModal].image} />
              <ModalImage src={RoadmapItems[activeModal].image} />
              <ContentContainer>
                <CloseButton onClick={() => setActiveModal(-1)}>&times;</CloseButton>
                <ModalHeader>Chapter {RoadmapItems[activeModal].icon}</ModalHeader>
                <ModalTitle>{RoadmapItems[activeModal].title}</ModalTitle>
                <Linebreak />
                <ModalDescription>{RoadmapItems[activeModal].description}</ModalDescription>
              </ContentContainer>
            </Modal>
            <NavContainer>
              <NavButton
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeModal > 0) setActiveModal(activeModal - 1);
                }}
              >
                &lt;
              </NavButton>
              <CurrentNav>{RoadmapItems[activeModal].icon}</CurrentNav>
              <NavButton
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeModal < RoadmapItems.length - 1) setActiveModal(activeModal + 1);
                }}
              >
                &gt;
              </NavButton>
            </NavContainer>
          </>
        )}
      </ModalContainer>
    </Container>
  );
};

// Container + bg image
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background: black;
`;

const Clouds = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: auto;
  background-image: url(${clouds});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  pointer-events: none;
  z-index: 0;
`;

// Roadmap image + roadmap item styles
const ScrollableContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Building = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: auto;
  padding: 2rem 0;
  pointer-events: none;
  z-index: 1;
`;

const Item = styled.div`
  position: absolute;
  transform-origin: bottom left;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 100%;
  border: 0.3rem solid black;
  background-color: black;
  opacity: 0.95;
  z-index: 2;
  color: #b37e55b2;
  font-weight: bold;
  font-size: 2rem;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: #b37e55;
    border: 0.3rem solid #b37e55;
  }
`;

// Modal styles
const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(13, 11, 12, 0.45);
  backdrop-filter: blur(2px);
  z-index: 3;
`;

const Modal = styled.div`
  position: relative;
  padding: 2rem;
  text-align: center;
  background: rgba(20, 20, 20, 0.96);
  border: 1px solid ${(props) => props.theme.palette.brand};
  border-radius: 8px;
  box-shadow: 0px 0px 24px ${(props) => props.theme.palette.brand};
  z-index: 4;

  height: 90vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ${tabletAndAbove(`
    display:grid;
    grid-template-columns: auto auto;
    height: auto;
    max-width: 1028px;
  `)}
`;

const ModalBgImage = styled.div<{ source: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  border-radius: 8px;
  border-top: 8px solid ${(props) => props.theme.palette.brand};
  border-bottom: 8px solid ${(props) => props.theme.palette.brand};
  padding: 8px;

  background-image: url(${(props) => props.source});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 300px;
  margin-top: 1rem;
  ${tabletAndAbove(`
    display: none;
  `)}
`;

const ModalImage = styled.img`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  border-radius: 8px;
  border-top: 8px solid ${(props) => props.theme.palette.brand};
  border-bottom: 8px solid ${(props) => props.theme.palette.brand};
  padding: 8px;
  display: none;
  ${tabletAndAbove(`
    display: inline-block;
    width: 448px;
    height: auto;
  `)}
`;

const ContentContainer = styled.div`
  padding: 0rem 2rem;

  ${tabletAndAbove(`
    position: relative;
  `)}
`;

const ModalHeader = styled.h4`
  color: #ffdec9;
  font-size: 1rem;
  text-transform: uppercase;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  ${tabletAndAbove(`
    position: relative;
  `)}
`;

const ModalTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.div`
  font-size: 1.1rem;
  line-height: 2rem;
  margin-top: 2.5rem;
  ${tabletAndAbove(`
    overflow-y: auto;
    max-height: 30vh;
  `)}
`;

// Modal navigation styles
const CloseButton = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${(props) => props.theme.palette.brand};
  font-size: 3rem;
  z-index: 4;

  margin: 0.5rem;
  ${tabletAndAbove(`
    margin: 0;
  `)}
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #b37e55;

  font-size: 1rem;
  margin: 0.5rem 0;
  ${tabletAndAbove(`
    font-size: 1.5rem;
    margin-top: 6rem;
  `)}
`;

const NavButton = styled.div`
  cursor: pointer;
  font-size: 2rem;
`;

const CurrentNav = styled.div`
  border-radius: 100%;
  border: 4px solid #b37e55;
  background-color: black;
  opacity: 0.95;
  color: #b37e55;
  font-weight: bold;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 4rem;

  height: 3rem;
  width: 3rem;
  ${tabletAndAbove(`
    height: 4rem;
    width: 4rem;
  `)}
`;

// Tooltip styles
const TippyStyled = styled(Tippy)`
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid ${(props) => props.theme.palette.brand};
  border-radius: 8px;
  box-shadow: 0px 0px 8px ${(props) => props.theme.palette.brand};
  padding: 0.75rem;
  text-align: center;

  display: none;
  ${tabletAndAbove(`
    display: block;
  `)}
`;

const TooltipHeader = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;

const Linebreak = styled.hr`
  background: white;
  border: none;
  height: 1px;
  width: 6rem;
`;

const TooltipDescription = styled.p`
  font-size: 1.1rem;
  margin: 0.75rem 0rem;
`;

export default Roadmap;