import { useQuery } from "@tanstack/react-query";
import {
  getPodcast,
  getTopCategories,
  getTopPodcasts,
  getTrendingEpisodes,
  getPodcastSearch,
  getEpisode,
} from ".";
import API_ENDPOINT from "./endpoints";

export const useGetTopPodcasts = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.getTopPodcasts],
    queryFn: getTopPodcasts,
  });
};
export const useGetTopCategories = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.getTopCategories],
    queryFn: getTopCategories,
  });
};
export const useGetTrendingEpisodes = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.getTrendingEpisodes],
    queryFn: getTrendingEpisodes,
  });
};
export const useGetPodcastSearch = (search: string) => {
  return useQuery({
    queryKey: [API_ENDPOINT.getPodcastSearch(search)],
    queryFn: () => getPodcastSearch(search),
  });
};
export const useGetPodcast = (id: string) => {
  return useQuery({
    queryKey: [API_ENDPOINT.getPodcast(id)],
    queryFn: () => getPodcast(id),
  });
};
export const useGetPodcastEpisodes = (id: string) => {
  return useQuery({
    queryKey: [API_ENDPOINT.getPodcastEpisodes(id)],
    queryFn: getTopPodcasts,
  });
};
export const useGetEpisode = (id: string) => {
  return useQuery({
    queryKey: [API_ENDPOINT.getEpisode(id)],
    queryFn: () => getEpisode(id),
  });
};
export const useGetLatestEpisodes = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.getLatestEpisodes()],
    queryFn: getTopPodcasts,
  });
};
