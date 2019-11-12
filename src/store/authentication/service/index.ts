import { api, handleAxiosError } from "src/common";
import { SignInDto, SignUpDto } from "../model";

interface SignInResponseDto {
  token: string;
}

interface SignUpResponseDto {
  token: string;
}

async function signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
  try {
    const res = await api.post<SignInResponseDto>("/api/login", signInDto);
    return await res.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

async function signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
  try {
    const res = await api.post<SignUpResponseDto>("/api/register", signUpDto);
    return await res.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export const authenticationServices = {
  signIn,
  signUp
};
