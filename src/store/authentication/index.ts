import { AuthenticationModel } from "./model";
import { action, thunk } from "easy-peasy";
import { authenticationServices } from "./service";
import {
  saveJwtToLocalStorage,
  setDefaultAuthJwt,
  removeJwtFromLocalStorage
} from "src/common";

export const authenticationModel: AuthenticationModel = {
  isAuthenticated: false,
  setIsAuthenticated: action((state, payload) => {
    if (!payload) {
      removeJwtFromLocalStorage();
    }
    state.isAuthenticated = payload;
  }),
  signIn: thunk(async (action, payload) => {
    const { token } = await authenticationServices.signIn(payload);
    saveJwtToLocalStorage(token);
    setDefaultAuthJwt(`Bearer ${token}`);
    action.setIsAuthenticated(true);
  }),
  signUp: thunk(async (action, payload) => {
    const { token } = await authenticationServices.signUp(payload);
    saveJwtToLocalStorage(token);
    setDefaultAuthJwt(token);
    action.setIsAuthenticated(true);
  })
};
