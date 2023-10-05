import { OLD_REWARD_ADDRESS_2 } from "constants/Address";
import React from "react";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import OLD_REWARD_ABI from "abi/OldReward.json";
import { useDebounce } from "usehooks-ts";

export default function OldReward2() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [disabled, setDisabled] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [receiver, setReceiver] = React.useState("");

  const debouncedToken = useDebounce(token, 500);
  const debouncedAmount = useDebounce(amount, 500);
  const debouncedReceiver = useDebounce(receiver, 500);

  const { config } = usePrepareContractWrite({
    address: OLD_REWARD_ADDRESS_2,
    abi: OLD_REWARD_ABI,
    functionName: "withdrawToken",
    args: [debouncedToken, debouncedReceiver, debouncedAmount],
    enabled: Boolean(debouncedToken && debouncedAmount && debouncedReceiver),
  })

  const { write } = useContractWrite(config)



  if (isDisconnected) {
    return (
      <>
        Please connect your wallet to continue
      </>
    );
  }

  return (
    <div className="row">
      <div className="row g-3">
        <div className="col-md-12">
          <h1>Withdraw Reward 2 Year</h1>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputToken" className="form-label">Token Address</label>
          <input type="text" onChange={(e) => setToken(e.target.value)} className="form-control" id="inputToken" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputReceiver" className="form-label">Receiver Address</label>
          <input type="text" onChange={(e) => setReceiver(e.target.value)} className="form-control" id="inputReceiver" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAmount" className="form-label">Amount</label>
          <input type="text" onChange={(e) => setAmount(e.target.value)} className="form-control" id="inputAmount" placeholder="in wei" />
        </div>
        <div className="col-12">
          <button disabled={!write} onClick={() => {
            write?.()
          }} className={write ? "btn btn-primary" : "btn btn-secondary"}>Withdraw Token</button>
        </div>
      </div>

    </div>
  );

}