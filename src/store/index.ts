import { createStore } from "easy-peasy";

import { AuthenticationModel } from "./authentication/model";
import { authenticationModel } from "./authentication";
import { NewsModel } from "./news/model";
import { newsModel } from "./news";
export * from "./hooks";

export interface StoreModel {
  authentication: AuthenticationModel;
  news: NewsModel;
}

const storeModel: StoreModel = {
  authentication: authenticationModel,
  news: newsModel
};

const store = createStore(storeModel);

export default store;
