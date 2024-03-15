import '../styles/globals.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

// const { chains, provider } = configureChains(
//   [chain.goerli],
//   [
//     infuraProvider({
//       apiKey: 'f0267a8d7d5642caa8735db53507eefd',
//       priority: 1,
//     }),
//   ],
// )

const {chains, provider, webSocketProvider} = configureChains(
  [chain.sepolia],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#18181b',
    accentColorForeground: '#fff',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />

      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
