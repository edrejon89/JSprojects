// REFERENCIAS
const movieTitle = document.querySelector('#movie');
const moviePoster = document.querySelector('#moviePoster');
const movieRating = document.querySelector('#rating');
const movieYear = document.querySelector('#year');
const movieLength = document.querySelector('#length');
const alertNotFound = document.querySelector(".alert");
const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('.form-control');

alertNotFound.style.display = 'none';


// PROVIDER VARIABLES
let pelicula;
// let pelicula = prompt("Pelicula para buscar");
// console.log(pelicula, typeof (pelicula))
if (pelicula === undefined || pelicula === null || pelicula === "") pelicula = "";
const urlPelicula = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/`;
const urlDatosPelicula = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/`
const header = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "042c8c62d4mshfc9b1717917a8dcp1dccc9jsn93da21e16007"
    }
};





const obtenerPelicula = async (urlPelicula) => {

    let resp = await fetch(urlPelicula, header);

    if (!resp.ok) {
        alertNotFound.style.display = 'block';
        setTimeout(()=>{alertNotFound.style.display = 'none';},3000);
        alertNotFound.innerText = "Ingrese un titulo";
        throw 'No se pudo realizar la peticion del id pelicula';
    }

    let dataId = await resp.json();

    resp = await fetch((urlDatosPelicula + dataId.titles[0].id), header);
    if (!resp.ok) throw 'No se pudo realizar la peticion de la pelicula';

    const { title, length, poster, rating, year } = await resp.json();

    return { title, length, poster, rating, year };
}

searchButton.addEventListener('click', (event) => {
    pelicula = searchInput.value;
    console.log("Pelicula value", pelicula);
    mostrarPelicula(pelicula);
});

searchInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
})

const mostrarPelicula = (movie) => {

    obtenerPelicula(urlPelicula + movie)
        .then((data) => {
            console.log(data);
            movieTitle.innerText = data.title;
            moviePoster.setAttribute('src', data.poster);
            moviePoster.style.width = '400px'

            movieRating.innerText = data.rating;
            movieYear.innerText = data.year;
            movieLength.innerText = data.length;
        })
}



console.log('nueva');