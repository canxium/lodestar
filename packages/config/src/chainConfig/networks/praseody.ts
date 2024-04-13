/* eslint-disable @typescript-eslint/naming-convention */
import {fromHexString as b} from "@chainsafe/ssz";
import {PresetName} from "@lodestar/params";
import {ChainConfig} from "../types.js";
import {chainConfig as mainnet} from "../configs/mainnet.js";

/* eslint-disable max-len */

export const praseodyChainConfig: ChainConfig = {
  ...mainnet,
  
  PRESET_BASE: PresetName.praseody,
  CONFIG_NAME: "praseody",

  MIN_GENESIS_TIME: 1712311200,

  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 164,

  GENESIS_DELAY: 600,

  // Praseody testnet
  DEPOSIT_CHAIN_ID: 30203,
  DEPOSIT_NETWORK_ID: 30203,
  DEPOSIT_CONTRACT_ADDRESS: b("0x55155Ca1F57bbDB1e8e10EBB871c00D809E5E84f"),

  // Forking
  // Genesis
  GENESIS_FORK_VERSION: b("0x00322300"),
  // Altar
  ALTAIR_FORK_VERSION: b("0x00323300"),
  ALTAIR_FORK_EPOCH: 1,
  // Bellatrix
  BELLATRIX_FORK_VERSION: b("0x00324300"),
  BELLATRIX_FORK_EPOCH: 10,
  // Capella
  CAPELLA_FORK_VERSION: b("0x00325300"),
  CAPELLA_FORK_EPOCH: 40,
  // Dened
  DENEB_FORK_VERSION: b("0x00326300"),
  DENEB_FORK_EPOCH: Infinity,

  TERMINAL_TOTAL_DIFFICULTY: BigInt("1016000000"),

  SECONDS_PER_SLOT: 6,
  SECONDS_PER_ETH1_BLOCK: 6,
  ETH1_FOLLOW_DISTANCE: 128,
};
