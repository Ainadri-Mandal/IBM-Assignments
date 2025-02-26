// script.js - Movie Management System Logic

document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const movieTable = document.getElementById("movieTable");
    const searchInput = document.getElementById("search");

    if (movieForm) {
        movieForm.addEventListener("submit", addMovie);
    }

    if (movieTable) {
        displayMovies();
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterMovies);
    }
});

function addMovie(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const year = document.getElementById("year").value;
    const rating = document.getElementById("rating").value;
    const genre = document.getElementById("genre").value;
    const poster = document.getElementById("poster").value;

    if (!name || !description || !year || !rating || !genre || !poster) {
        alert("Please fill out all fields");
        return;
    }

    const movie = { name, description, year, rating, genre, poster };
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    alert("Movie added successfully!");
    movieForm.reset();
}

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    const movieTable = document.getElementById("movieTable");
    movieTable.innerHTML = "";

    if (movies.length === 0) {
        movieTable.innerHTML = "<tr><td colspan='7'>No movies added yet!</td></tr>";
        return;
    }

    movies.forEach((movie, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + "..." : movie.description}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50"></td>
            <td><button onclick="deleteMovie(${index})">Delete</button></td>
        `;
        movieTable.appendChild(row);
    });
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

function filterMovies() {
    let query = document.getElementById("search").value.toLowerCase();
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let filteredMovies = movies.filter(movie =>
        movie.name.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query)
    );
    
    const movieTable = document.getElementById("movieTable");
    movieTable.innerHTML = "";
    
    if (filteredMovies.length === 0) {
        movieTable.innerHTML = "<tr><td colspan='7'>No movies found!</td></tr>";
        return;
    }
    
    filteredMovies.forEach((movie, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + "..." : movie.description}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50"></td>
            <td><button onclick="deleteMovie(${index})">Delete</button></td>
        `;
        movieTable.appendChild(row);
    });
}
