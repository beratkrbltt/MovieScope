class MovieAPI {
    constructor() {
        this.baseImageURL = "https://image.tmdb.org/t/p/w1280/";
        this.popularURL = "https://api.themoviedb.org/3/movie/popular";
        this.searchURL = `https://api.themoviedb.org/3/search/movie?query=`;
        this.options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer"
            }
        };
        this.movies = document.querySelector(".movies");
    }

    async getPopularMovies() {
        const response = await fetch(this.popularURL, this.options);
        const movies = await response.json();
        this.displayInfo(movies);
    }

    async getMoviesByName(movieName) {
        const response = await fetch(this.searchURL + movieName, this.options)
        const movies = await response.json();
        this.displayInfo(movies);
    }


    displayInfo(movies) {
        this.movies.innerHTML = "";
        searchInput.value = "";
        movies.results.forEach(movie =>
            this.movies.innerHTML += `
            <div class="movie">
                <img class="moviePicture" src="${this.baseImageURL}${movie.poster_path}" alt="">
                <div class="info">
                    <h4 class="movieName">${movie.title}</h4>
                    <h5 class="imdbPoint ${this.changeColor(movie.vote_average)} ">${movie.vote_average.toFixed(1)}</h5>
                </div>
            </div>
            `
        )
    }

    changeColor(imdbPoint) {
        if (imdbPoint >= 8) {
            return "green";
        } else if (imdbPoint >= 6) {
            return "yellow"
        }
        return "red";
    }
}
