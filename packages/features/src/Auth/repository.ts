import {
  SignInByUserNameResponse,
  SignInData,
} from "./SignInByUserName/domain/types";

export interface AuthRepository {
  signInByUserName: (username: SignInData) => Promise<SignInByUserNameResponse>;
}
