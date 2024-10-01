import { AuthRepository } from "@features/Auth/repository";
import { SignInResponseDto } from "./dto";

// converter specific for Core app
// converts dto to domain data model
export const dtoToDomain = {
  signInResponse: (
    dto: SignInResponseDto
  ): Awaited<ReturnType<AuthRepository["signInByUserName"]>> => {
    return { username: dto.firstName + dto.lastName };
  },
};
