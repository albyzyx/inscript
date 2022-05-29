import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  connectWallet,
  disconnectWallet,
  connectWalletIfCache,
  selectAuthState,
} from "../redux/authSlice";

import { ethers } from "ethers";

import { AppDispatch } from "../redux/store";
import { ChainType } from "../constants/types";
import { requestChainChange } from "../services/web3/web3Chain";
import { initChain, supportedChains } from "../constants/SupportedChains";

const WalletConnect = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const { address, balance } = useSelector(selectAuthState);

  useEffect(() => {
    dispatch(connectWalletIfCache());
  }, []);

  useEffect(() => {
    onLoadChainSwitch(supportedChains[initChain]);
  }, []);
  useEffect(() => {
    console.log("home");
  }, []);

  //   useEffect(() => {
  //     if (window.ethereum) {
  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //     }
  //   });

  const onConnect = () => {
    dispatch(connectWallet());
  };
  const onDisconnect = () => {
    dispatch(disconnectWallet());
  };

  const onLoadChainSwitch = (chain: ChainType) => {
    requestChainChange(chain)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return !address ? (
    <button onClick={onConnect}>Connect</button>
  ) : (
    <button onClick={onDisconnect}>
      {address}{" "}
      {ethers.utils.formatUnits(
        ethers.BigNumber.from(balance).toNumber().toString()
      )}
    </button>
  );
};

export default WalletConnect;
