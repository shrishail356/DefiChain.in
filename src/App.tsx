
import { UserProvider } from '../src/components/UserContext.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider,  midnightTheme } from '@rainbow-me/rainbowkit';
import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, polygon, optimism, arbitrum, base, zora} from 'wagmi/chains';
import HomePage from './pages/HomePage.tsx';
import Quest1 from './pages/Quest1.tsx';
import Quest2 from './pages/Quest2.tsx';
import HomePagePower from './components/HomePagePower.tsx';
import Quest3 from './pages/Quest3.tsx';
import Quest4 from './pages/Quest4.tsx';
import Quest5 from './pages/Quest5.tsx';
import Quest6 from './pages/Quest6.tsx';
import Quest7 from './pages/Quest7.tsx';
import Quest8 from './pages/Quest8.tsx';
import AboutUs from './components/AboutUs.tsx';
import HomePageTrack from './pages/HomePage_track.tsx';
import AddressPage from './pages/AddressPage.tsx';
const defichain: Chain = {
  id: 1130,
  name: 'DeFiChain DMC',
  network: 'DeFiChain mainnet',
  iconUrl: 'https://cryptologos.cc/logos/defichain-dfi-logo.svg?v=029',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'DeFiChain mainnet',
    symbol: 'DFI',
  },
  rpcUrls: {
    public: { http: ['https://dmc.mydefichain.com/mainnet'] },
    default: { http: ['https://dmc.mydefichain.com/mainnet'] },
  },
  blockExplorers: {
    default: { name: 'DefiChain', url: 'https://mainnet-dmc.mydefichain.com:8441' },
    etherscan: { name: 'DefiChain', url: 'https://mainnet-dmc.mydefichain.com:8441' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0x98318b00...ae6489c42b',
  //     blockCreated: 39349,
  //   },
  //},
  testnet: false,
};
const { chains, publicClient } = configureChains(
  [defichain, mainnet,polygon, optimism, arbitrum, base, zora],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'MART',
  projectId: '5f06164d03e39235183d93d0e07b9405',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = () => {
  return (
    <UserProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          theme={midnightTheme({
            accentColor: '#00FFFFFF',
            accentColorForeground: 'white',
            borderRadius: 'large',
          })}
        >
          <Router>
            <main className="absolute top-0 left-0 w-full">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quest_1" element={<Quest1 />} />
                <Route path="/quest_2" element={<Quest2 />} />
                <Route path="/quest_3" element={<Quest3 />} />
                <Route path="/quest_4" element={<Quest4 />} />
                <Route path="/quest_5" element={<Quest5 />} />
                <Route path="/quest_6" element={<Quest6 />} />
                <Route path="/quest_7" element={<Quest7 />} />
                <Route path="/quest_8" element={<Quest8 />} />
                <Route path="/voting" element = {<HomePagePower />} />
                <Route path="/about" element = {<AboutUs />} />
                <Route path='/explorer' element={!window.location.search.includes('?address=') ? <HomePageTrack /> : <AddressPage />}/>
              </Routes>
            </main>
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </UserProvider>
  );
};

export default App;
