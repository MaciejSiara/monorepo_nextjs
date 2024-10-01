import { type AuthRepository } from "@features/Auth/repository";

import { SignInResponseDto } from "./dto";

// converter specific for Core app
export const dtoToDomain = {
  signInResponse: (
    dto: SignInResponseDto
  ): Awaited<ReturnType<AuthRepository["signInByUserName"]>> => {
    return { username: dto.name + dto.surname };
  },
};
