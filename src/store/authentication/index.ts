import { AuthenticationModel } from "./model";
import { action, thunk } from "easy-peasy";
import { authenticationServices } from "./service";
import {
  saveJwtToLocalStorage,
  setDefaultAuthJwt,
  removeJwtFromLocalStorage,
  decodeJwt
} from "src/common";
import { JwtPayload } from "src/types";

export const authenticationModel: AuthenticationModel = {
  isAuthenticated: false,
  user: {} as JwtPayload,
  setIsAuthenticated: action((state, payload) => {
    if (!payload) {
      removeJwtFromLocalStorage();
    }
    state.isAuthenticated = payload;
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  signIn: thunk(async (action, payload) => {
    const { token } = await authenticationServices.signIn(payload);
    saveJwtToLocalStorage(token);
    setDefaultAuthJwt(`Bearer ${token}`);
    action.setUser(decodeJwt(token));
    action.setIsAuthenticated(true);
  }),
  signUp: thunk(async (action, payload) => {
    const { token } = await authenticationServices.signUp(payload);
    saveJwtToLocalStorage(token);
    setDefaultAuthJwt(token);
    action.setUser(decodeJwt(token));
    action.setIsAuthenticated(true);
  })
};
