import { AuthenticationModel } from "./model";
import { action, thunk } from "easy-peasy";

export const authenticationModel: AuthenticationModel = {
  isAuthenticated: false,
  setIsAuthenticated: action((state, payload) => {
    state.isAuthenticated = payload;
  }),
  signIn: thunk(async (action, payload) => {}),
  signUp: thunk(async (action, payload) => {})
};
