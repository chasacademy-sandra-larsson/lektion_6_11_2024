const moviesList = document.getElementById('movies');
const booksList = document.getElementById('books');



// Asynkron funktion som hämtar media-data
async function getMedia() {
    try {
        const response = await fetch("./media.json");

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data;

    } catch(error) {
        console.log(error);
    }
}

// En async funktion returnerar en Promise - vi ska prata mer om det i nästa kurs!
// const data = getMedia();
// console.log(data)


// Visa filmer i html
async function displayMovies() {
    const data = await getMedia();
    data.movies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie.title;
        moviesList.appendChild(li)
    });
    

}
displayMovies();

// Visa böcker i html
async function displayBooks() {
    const data = await getMedia();
    data.books.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = book.title;
        booksList.appendChild(li)
    });
    

}
displayBooks();


