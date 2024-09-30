import { type AuthRepository as IAuthRepository } from "@features/Auth/domain";

import { SignInResponseDto } from "./dto";

// converter specific for Core app
export const dtoToDomain = {
  signInResponse: (
    dto: SignInResponseDto
  ): Awaited<ReturnType<IAuthRepository["signIn"]>> => {
    return { username: dto.name + dto.surname };
  },
};
