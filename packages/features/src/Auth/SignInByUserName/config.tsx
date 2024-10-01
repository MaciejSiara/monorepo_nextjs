"use client";

import { createClientSideConfig } from "../../utils/configContext";
import { Dependencies } from "./domain/types";

export interface SignInByUserNameConfig extends Dependencies {}

export const [SignInConfigByUserNameProvider, useSignInByUserNameConfig] =
  createClientSideConfig<SignInByUserNameConfig>();
