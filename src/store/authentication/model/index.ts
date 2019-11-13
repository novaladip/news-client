import { Action, Thunk } from "easy-peasy";
import { JwtPayload } from "src/types";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
}

export interface AuthenticationModel {
  isAuthenticated: boolean;
  user: JwtPayload;
  setIsAuthenticated: Action<AuthenticationModel, boolean>;
  setUser: Action<AuthenticationModel, JwtPayload>;
  signUp: Thunk<AuthenticationModel, SignUpDto>;
  signIn: Thunk<AuthenticationModel, SignInDto>;
}
