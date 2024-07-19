export interface ApiShow {
  image: { medium: string };
  name: string;
  premiered: string;
  network: { name: string };
  status: string;
  runtime: string;
  genres: string[];
  summary: string;
}

export interface Show extends ApiShow {
  id: string;
}
