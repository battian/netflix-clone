const LANGUAGE = 'en-US';

const requests = {
  netflixOriginals: `/discover/tv?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}&with_network=123`,
  recommendedForYou: `/trending/all/week?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`,
  trending: `/trending/all/day?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`,
  topMovies: `/movie/top_rated?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`,
  trendingTv: `/trending/tv/day?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`,
  action: `/discover/movie?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  documentary: `/discover/movie?language=${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;
