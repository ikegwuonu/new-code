import axios from "axios";
import API_ENDPOINT from "./endpoints";
import { ILatestEpisode, ITopPodcast, ITrendingEpisode } from "../types";

export const client = axios.create({
  baseURL: "https://api.wokpa.app/api/listeners",
  headers: {
    "Content-Type": "application/json",
  },
});
client.interceptors.response.use(
  (response) => response,

  (error) => Promise.reject(error?.response)
);

export const getTopPodcasts = async () => {
  const response = await client.get<ITopPodcast>(API_ENDPOINT.getTopPodcasts);
  return response.data;
};
export const getTopCategories = async () => {
  const response = await client.get(API_ENDPOINT.getTopCategories);
  return response.data;
};
export const getTrendingEpisodes = async () => {
  const response = await client.get<ITrendingEpisode>(
    API_ENDPOINT.getTrendingEpisodes
  );
  return response.data;
};
export const getPodcastSearch = async (search: string) => {
  const response = await client.get(API_ENDPOINT.getPodcastSearch(search));
  return response.data;
};
export const getPodcast = async (id: string) => {
  const response = await client.get(API_ENDPOINT.getPodcast(id));
  return response.data;
};
export const getPodcastEpisodes = async (id: string) => {
  const response = await client.get(API_ENDPOINT.getPodcastEpisodes(id));
  return response.data;
};
export const getEpisode = async (id: string) => {
  const response = await client.get(API_ENDPOINT.getEpisode(id));
  return response.data;
};
export const getLatestEpisodes = async () => {
  const response = await client.get<ILatestEpisode>(
    API_ENDPOINT.getLatestEpisodes()
  );
  return response.data;
};
