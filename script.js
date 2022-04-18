  /////////////////////////////////////////
 ////////* Объект и его свойства *////////
/////////////////////////////////////////


// let personalMovieDB = {
// count: 0,
// movies: {},
// actors: {},
// genres: [],
// privat: false,
// start: function() {
// personalMovieDB.movies = +prompt("Сколько фильмов вы уже посмотрели?", '');

// while (personalMovieDB.movies == '' || personalMovieDB.movies == null || isNaN(personalMovieDB.movies)) {
// personalMovieDB.movies = +prompt("Сколько фильмов вы уже посмотрели?", '');
// }
// },





// remembeMyFilms: function() {
// for (let i = 0; i < 2; i++) {
// let a = prompt("Один из полследних просмотренных фильмов?", ''),
// b = prompt("На сколько оцените его?", ''); 

// if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// personalMovieDB.movies[a] = b;
// console.log('done');
// } else {
//alert('Пожалуйста заполните все поля ввода!');
//i--;
// }
// }
// },


// detectPersinalLevel: function() {
// if (personalMovieDB.count < 10) {
// alert('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// alert('Вы классический зритель'); 
// } else if (personalMovieDB.count >= 30) {
// alert('Вы киноман');

// } else {
// alert('Произошла ошибка!');
// }
// },



// showMyDB: function(hidden) {
// if (!hidden) {
// console.log(personalMovieDB);
// }
// },

// toggleVisibleMyDB: function() {
// if(personalMovieDB.privat === false) {
// personalMovieDB.privat = true;
// } else { 
// personalMovieDB.privat = false;
// }
// },

// writeYourGenres: function() {
// for (let i = 1; i <= 3; i++) {
// let genre = prompt(`Ваш любимый жанр под номером ${i}`);


// if(genre != null && genre != '') {
// personalMovieDB.genres[i - 1] = genre;
// } else {
// alert('Пожалуйста заполните все поля ввода!');
// i--;
// }
// }

  ///////////////////////////////////////////////
 ////////*Другй способ передачи данных *////////
///////////////////////////////////////////////

// // for (let i = 1; i <= 1; i++) {
// // let genre = prompt(`Перечислите через запятую ваши любимые жанры`);

// // if(genre != null && genre != '') {
// // personalMovieDB.genres = genre.split(', ');
// // personalMovieDB.genres.sort();
// // } else {
// // alert('Пожалуйста заполните все поля ввода!');
// // i--;

// // }
// // }
  ///////////////////////////////////////////////
 ////////*Другй способ передачи данных *////////
///////////////////////////////////////////////

// personalMovieDB.genres.forEach((item, i) => {
// console.log(`Любимый жанр ${i + 1} - это ${item}`);
// });
// }


// };

///////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////
 ////////*Отлавливание ошибок в своем коде при помощи консоли разработчика *////////
///////////////////////////////////////////////////////////////////////////////////


// function hello() {
// console.log('Hello World');
// }
// hello();

// function hi() {
// console.log('Say hi!');
// }
// hi();


// const arr = [54, 14, 30, 4, 1],
// sorted = arr.sort(compareNum);

// function compareNum(a, b) {
// return a - b;
// }

// console.log(sorted);


// console.log(typeof(String(null)));

  //////////////////////////////////////////////
 ////////*Динамическая типизация в JS *////////
//////////////////////////////////////////////

// // To string 

// /* 1) */
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// /* 2) */
// console.log(typeof(5 + ''));

// const num = 5;
// console.log("http://vk.com/catalog/" + num);
// const fontSize = 26 + 'px';

// //To number /////////////////

// /* 1) */
// console.log(typeof(Number('4')));
// console.log(typeof('+4'));

// /* 2) */
// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('Hello', '');

// // To boolean /////////////////

// // 0, '', null, undefined, NaN; = false


// /* 1) */
// let switcher = null;

