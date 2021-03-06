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
  id: number;
  text: string;
  created_at: string;
  updated_at: string;
  news_id: number;
  user_id: number;
  user: User;
}

export interface FetchItemsDto {
  page: number;
  search?: string;
}

export interface FetchItemDto {
  id: string;
}

export interface AddNewsDto {
  title: string;
  body: string;
  images: string;
}

export interface RemoveNewsDto {
  id: string;
}

export interface AddCommentDto {
  newsId: string;
  text: string;
}

export interface DeleteCommentDto {
  commentId: number;
  newsId: string;
}

export interface UpdateNewsDto {
  newsId: string;
  data: { title: string; body: string; images: string };
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
  removeNews: Thunk<NewsModel, RemoveNewsDto>;
  addNews: Thunk<NewsModel, AddNewsDto>;
  addComment: Thunk<NewsModel, AddCommentDto>;
  addCommentItem: Action<NewsModel, NewsComment>;
  deleteComment: Thunk<NewsModel, DeleteCommentDto>;
  removeCommentItem: Action<NewsModel, { commentId: number }>;
  updateNews: Thunk<NewsModel, UpdateNewsDto>;
}
