// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//   }
// }
// start();

// let personalMovieDB = new Object({});
// personalMovieDB.count = numberOfFilms;
// personalMovieDB.movies = {};
// personalMovieDB.actors = {};    
// personalMovieDB.genres = [];
// personalMovieDB.privat = false;
          

          


//     function writeYourGenres() {
//       for (let i =1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//       }
//     }
//     writeYourGenres();




//     function remembeMyFilms() {
//       for (let i = 0; i < 2; i++) {
//         let a = prompt("Один из полследних просмотренных фильмов?", ''),
//             b = prompt("На сколько оцените его?", ''); 
      
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//             } else {
//              alert('Пожалуйста заполните все поля ввода!');
//              i--;
//             }
//           }
//         }
//         remembeMyFilms();



//     function detectPersinalLevel() {
//       if (personalMovieDB.count < 10) {
//         alert('Просмотренно довольно мало фильмов');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       alert('Вы классический зритель'); 
//       } else if (personalMovieDB.count >= 30) {
//       alert('Вы киноман');

//       } else {
//       alert('Произошла ошибка!');
//       }
//     }
//     detectPersinalLevel();


//     function showMyDB(hidden) {
//       if (!hidden) {
//         console.log(personalMovieDB);
//       }
//     }
//     showMyDB(personalMovieDB.privat);


                                      /* Цикл с использованием do */ 



// //    let num = 2;   
// //  do {
// //        let a = prompt("Один из полследних просмотренных фильмов?", '');
// //        let b = prompt("На сколько оцените его?", ''); 
       
// //        num++;
// //        personalMovieDB.movies[a] = b;
// //       }
// //   while (num < 4);

// //   switch (personalMovieDB.count) {
// //     case 10:
// //       alert('Просмотренно довольно мало фильмов');
// //   break;
// //     case    20:
// //       alert('Вы классический зритель');
// //   break;
// //     case  30:
// //       alert('Вы киноман');
// //   break;
// //   default:
// //     alert('Произошла ошибка!');
// //   break;
// //   }


                 /* callback function*/

      
// function first() {
// setTimeout(function() {
//   console.log(1);
// }, 2000);

// }
// first();
      

                  /*   Destructurization Object   */

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  color: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log("test");
  }
};
options.makeTest();

const {border, bg} = options.color;
console.log(border);

// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++
//       }
//     } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//   }
// }
// console.log(counter); 



