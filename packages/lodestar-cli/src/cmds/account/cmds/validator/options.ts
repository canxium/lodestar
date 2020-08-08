import {ICliCommandOptions} from "../../../../util";
import {defaultAccountPaths} from "../../paths";

export interface IAccountValidatorArgs {
  keystoresDir?: string;
  secretsDir?: string;
}

export const accountValidatorOptions: ICliCommandOptions<IAccountValidatorArgs> = {
  keystoresDir: {
    description: "Directory for storing validator keystores.",
    defaultDescription: defaultAccountPaths.keystoresDir,
    normalize: true,
    type: "string",
  },

  secretsDir: {
    description: "Directory for storing validator keystore secrets.",
    defaultDescription: defaultAccountPaths.secretsDir,
    normalize: true,
    type: "string",
  },
};
