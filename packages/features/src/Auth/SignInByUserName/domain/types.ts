import { AuthRepository } from "../../repository";

export interface SignInByUserNameResponse {
  username: string;
}

export interface SignInData {
  username: string;
}

export type SignInFinalAction = (res: SignInByUserNameResponse) => void;

export interface Dependencies {
  authRepository: AuthRepository;
  signInFinalAction: SignInFinalAction;
}
