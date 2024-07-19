export interface ApiShow {
  show: {
    id: string;
    image: { medium: string };
    name: string;
    premiered: string;
    network: { name: string };
    status: string;
    runtime: string;
    genres: string[];
    summary: string;
    rating: { average: string };
  };
}

export interface Show {
  id: string;
  image: { medium: string };
  name: string;
  premiered: string;
  network: { name: string };
  status: string;
  runtime: string;
  genres: string[];
  summary: string;
  rating: { average: string };
}

export type ApiShows = ApiShow[];
