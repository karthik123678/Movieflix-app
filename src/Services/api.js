const API_KEY = "enter your api key";

const BASE_URL = "https://api.themoviedb.org/3";


// Get Popular Movies

export const GetPopularMovies = async () => {

    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data.results;
};



// Search Movies

export const SearchMovies = async (query) => {

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    return data.results;
};
