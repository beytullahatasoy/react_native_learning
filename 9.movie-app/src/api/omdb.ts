// API: http://www.omdbapi.com/?apikey=[yourkey]&s=Batman

import API_KEYS from "../config/apiKeys";
const API_BASE = "http://www.omdbapi.com/";

export type OmdbSearchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

async function searchMovies(query: string) {
  try {
    const url = `${API_BASE}?apikey=${API_KEYS.OMDB}&s=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("❌Error fetching movie data❌");

    if (error instanceof Error) {
      console.log("Error message:", error.message);
    } else {
      console.log("Unknown error", error);
    }
  }
}

export default searchMovies;
