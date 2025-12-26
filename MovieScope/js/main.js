const form = document.querySelector("#form"),
    searchInput = document.querySelector("#searchInput");

const movieApi = new MovieAPI;

runEventListener();

function runEventListener() {
    document.addEventListener("DOMContentLoaded", movieApi.getPopularMovies());
    form.addEventListener("submit", getMoviesByName);
}

function getMoviesByName(e) {
    e.preventDefault();
    const movieName = searchInput.value.trim();
    movieApi.getMoviesByName(movieName);
}