// if (switcher) {
// console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
// console.log('Working...');
// }

// /* 2) */

// console.log(typeof(Boolean('4')));

// /* 3) */
// console.log(typeof(!!'4444'));


  ////////////////////////////////////
 ////////*Область видимости *////////
////////////////////////////////////

// let scope = "глобальная"; // Объявление глобальной переменной
// function checkscope() {
//var scope = "локальная"; // Объявление локальной переменной с тем же именем
//document.write(scope); // Используется локальная переменная, а не глобальная
// }
// checkscope(); 

  ////////////////////////////////////////////
 ////////* Цикл с использованием do *////////
////////////////////////////////////////////


// //let num = 2; 
// //do {
// //let a = prompt("Один из полследних просмотренных фильмов?", '');
// //let b = prompt("На сколько оцените его?", ''); 
 
// //num++;
// //personalMovieDB.movies[a] = b;
// // }
// // while (num < 4);

// // switch (personalMovieDB.count) {
// // case 10:
// // alert('Просмотренно довольно мало фильмов');
// // break;
// // case20:
// // alert('Вы классический зритель');
// // break;
// // case30:
// // alert('Вы киноман');
// // break;
// // default:
// // alert('Произошла ошибка!');
// // break;
// // }

  ////////////////////////////////////
 ////////* callback function*////////
////////////////////////////////////


// function first() {
// setTimeout(function() {
// console.log(1);
// }, 2000);

// }
// first();

  ////////////////////////////////////////////
 ////////* Деструктуризация объекта *////////
////////////////////////////////////////////

// const options = {
// name: 'test',
// width: 1024,
// height: 1024,
// color: {
// border: 'black',
// bg: 'red'
// },
// makeTest: function() {
// console.log("test");
// }
// };
// options.makeTest();

// const {border, bg} = options.color;
// console.log(border);

// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
// if (typeof(options[key]) === 'object') {
// for (let i in options[key]) {
// console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// counter++
// }
// } else {
// console.log(`Свойство ${key} имеет значение ${options[key]}`);
// counter++;
// }
// }
// console.log(counter); 


/* Методы массива*/

// const arr = [2, 13, 26, 8, 10];

// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
// return a - b;
// }

// const str = prompt('', '');
// const rs = str.split(', ');
// rs.sort();
// console.log(rs.join('; '));




// const newArr = arr.map(el => el * 3); 
// console.log(arr);
// console.log(newArr);


// arr.forEach(function(item, i, arr) {
// console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.unshift(15);

// // console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// // console.log(arr[i]);
// // }

// for (let value of arr) {
// console.log(value);
// }

  ///////////////////////////////////////////////
 ////////* Копирование свойств объекта *////////
///////////////////////////////////////////////

// const video = ['youtube', 'vimo', 'rutube'],
// blogs = ['woedpress', 'livejounal', 'blogger'],
// internet= [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// const newArr = ['a', 'b', 'c', 'd',];
// const oldArr = newArr.slice();
// oldArr[1] = 64;
// console.log(oldArr);
// console.log(newArr);


// const products = {
// color: 'red',
// age: 26,
// name: 'John',
// numbers: {
// a: 1,
// b: 2
// }
// };

// const tehno = {
// mouse: 'loghitech',
// keyboard: 'omen'
// };
 
// const allProducts = Object.assign(products, tehno);
// console.log(allProducts);


// const newProducts = JSON.parse(JSON.stringify(products));
// newProducts.numbers.a = 654;
// console.log(products);
// console.log(newProducts);



// function copy(mainObj) {
// let objCopy = {};

// let key;
// for (key in mainObj) {
// objCopy[key] = mainObj[key];

// }
// return objCopy;
// }


// const newProducts = copy(products);
// newProducts.age = 30;
// newProducts.numbers.b = 'Elizabhet';

// console.log(products);
// console.log(newProducts);
  //////////////////////////////////////////////////////////////////
 ////////*ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДИЕ *////////
