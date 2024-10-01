import { AuthRepository as IAuthRepository } from "@features/Auth/repository";
import { SignInResponseDto } from "./dto";
import { dtoToDomain } from "./transformer";

/**
 *
 */
// simulate API url which returns some dto
// this should be some fetch in the future like:
// fetchService.post(baseFetchStrategy, {url: "/sign-in", data: {username}})
export const AuthRepository: IAuthRepository = {
  /**
   *
   * @param {IAuthRepository["signInByUserName"]} signInData sign in data required by fetch endpoint
   * @returns {ReturnType<AuthRepository["signInByUserName"]>} sing in result
   */
  signInByUserName: async (signInData) => {
    console.log("Signed in with: ", signInData);
    const data = await new Promise<SignInResponseDto>((res) =>
      setTimeout(
        () =>
          res({
            firstName: "Foo",
            lastName: "Bar",
          }),
        1000
      )
    );
    return dtoToDomain.signInResponse(data);
  },
};
