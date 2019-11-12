import { Action, Thunk } from "easy-peasy";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
  name: string;
}

export interface AuthenticationModel {
  isAuthenticated: boolean;
  setIsAuthenticated: Action<AuthenticationModel, boolean>;
  signUp: Thunk<AuthenticationModel, SignUpDto>;
  signIn: Thunk<AuthenticationModel, SignInDto>;
}