//////////////////////////////////////////////////////////////////

// const solider = {
// health: 400,
// armor: 100,
// sayHello: function() {
// console.log('Hello');
// }
// };

// const John = Object.create(solider); /* Создаем объект с названием John и передаем значение прототипа Solider */

 

// Object.setPrototypeOf(John, solider); /* Джон унаследует прототип от солдата */

  //////////////////////////////////////////////////
 ////////*Получение элементов со страницы *////////
//////////////////////////////////////////////////

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');

// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
// console.log(item);
// });

// const oneButton = document.querySelector('button');
// console.log(oneButton);

  ////////////////////////////////////////////////////
 ////////* Действия с элементами на странце *////////
////////////////////////////////////////////////////


// const box = document.getElementById('box'),
// btns = document.getElementsByTagName('button'),
// circles = document.getElementsByClassName('circle'),
// wrapper = document.querySelector('.wrapper'),
// hearts = wrapper.querySelectorAll('.heart'),
// oneHeart = wrapper.querySelector('.heart');


// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = `
// background-color: yellow;
// width: 300px; 
// border-radius: 50%; 
// border-style: groove; 
// border-color: #00d; 
// border-width: 10px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'green';


// // for (let i = 0; i < hearts.length; i++) {
// // hearts[i].style.backgroundColor = 'brown';
// // }


// hearts.forEach(item => {
// item.style.backgroundColor = 'brown';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('This is me');

//div.classList.add('black');

// wrapper.append(div);
// // wrapper.prepend(div);
// // wrapper.appendChild(div);

// // hearts[0].before(div);

// // wrapper.insertBefore(div, hearts[2]);
// // hearts[0].after(div);

// // circles[0].remove();
// // wrapper.removeChild(hearts[1]);



// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0] );

// div.innerHTML = '<h1>Hello World</h1>';

// // div.textContent = 'Hello';
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

  /////////////////////////////////////////
 ////////*События и их обработки *////////
/////////////////////////////////////////

// const btns = document.querySelectorAll('button'),
// overlay = document.querySelector('.overlay');

// btn.onclick = function() {
// alert('Click');
// };

// let i = 0;
// const deleteElement = (e) => {
// console.log(e.currentTarget);
// console.log(e.type);
// i++;
// if (i == 1) {
// btn.removeEventListener('click', deleteElement);
// }
// };


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
// btn.addEventListener('click', deleteElement, {once: true});
// });

// const link = document.querySelector('a');
// link.addEventListener('click', () => {
// event.preventDefault();

// console.log(event.target);
// });

 ////////////////////////////////////////////////////////////////////////////////////
