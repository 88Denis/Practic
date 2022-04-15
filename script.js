



let personalMovieDB = {
count: 0,
movies: {},
actors: {},    
genres: [],
privat: false,
start: function() {
  personalMovieDB.movies = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (personalMovieDB.movies == '' || personalMovieDB.movies == null || isNaN(personalMovieDB.movies)) {
      personalMovieDB.movies = +prompt("Сколько фильмов вы уже посмотрели?", '');
  }
},





remembeMyFilms: function() {
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
    },
    

    detectPersinalLevel: function() {
      if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель'); 
      } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');

      } else {
      alert('Произошла ошибка!');
      }
    },
    


    showMyDB: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },

    toggleVisibleMyDB: function() {
      if(personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else { 
      personalMovieDB.privat = false;
    }
  },
  
  


};

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    

    if(genre != null && genre != '') {
      personalMovieDB.genres[i - 1] = genre;
    } else {
      alert('Пожалуйста заполните все поля ввода!');
      i--;
    }
  }
  personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр ${i + 1} - это ${item}`);
  });
}
writeYourGenres();

          

          


    




    



    


    


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
      

                  /*   Деструктуризация объекта   */

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   color: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("test");
//   }
// };
// options.makeTest();

// const {border, bg} = options.color;
// console.log(border);

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


/* Методы массива  */

// const arr = [2, 13, 26, 8, 10];

// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
//   return a - b;
// }

// const str = prompt('', '');
// const rs = str.split(', ');
// rs.sort();
// console.log(rs.join('; '));




// const newArr = arr.map(el => el * 3); 
// console.log(arr);
// console.log(newArr);


// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.unshift(15);

// // console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (let value of arr) {
//   console.log(value);
// }

          /* Копирование свойств объекта */

  // const video = ['youtube', 'vimo', 'rutube'],
  //       blogs = ['woedpress', 'livejounal', 'blogger'],
  //       internet= [...video, ...blogs, 'vk', 'facebook'];
  //       console.log(internet);

  // const newArr = ['a', 'b', 'c', 'd',];
  // const oldArr = newArr.slice();
  // oldArr[1] = 64;
  // console.log(oldArr);
  // console.log(newArr);


  // const products = {
  //   color: 'red',
  //   age: 26,
  //   name: 'John',
  //   numbers: {
  //     a: 1,
  //     b: 2
  //   }
  // };

  // const tehno = {
  //   mouse: 'loghitech',
  //   keyboard: 'omen'
  // };
 
  // const allProducts = Object.assign(products, tehno);
  // console.log(allProducts);


// const newProducts = JSON.parse(JSON.stringify(products));
// newProducts.numbers.a = 654;
// console.log(products);
// console.log(newProducts);



//   function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
        
//     }
//     return objCopy;
//   }
  

  // const newProducts = copy(products);
  // newProducts.age = 30;
  // newProducts.numbers.b = 'Elizabhet';
  
  // console.log(products);
  // console.log(newProducts);

  /*ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДИЕ */


  // const solider = {
  //   health: 400,
  //   armor: 100,
  //   sayHello: function() {
  //     console.log('Hello');
  //   }
  // };

  // const John = Object.create(solider); /* Создаем объект с названием John и передаем значение прототипа Solider */

 

// Object.setPrototypeOf(John, solider); /* Джон унаследует прототип от солдата */

