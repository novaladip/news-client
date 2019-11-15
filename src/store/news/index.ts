import { NewsModel, News } from "./model";
import { action, thunk } from "easy-peasy";
import {
  fetchItem,
  fetchItems,
  addNews,
  removeNews,
  addComment,
  deleteComment,
  updateNews
} from "./service";

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
    const data = await fetchItems(payload);
    action.setItems(data);
  }),
  addNews: thunk(async (action, payload) => {
    const news = await addNews(payload);
    action.addItems(news);
  }),
  removeNews: thunk(async (action, payload) => {
    await removeNews(payload);
  }),
  addCommentItem: action((state, payload) => {
    if (state.item.comments) {
      state.item.comments = [payload, ...state.item.comments];
    }
  }),
  addComment: thunk(async (action, payload) => {
    const data = await addComment(payload);
    action.addCommentItem(data);
  }),
  removeCommentItem: action((state, payload) => {
    if (state.item.comments) {
      state.item.comments = state.item.comments.filter(
        comment => comment.id !== payload.commentId
      );
    }
  }),
  deleteComment: thunk(async (action, payload) => {
    await deleteComment(payload);
    action.removeCommentItem({ commentId: payload.commentId });
  }),
  updateNews: thunk(async (action, payload) => {
    await updateNews(payload);
    await action.fetchItems({ page: 1 });
  })
};
