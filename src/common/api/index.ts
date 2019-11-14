import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000"
});

export function handleAxiosError(error: AxiosError): any {
  if (error.response) {
    return error.response.data;
  } else {
    return {
      message: "Failed to reach the server, please try again."
    };
  }
}

export function setDefaultAuthJwt(jwt: string): void {
  api.defaults.headers["Authorization"] = `Bearer ${jwt}`;
}
