import axios from "axios";

const API_URL = "https://yts.am/api/v2/";
const LIST_API_URL = `${API_URL}list_movies.json`;
const DETAIL_API_URL = `${API_URL}movie_details.json`;
const SUGGESTIONS_API_URL = `${API_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_API_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(DETAIL_API_URL, {
    params: {
      movie_id: id
    }
  });

  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(SUGGESTIONS_API_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
};
