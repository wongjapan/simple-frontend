import React from "react";
import { Button } from "react-bootstrap";

const ConnectButtonModal = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  if (account) {
    return (
      <>
        <Button className="btn btn-info">
          {account.substring(0, 6)}...{account.substring(account.length - 4)}
        </Button>
        <div className="p2"> </div>
        <Button onClick={deactivate} className="btn btn-primary">
          Disconnect
        </Button>

      </>
    );
  }

  return (
    <Button onClick={() => activateBrowserWallet()} className="btn btn-primary">
      Connect
    </Button>
  );
};

export { ConnectButtonModal };
