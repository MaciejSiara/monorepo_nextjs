export interface SignInByUserNameResponse {
  username: string;
}

export interface AuthRepository {
  signIn: (username: string) => Promise<SignInByUserNameResponse>;
}
