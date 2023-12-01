import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, avalancheFuji } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient } = configureChains(
  [polygonMumbai, avalancheFuji],
  [
    // alchemyProvider({
    //   apiKey:
    //     "https://polygon-mumbai.g.alchemy.com/v2/9uK8JeF4i1SOC4XfmM4mlMtF0vPfeKq_",
    // }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "alianza",
  projectId: "2ee5afad05ea7d1918a261d7ca4055b8",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider
      chains={chains}
      coolMode
      theme={darkTheme({
        accentColor: "var(--color-golden)",
        accentColorForeground: "white",
        borderRadius: "medium",
      })}
    >
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
