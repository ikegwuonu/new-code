const API_ENDPOINT = {
  getTopPodcasts: "/top-podcasts?page=1&per_page=55",
  getTopCategories: "/top-categories",
  getTrendingEpisodes: "/popular-and-trending-podcasts?page=1&per_page=15",

  getPodcastSearch: (search: string) =>
    `/podcast-search?q=${search}&page=1&per_page=15`,
  getPodcast: (id: string) => `/podcasts/${id}`,

  getPodcastEpisodes: (id: string) =>
    `/podcasts/${id}/episodes?page=1&per_page=15`,
  getEpisode: (id: string) => `/episodes/${id}`,
  getLatestEpisodes: () => `/episodes/latest?page=1&per_page=15`,
};
export default API_ENDPOINT;
