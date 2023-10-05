import { useContractFunction } from "@usedapp/core";

export function useWithdrawToken(contract) {
  const { state, send } = useContractFunction(contract, "withdrawToken", {});
  return { state, send };
}