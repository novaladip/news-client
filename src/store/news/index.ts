import { NewsModel, News } from "./model";
import { action, thunk } from "easy-peasy";
import { fetchItem, fetchItems, addNews } from "./service";

export const newsModel: NewsModel = {
  item: {} as News,
  items: {
    current_page: 1,
    total: 1,
    data: []
  },
  addItems: action((state, payload) => {
    state.items = {
      ...state.items,
      data: [payload, ...state.items.data]
    };
  }),
  setItem: action((state, payload) => {
    state.item = payload;
  }),
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  fetchItem: thunk(async (action, payload) => {
    action.setItem({} as News);
    const news = await fetchItem(payload);
    action.setItem(news);
  }),
  fetchItems: thunk(async (action, payload) => {
    const news = await fetchItems(payload);
    action.setItems(news);
  }),
  addNews: thunk(async (action, payload) => {
    const news = await addNews(payload);
    action.addItems(news);
  })
};
