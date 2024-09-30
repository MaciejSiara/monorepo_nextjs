import { type AuthRepository as IAuthRepository } from "@features/Auth/domain";

import { SignInResponseDto } from "./dto";
import { dtoToDomain } from "./transformer";

// simulate API url which returns some dto
// this should be some fetch in the future like
export const AuthRepository: IAuthRepository = {
  signIn: async (userName) => {
    console.log("Signed in with: ", userName);
    const data = await new Promise<SignInResponseDto>((res) =>
      setTimeout(
        () =>
          res({
            name: "NAME:Foo",
            surname: "SURNAME:Bar",
          }),
        2000
      )
    );
    return dtoToDomain.signInResponse(data);
  },
};
