import { Thunk, Action } from "easy-peasy";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  isAdmin: number;
}

export interface News {
  id: number;
  title: string;
  body: string;
  images: string;
  created_at: string;
  updated_at: string;
  comments?: NewsComment[];
  created_by: User;
}

export interface NewsComment {
  id: string;
  text: string;
  created_at: string;
  updated_at: string;
  news_id: string;
  user_id: string;
  created_by: User;
}

export interface FetchItemsDto {
  page: number;
  search?: string;
}

export interface FetchItemDto {
  id: number;
}

export interface AddNewsDto {
  title: string;
  body: string;
  images: string;
}

export interface Items {
  current_page: number;
  total: number;
  data: News[];
}

export interface NewsModel {
  item: News;
  items: Items;
  addItems: Action<NewsModel, News>;
  setItems: Action<NewsModel, Items>;
  setItem: Action<NewsModel, News>;
  fetchItems: Thunk<NewsModel, FetchItemsDto>;
  fetchItem: Thunk<NewsModel, FetchItemDto>;
  addNews: Thunk<NewsModel, AddNewsDto>;
}