////////* Навигация по DOM - элементам, data-атрибуты, преимущество for_of *////////
///////////////////////////////////////////////////////////////////////////////////

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {

// if (node.nodeName == '#text'){
// continue;
// }

// console.log(node);
// }


  ////////////////////////////////////////////////////
 ////////* События на мобильных устройствах *////////
////////////////////////////////////////////////////

// 1) touchstart - Cрабатывает при возникновении касания к элементу.
// 2) touchmove - Возникает при перемещении пальца по экрану при условии, если палец находится над данным элементом.
// 3) touchend - Cрабатывает при отрыве пальца от элемента.
// 4) touchenter - Происходит при перемещении касания внутрь данного элемента.
// 5) touchleave - Происходит при перемещении касания за границы элемента. 
// 6) touchcancel - Cрабатывает тогда, когда точка соприкосновения большне не регестрируется на поверхности.

// window.addEventListener('DOMContentLoaded', () => {
//   const box = document.querySelector('.box');

//   box.addEventListener('touchstart', (e) => {
//     e.preventDefault();
//     console.log('start');
//     console.log(e.targetTouches);
//   });

//   // box.addEventListener('touchmove', (e) => {
//   //   e.preventDefault();
//   //   console.log('Move');
//   // });
//   // box.addEventListener('touchend', (e) => {
//   //   e.preventDefault();
//   //   console.log('end');
//   // });
// });

// touches - показывает список всех пальцев, которые сейчас взаимодействуют с экраном
// targetTouches - показывает список всех пальцев, которые взаимодействуют с конкретнм элементом
// changedToushes - показывает список пальцев, которые участвуют в текущем событии

  /////////////////////////////////////////////////////
 ////////* Async, defer динамические скрипты *////////
/////////////////////////////////////////////////////



// Defer
// Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда DOM дерево будет полностью построено. Скрипты с defer никогда не блокируют страницу.

// Async
// При наличии атрибута async браузер при возможности запускает скрипт асинхронно. Это означает, что указанный в атрибуте src файл будет выполняться без ожидания загрузки и отображения веб-страницы. В то же время и страница не ожидает результата выполнения скрипта, а продолжает загружаться как обычно.

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript('test.js');
loadScript();



























/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */







//////////////////////////////////////////////////////
// image = document.getElementsByTagName('img');


//for (let i = 3; i !== 0; i--) {
//image[i].remove();
// }


// console.log(image);



// const promoGenre = document.getElementsByClassName('promo__genre');
// promoGenre[0].innerHTML ='Драмма';

////////////////////////////////////////////////////////////////

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// document.addEventListener('DOMContentLoaded', () => {
//   const movieDB = {
//       movies: [
//           "Логан",
//           "Лига справедливости",
//           "Ла-ла лэнд",
//           "Одержимость",
//           "Скотт Пилигрим против..."
//           ] 
//       };
      
      
      
//       /* Правильное решение */

//       const adv = document.querySelectorAll('.promo__adv img'),
//             poster = document.querySelector('.promo__bg'),
//             genre = poster.querySelector('.promo__genre'),
//             movieList = document.querySelector('.promo__interactive-list');
//             addForm = document.querySelector('form.add'),
//             addInput = addForm.querySelector('.adding__input'),
//             checkbox = addForm.querySelector("[type='checkbox']");

//             addForm.addEventListener('submit', () => {
//           event.preventDefault();

//               let newFilm = addInput.value;
//               const favorite = checkbox.checked;
              
//               if (favorite) {
//                   console.log('Добавляем любимый фильм');
//               }

//               if (newFilm) {

                  

//                   if (newFilm.length > 21) {
//                       newFilm = `${newFilm.substring(0, 22)}...`;
//                   }
                  

                  
//                   movieDB.movies.push(newFilm);
//                   sortArr(movieDB.movies);

//                   createMovieList(movieDB.movies, movieList);
//               }
              

//               event.target.reset();



//             });
      
          
      
// const deleteAdv = (arr) => {
//   arr.forEach(item => {
//       item.remove();
//       });
// };


      
     
//       const makeChanges = () => {
//           genre.textContent = 'драма';
      
//           poster.style.backgroundImage = 'url("/img/bg.jpg")';
//       };
      


//       const sortArr = (arr) => {
//           arr.sort();
//       };

      
      

//       function createMovieList(films, parent) {
//           parent.innerHTML = "";
//           sortArr(films);
      
          
          
//          films.forEach((film, i) => {
//           movieList.innerHTML += `
//           <li class="promo__interactive-item">${i + 1} ${film}
//           <div class="delete"></div>
//           `;
//           });
          

//           document.querySelectorAll('.delete').forEach((btn, i) => {
//               btn.addEventListener('click', () => {
//                   btn.parentElement.remove();
//                   movieDB.movies.splice(i, 1);

//                   createMovieList(films, parent);
//               });
//           });



//       }


      
//       deleteAdv(adv);
//       makeChanges();
      
//       createMovieList(movieDB.movies, movieList);
      

      
// });



// Возьмите свой код из предыдущей практики
//////////////////////////////////////////////////////