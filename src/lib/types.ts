export interface ITopPodcast {
  message: string;
  data: {
    data: ITopPodcastData[];
  };
}
export interface ITopPodcast {
  message: string;
  data: {
    data: ITopPodcastData[];
  };
}
export interface ITopPodcastData {
  id: number;
  user_id: number;
  title: string;
  author: string;
  category_name: null;
  category_type: string;
  picture_url: string;
  cover_picture_url: null | string;
  description: string;
  embeddable_player_settings: null;
  created_at: string;
  updated_at: string;
  subscriber_count: number;
  publisher: {
    id: number;
    first_name: string;
    last_name: string;
    company_name: string;
    profile_image_url: null | string;
    created_at: string;
    updated_at: string;
  };
}
[];
export interface ElementsVisibility {
  like: boolean;
  logo: boolean;
  share: boolean;
  comments: boolean;
  download: boolean;
}

export interface Player {
  size: string;
  theme: string | null;
  width: string;
  height: string;
  main_color: string;
}

export interface Features {
  info_icon: boolean;
  follow_button: boolean;
  give_tip_button: boolean;
}

export interface Playlists {
  enabled: boolean;
  play_continuously: boolean;
}

export interface EmbeddablePlayerSettings {
  player: Player;
  features: Features;
  playlists: Playlists;
  elements_visiblity: ElementsVisibility;
}

export interface Publisher {
  id: number;
  first_name: string;
  last_name: string;
  company_name: string;
  profile_image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface IPodcast {
  id: number;
  user_id: number;
  title: string;
  author: string;
  category_name: string;
  category_type: string;
  picture_url: string;
  cover_picture_url: string | null;
  description: string;
  embeddable_player_settings: EmbeddablePlayerSettings | null;
  created_at: string;
  updated_at: string;
  subscriber_count: number;
  publisher: Publisher;
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PodcastListResponse {
  data: IPodcast[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ITrendingEpisode {
  message: string;
  data: PodcastListResponse;
}
export interface ILatestEpisode {
  message: string;
  data: PaginatedEpisodes;
}

export interface PaginatedEpisodes {
  data: Episode[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Episode {
  id: number;
  podcast_id: number;
  content_url: string;
  title: string;
  season: number | null;
  number: number | null;
  picture_url: string;
  description: string;
  explicit: boolean;
  duration: number;
  created_at: string;
  updated_at: string;
  play_count: number;
  like_count: number;
  average_rating: number | null;
  podcast: IPodcast;
  published_at: string;
}
export interface ICategories {
  message: string;
  data: {
    name: string;
    image_url: string;
  }[];
}
export interface IGetOnePodcast {
  message: string;
  data: {
    id: number;
    user_id: number;
    title: string;
    author: string;
    category_name: null | string;
    category_type: string;
    picture_url: string;
    cover_picture_url: null;
    description: string;
    embeddable_player_settings: {
      player: {
        size: string;
        theme: string;
        width: string;
        height: string;
        main_color: string;
      };
      features: {
        info_icon: boolean;
        follow_button: boolean;
        give_tip_button: boolean;
      };
      playlists: {
        enabled: boolean;
        play_continuously: boolean;
      };
      elements_visiblity: {
        like: boolean;
        logo: boolean;
        share: boolean;
        comments: boolean;
        download: boolean;
      };
    };
    created_at: string;
    updated_at: string;
    subscriber_count: number;
    publisher: {
      id: number;
      first_name: string;
      last_name: string;
      company_name: string;
      profile_image_url: string;
      created_at: string;
      updated_at: string;
    };
  };
}
export interface IEpisode {
  message: string;
  data: EpisodeData;
}

interface EpisodeData {
  id: number;
  podcast_id: number;
  content_url: string;
  title: string;
  season: number | null;
  number: number | null;
  picture_url: string;
  description: string;
  explicit: boolean;
  duration: number;
  created_at: string;
  updated_at: string;
  play_count: number;
  like_count: number;
  average_rating: number | null;
  podcast: Podcast;
  published_at: string;
}

interface Podcast {
  id: number;
  user_id: number;
  title: string;
  author: string;
  category_name?: string | null;
  category_type: string;
  picture_url: string;
  cover_picture_url: string | null;
  description: string;
  embeddable_player_settings: EmbeddablePlayerSettings2;
  created_at: string;
  updated_at: string;
  publisher: Publisher2;
}

interface EmbeddablePlayerSettings2 {
  player: PlayerSettings;
  features: PlayerFeatures;
  playlists: PlaylistSettings;
  elements_visiblity: ElementVisibility;
}

interface PlayerSettings {
  size: string;
  theme: string;
  width: string;
  height: string;
  main_color: string;
}

interface PlayerFeatures {
  info_icon: boolean;
  follow_button: boolean;
  give_tip_button: boolean;
}

interface PlaylistSettings {
  enabled: boolean;
  play_continuously: boolean;
}

interface ElementVisibility {
  like: boolean;
  logo: boolean;
  share: boolean;
  comments: boolean;
  download: boolean;
}

interface Publisher2 {
  id: number;
  first_name: string;
  last_name: string;
  company_name: string;
  profile_image_url: string;
  created_at: string;
  updated_at: string;
}
