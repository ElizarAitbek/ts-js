const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganers: [],
    privet: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("Насколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("Насколько оцените его?", "");

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);