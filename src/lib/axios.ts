import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function httpGet<T>(
  url: string,
  fn: Dispatch<SetStateAction<any>>
) {
  const response = await api.get<T>(url);
  fn(response.data);
}
