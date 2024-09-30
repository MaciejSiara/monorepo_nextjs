import { createClientSideConfig } from "../../utils/configContext";
import { AuthRepository, SignInByUserNameResponse } from "../domain";

export interface SignInByUserNameConfig {
  afterSignInAction: (res: SignInByUserNameResponse) => void;
  repository: AuthRepository;
}

export const [SignInConfigByUserNameProvider, useSignInByUserNameConfig] =
  createClientSideConfig<SignInByUserNameConfig>();
