const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = new Object({});
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};    
personalMovieDB.genres = [];
personalMovieDB.privat = false;
          
          
          
 for (let i = 0; i < 2; i++) {
  let a = prompt("Один из полследних просмотренных фильмов?", ''),
      b = prompt("На сколько оцените его?", ''); 

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
      } else {
       alert('Пожалуйста заполните все поля ввода!');
       i--;
      }
    }
       if (personalMovieDB.count < 10) {
         alert('Просмотренно довольно мало фильмов');
       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель'); 
       } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');

        } else {
        alert('Произошла ошибка!');
       }


//    let num = 2;   
//  do {
//        let a = prompt("Один из полследних просмотренных фильмов?", '');
//        let b = prompt("На сколько оцените его?", ''); 
       
//        num++;
//        personalMovieDB.movies[a] = b;
//       }
//   while (num < 4);

//   switch (personalMovieDB.count) {
//     case 10:
//       alert('Просмотренно довольно мало фильмов');
//   break;
//     case    20:
//       alert('Вы классический зритель');
//   break;
//     case  30:
//       alert('Вы киноман');
//   break;
//   default:
//     alert('Произошла ошибка!');
//   break;
//   }

         
     
      
    



