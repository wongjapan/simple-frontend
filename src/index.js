import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { bsc } from 'wagmi/chains';
const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    chains: [bsc],
    walletConnectProjectId: "c5d4c5cfda8b5f08b4855d594ed0832b"

  }),
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>

  </React.StrictMode>
);
