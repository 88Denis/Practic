const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = new Object();
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};    
personalMovieDB.genres = [];
personalMovieDB.privat = false;


let answer_1 = prompt("Один из полследних просмотренных фильмов?", ''),
    answer_2 = prompt("На сколько оцените его?", '');
    answer_3 = prompt("Один из полследних просмотренных фильмов?", ''),
    answer_4 = prompt("На сколько оцените его?", '');

personalMovieDB.movies[answer_1] = [answer_2];
personalMovieDB.movies[answer_3] = [answer_4];
