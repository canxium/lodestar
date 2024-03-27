/* eslint-disable @typescript-eslint/naming-convention */
import {fromHexString as b} from "@chainsafe/ssz";
import {ChainConfig} from "../types.js";
import {chainConfig as mainnet} from "../configs/mainnet.js";

/* eslint-disable max-len */

export const praseodyChainConfig: ChainConfig = {
  ...mainnet,

  SECONDS_PER_SLOT: 6,
  SECONDS_PER_ETH1_BLOCK: 8,

  ETH1_FOLLOW_DISTANCE: 5,

  CHURN_LIMIT_QUOTIENT: 4096,

  // Ethereum Goerli testnet
  DEPOSIT_CHAIN_ID: 30203,
  DEPOSIT_NETWORK_ID: 30203,
  DEPOSIT_CONTRACT_ADDRESS: b("0x55155Ca1F57bbDB1e8e10EBB871c00D809E5E84f"),

  // Dec 8, 2021, 13:00 UTC
  MIN_GENESIS_TIME: 1711616400,
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 2,

  GENESIS_FORK_VERSION: b("0x00322300"),

  GENESIS_DELAY: 1800,

  // Forking
  ALTAIR_FORK_VERSION: b("0x00323300"),
  ALTAIR_FORK_EPOCH: 4,
  // Bellatrix
  BELLATRIX_FORK_VERSION: b("0x00324300"),
  BELLATRIX_FORK_EPOCH: 10,
  // Capella
  CAPELLA_FORK_VERSION: b("0x00325300"),
  CAPELLA_FORK_EPOCH: 225,
  // Dened
  DENEB_FORK_VERSION: b("0x00326300"),
  DENEB_FORK_EPOCH: Infinity,

  TERMINAL_TOTAL_DIFFICULTY: BigInt("4065600000"),

  EJECTION_BALANCE: 160000000000,
};
