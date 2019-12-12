import {
  FetchItemsDto,
  News,
  FetchItemDto,
  AddNewsDto,
  Items,
  RemoveNewsDto,
  AddCommentDto,
  NewsComment,
  DeleteCommentDto,
  UpdateNewsDto
} from "../model";
import { handleAxiosError, api } from "src/common";

export async function fetchItems(fetchItemsDto: FetchItemsDto): Promise<Items> {
  try {
    const res = await api.get<{ data: Items }>("api/news", {
      params: fetchItemsDto
    });
    const data = await res.data.data;
    return {
      current_page: data.current_page,
      total: data.total,
      data: data.data
    };
  } catch (error) {
    console.log(error);
    throw handleAxiosError(error);
  }
}

export async function fetchItem(fetchItemDto: FetchItemDto): Promise<News> {
  try {
    const res = await api.get<{ data: News }>(`api/news/${fetchItemDto.id}`);
    return await res.data.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function addNews(addNewsDto: AddNewsDto): Promise<News> {
  try {
    const res = await api.post<{ data: News }>("api/news", addNewsDto);
    return await res.data.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function removeNews(removeNewsDto: RemoveNewsDto): Promise<void> {
  try {
    await api.delete("api/news/" + removeNewsDto.id);
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function addComment(
  addCommentDto: AddCommentDto
): Promise<NewsComment> {
  try {
    const res = await api.post<{ data: NewsComment }>(
      `/api/news/${addCommentDto.newsId}/comment`,
      { text: addCommentDto.text }
    );
    return await res.data.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function deleteComment(
  deleteCommentDto: DeleteCommentDto
): Promise<void> {
  try {
    await api.delete(
      `/api/news/${deleteCommentDto.newsId}/comment/${deleteCommentDto.commentId}`
    );
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function updateNews(updateNewsDto: UpdateNewsDto): Promise<void> {
  try {
    await api.put(`/api/news/${updateNewsDto.newsId}`, updateNewsDto.data);
  } catch (error) {
    throw handleAxiosError(error);
  }
}
