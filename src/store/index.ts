import { createStore } from "easy-peasy";
import { AuthenticationModel } from "./authentication/model";
import { authenticationModel } from "./authentication";

export interface StoreModel {
  authentication: AuthenticationModel;
}

const storeModel: StoreModel = {
  authentication: authenticationModel
};

const store = createStore(storeModel);

export default store;
