/* eslint-disable @typescript-eslint/naming-convention */
import {fromHexString as b} from "@chainsafe/ssz";
import {ChainConfig} from "../types.js";
import {chainConfig as mainnet} from "../configs/mainnet.js";

/* eslint-disable max-len */

export const canxiumChainConfig: ChainConfig = {
  ...mainnet,
  CONFIG_NAME: "canxium",

  MIN_GENESIS_TIME: 1713675600, // Apr 21, 2024, 1209 AM UTC

  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 164,

  GENESIS_DELAY: 777600, // 9 days

  // Praseody testnet
  DEPOSIT_CHAIN_ID: 3003,
  DEPOSIT_NETWORK_ID: 3003,
  DEPOSIT_CONTRACT_ADDRESS: b("0xE616698D7c13E46C538f380da7b67E8FA7929a24"),

  // Forking
  // Genesis
  GENESIS_FORK_VERSION: b("0x00300300"),
  // Altar
  ALTAIR_FORK_VERSION: b("0x00301300"),
  ALTAIR_FORK_EPOCH: 5,
  // Bellatrix
  BELLATRIX_FORK_VERSION: b("0x00302300"),
  BELLATRIX_FORK_EPOCH: 10, // Estimate Apr 30, 2024
  // Capella
  CAPELLA_FORK_VERSION: b("0x00303300"),
  CAPELLA_FORK_EPOCH: 45000, // Estimate 8 August 2024
  // Dened
  DENEB_FORK_VERSION: b("0x00304300"),
  DENEB_FORK_EPOCH: Infinity,

  TERMINAL_TOTAL_DIFFICULTY: BigInt("86680000000000000000"), // Estimate 20 June 2024 if hashrate = 45TH

  SECONDS_PER_SLOT: 6,
  SECONDS_PER_ETH1_BLOCK: 6,
  ETH1_FOLLOW_DISTANCE: 2048,
};
