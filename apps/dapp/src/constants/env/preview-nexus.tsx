import { ADDRESS_ZERO } from 'utils/bigNumber';
import { RARITY_TYPE } from 'components/Pages/Nexus/types';
import { Environment } from './types';

const env: Environment = {
  alchemyId: '-nNWThz_YpX1cGffGiz-lbSMu7dmp4GK',
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/AorwfDdHDsEjIX4HPwS70zkVjWqjv5vZ',
  backendUrl: 'https://backend-stage.templedao.link',
  contracts: {
    balancerVault: '0x65748E8287Ce4B9E6D83EE853431958851550311',
    exitQueue: '0x75a89f50cb40aec7Ed237F1Bfab562A60023ebE6',
    faith: '0x2c20342F1B27Ca1E4e6668A623084Bb9fC086A4D',
    farmingWallet: '0x5C8898f8E0F9468D4A677887bC03EE2659321012',
    frax: '0x73651AD693531F9937528009cC204a4d9b696a68',
    usdc: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
    usdt: '',
    dai: '0x8c9e6c40d3402480ace624730524facc5482798c',
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    frax3CrvFarming: '',
    frax3CrvFarmingRewards: '',
    lockedOgTemple: '0x564462C807600684965d8A8f57eA190F2F66169C',
    lbpFactory: '0xB0C726778C3AE4B3454D85557A48e8fa502bDD6A',
    ogTemple: '0x07d6c81fce4263ddeb0610c217c673b315e766f1',
    teamPaymentsEpoch1: '0x7a770591f202D18e893DeC115f16DAE9d28686a8',
    teamPaymentsEpoch2: '',
    teamPaymentsEpoch3: '',
    teamPaymentsEpoch4: '',
    teamPaymentsEpoch5: '',
    teamPaymentsEpoch6: '',
    teamPaymentsEpoch7: '',
    teamPaymentsEpoch8: '',
    teamPaymentsEpoch9: '',
    teamPaymentsEpoch10: '',
    teamPaymentsEpoch11: '',
    temple: '0x5631d8eA427129e15bDa68F0F9227C149bD29Dcf',
    templeStaking: '0x20Ab503De9859eecB22EaB0ddEc9Bcd8bAFB876C',
    templeV2FraxPair: '0x85dA8c4312742522519911052Fa2B4aC302E4d6c',
    templeV2Router: '0x7a19509307648b0bf00dd7349F2dDaE716B9a998',
    swap1InchRouter: '0x1111111254EEB25477B68fb85Ed929f73A960582',
    treasuryIv: '0xA443355cE4F9c1AA6d68e057a962E86E071B0ed3',
    vaultOps: '0x542891Faf336d69E440De80145Df21510dCa6a78',
    vaultProxy: '0xb0043346da58ce01EaE3246664Cb5984f75adC1b',
    vaultEarlyExit: '0x7Edb6ea1A90318E9D2B3Ae03e5617A5AAFd7b249',
    ramos: '0x02783CE28C5B3B015340938A11Aa79BB9f26f1Bc',
    ramosPoolHelper: '0xe3346D1923A9935A581FEa891b027eabF7B35250',
    balancerHelpers: '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E',
  },
  subgraph: {
    templeCore: 'https://api.thegraph.com/subgraphs/name/templedao/templedao-core-goerli',
    protocolMetrics: 'https://api.thegraph.com/subgraphs/name/templedao/templedao-metrics',
    balancerV2: 'https://api.thegraph.com/subgraphs/name/templedao/templedao-balancer-v2',
    // Original Balancer Subgraph
    // balancerV2: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
  },
  gas: {
    swapFraxForTemple: 300000,
    swapTempleForFrax: 300000,
    widthrawBase: 180000,
    widthrawPerEpoch: 15000,
    unstakeBase: 300000,
    unstakePerEpoch: 16000,
    restakeBase: 350000,
    restakePerEpoch: 20000,
    stake: 150000,
    claimOgTemple: 100000,
  },
  infuraId: '4cd22916292d4fb6be156454978c326b',
  intervals: {
    ascendData: 30_000,
    ascendQuote: 10_000,
  },
  tokens: {
    frax: {
      name: 'Frax',
      address: '0x73651AD693531F9937528009cC204a4d9b696a68',
      decimals: 18,
      symbol: 'FRAX',
    },
    temple: {
      name: 'Temple',
      address: '0x5631d8eA427129e15bDa68F0F9227C149bD29Dcf',
      decimals: 18,
      symbol: 'TEMPLE',
    },
    ogTemple: {
      name: 'OGTemple',
      address: '0x07d6c81fce4263ddeb0610c217c673b315e766f1',
      decimals: 18,
      symbol: 'OGTEMPLE',
    },
    eth: {
      name: 'ETH',
      address: ADDRESS_ZERO,
      decimals: 18,
    },
    weth: {
      name: 'WETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      symbol: 'WETH',
    },
    usdc: {
      name: 'USDC',
      address: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
      decimals: 6,
      symbol: 'USDC',
    },
    usdt: {
      name: 'USDT',
      address: '',
      decimals: 6,
    },
    dai: {
      name: 'DAI',
      address: '0x8c9e6c40d3402480ace624730524facc5482798c',
      decimals: 18,
      symbol: 'DAI',
    },
  },
  network: 5,
  etherscan: 'https://goerli.etherscan.io',
  featureFlags: {
    enableAscend: false,
    nexusOnlyMode: true,
  },
  templeMultisig: '0x3a320fF715dCBbF097e15257B7051dd08fdfb7A2',
  nexus: {
    templeRelicAddress: '0xbb8bB20DA64D4C595eb4Ac8A7cC2cBDcFBfB4306',
    templeShardsAddress: '0xaBf139511C381f7804EdD6E4c78383b775d8CeeF',
    templeSacrificeAddress: '',
    recipes: [
      { id: 0, required_ids: [0, 1], required_amounts: [1, 1], reward_ids: [2], reward_amounts: [1] },
      { id: 2, required_ids: [0, 1], required_amounts: [2, 3], reward_ids: [2], reward_amounts: [1] },
      { id: 3, required_ids: [0, 1, 2], required_amounts: [1, 2, 1], reward_ids: [3], reward_amounts: [1] },
    ],
    shardMetadata: {
      0: {
        id: 1,
        name: 'One',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit velit ac dolor rhoncus, quis lobortis asdf tincidunt. Aliquam risus ex.',
        originUrl: 'https://yyz.com',
        rarity: RARITY_TYPE.EPIC,
      },
      1: {
        id: 2,
        name: 'Two',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit velit ac dolor rhoncus, quis lobortis asdf tincidunt. Aliquam risus ex.',
        originUrl: 'https://yyz.com',
        rarity: RARITY_TYPE.EPIC,
      },
      2: {
        id: 3,
        name: 'Three',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit velit ac dolor rhoncus, quis lobortis asdf tincidunt. Aliquam risus ex.',
        originUrl: 'https://yyz.com',
        rarity: RARITY_TYPE.EPIC,
      },
    },
    quests: [
      {
        id: '1',
        title: 'Spirit of the Sands',
        origin: 'TempleDAO',
        linkUrl: 'https://templedao.link',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan libero sed placerat viverra. Praesent ac vehicula mauris, non ullamcorper metus. Vestibulum ultricies odio at libero pulvinar dapibus sed vel leo.',
        logoUrl: 'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        rewardLogoUrls: [
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        ],
        rarity: RARITY_TYPE.EPIC,
      },
      {
        id: '2',
        title: 'Spirit in the Sky',
        origin: 'TempleDAO',
        linkUrl: 'https://templedao.link',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan libero sed placerat viverra. Praesent ac vehicula mauris, non ullamcorper metus. Vestibulum ultricies odio at libero pulvinar dapibus sed vel leo.',
        logoUrl: 'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        rewardLogoUrls: [
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        ],
        rarity: RARITY_TYPE.EPIC,
      },
      {
        id: '3',
        title: 'Lightning in the Bottle',
        origin: 'TempleDAO',
        linkUrl: 'https://templedao.link',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan libero sed placerat viverra. Praesent ac vehicula mauris, non ullamcorper metus. Vestibulum ultricies odio at libero pulvinar dapibus sed vel leo.',
        logoUrl: 'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        rewardLogoUrls: [
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
          'https://myst.mypinata.cloud/ipfs/QmaTErwf7sV9WzfP86GjDfnRBwKL74y2j9H4vUwNr7jMhE/0.png',
        ],
        rarity: RARITY_TYPE.EPIC,
      },
    ],
  },
};

export default env;