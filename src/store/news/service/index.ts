import { FetchItemsDto, News, FetchItemDto, AddNewsDto, Items } from "../model";
import { handleAxiosError, api } from "src/common";

export async function fetchItems(fetchItemsDto: FetchItemsDto): Promise<Items> {
  try {
    const res = await api.get<Items>("api/news", { params: fetchItemsDto });
    return await res.data;
  } catch (error) {
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
