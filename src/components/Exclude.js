import { OLD_REWARD_ADDRESS_1, RBA_ADDRESS } from "constants/Address";
import React from "react";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import RBA_ABI from "abi/Rba.json";
import { useDebounce } from "usehooks-ts";

export default function Exclude() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [token, setToken] = React.useState("");
  const [isExcluded, setIsExcluded] = React.useState(true);


  const debouncedToken = useDebounce(token, 500);
  const debouncedIsExcluded = useDebounce(isExcluded, 500);

  const { config } = usePrepareContractWrite({
    address: RBA_ADDRESS,
    abi: RBA_ABI,
    functionName: "excludeFromFees",
    args: [debouncedToken, debouncedIsExcluded,],
    enabled: Boolean(debouncedToken && debouncedIsExcluded),
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
          <h1>Withdraw Reward 1 Year</h1>
        </div>
        <div className="col-md-12">
          <label htmlFor="inputToken" className="form-label">Address</label>
          <input type="text" onChange={(e) => setToken(e.target.value)} className="form-control" id="inputToken" />
        </div>
        <div className="col-md-12">
          <div className="form-check form-switch">

            <label htmlFor="inputReceiver" className="form-check-label">Is Excluded ?</label>
            <input id="inputReceiver" type="checkbox" checked={isExcluded} className="form-check-input" onChange={() => {
              setIsExcluded(!isExcluded)
            }} />
          </div>
        </div>
        <div className="col-12">
          <button disabled={!write} onClick={() => {
            write?.()
          }} className={write ? "btn btn-primary" : "btn btn-secondary"}>Submit</button>
        </div>
      </div>

    </div>
  );

}