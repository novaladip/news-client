import { FetchItemsDto, News, FetchItemDto, AddNewsDto } from "../model";
import { handleAxiosError, api } from "src/common";

export async function fetchItems(
  fetchItemsDto: FetchItemsDto
): Promise<News[]> {
  try {
    const res = await api.get<News[]>("api/news", { params: fetchItemsDto });
    return await res.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function fetchItem(fetchItemDto: FetchItemDto): Promise<News> {
  try {
    const res = await api.get<News>(`api/news/${fetchItemDto.id}`);
    return await res.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}

export async function addNews(addNewsDto: AddNewsDto): Promise<News> {
  try {
    const res = await api.post<News>("api/news", addNewsDto);
    return await res.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}
