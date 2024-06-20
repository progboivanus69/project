/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// my first homework
/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstMovie = prompt("Один из последних просмотренных фильмов?","");
const firstMovieRat = prompt("На сколько оцените его?","");
const secondMovie = prompt("Один из последних просмотренных фильмов?","");
const secondMovieRat = prompt("На сколько оцените его?","");

personalMovieDB["movies"][firstMovie] = firstMovieRat;
personalMovieDB["movies"][secondMovie] = secondMovieRat;

console.log(personalMovieDB["movies"][firstMovie]);
console.log(personalMovieDB["movies"][secondMovie]);
console.log(personalMovieDB) */

/* const movies = {
    [firstMovie]: firstMovieRat,
    [secondMovie]: secondMovieRat
}
 */
/* const newMov = {};
for (newCount in newMov) {
    newMov[newCount] = prompt("Один из последних просмотренных фильмов?","");
    console.log(newCount)
} */



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
//mySecHom

let arr = [];

while (1) {
    let checker = prompt("Введи фильм, который любишь");
    if (checker === null || checker.length > 50 || checker == ""){
        continue;
    } else if (checker === "стоп"){
        break;
    }
    arr.push(checker);
    console.log(arr);
    (arr.length <10)?console.log("Просмотрено довольно мало фильмов"):(arr.length <=30)?console.log("Вы классический зритель"):console.log("Вы киноман");
}
console.log(arr);


let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[john] = 123; // пробуем использовать объект john в качестве ключа, при этом объект ben будет замещён

// Вот что там было записано!
console.log( visitsCountObj[john] ); // 123




/* let map = new Map({
    0: 1,
    1: "sec",
    2: "Ivan",
    [Symbol.iterator]: function(){
        return {
            mass: Object.keys(this),
            counter:0,
            next(){
                if(this.mass[this.counter] != this.mass.length-1){
                    console.log(this.mass[this.counter]);
                    return { done: false, value: this.counter++ };
                } else {
                    console.log(this.mass[this.counter]);
                    return { done: true };
                }
            }
        }
    }
});

  
  alert( map.get("bro") ); // str1 */



  let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let entrAr = [];
for (let entr of map.entries()){
    entrAr.push(entr);
    console.log(entrAr);
}

let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(entrAr);



let set = new Set();

let joh = { name: "John", other:  "Pete" };
let pete = { name: "Sam" };
let mary = { name: "Mary" };
set.add(joh);
set.add(pete);
set.add(mary);
set.add(joh);
set.add(mary);
set.add([1,2,4,6])

// set хранит только 3 уникальных значения
console.log(set.size); // 3
console.log(set)
for (let val of set){
    console.log(val)
}

let sett = new Set([
    [1,3], [1,5]
]
    /* {
        from: 1,
        to: 5,
      
      // 1. вызов for..of сначала вызывает эту функцию
      [Symbol.iterator]() {
      
        // ...она возвращает объект итератора:
        // 2. Далее, for..of работает только с этим итератором,
        // запрашивая у него новые значения
        return {
          current: this.from,
          last: this.to,
      
          // 3. next() вызывается на каждой итерации цикла for..of
          next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
              return { done: false, value: this.current++ };
            } else {
              return { done: true };
            }
          }
        }
      }
    } */
);

console.log(sett);



let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size: { // положим size сюда
      width,
      height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
  } = options;
  
 console.log(width);


 let massss = [1,2,4,5,6];
 let mass2 = {
    daughter: "Jolly"
 };

 let masss3 = [...massss, {...mass2}];

 console.log(masss3)
 massss.push("brother");
 console.log(masss3)


 function brother() {
    console.log(hhhh);
 }

 let hhhh = 10;

 brother();




 function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
  }
  
  // Вывод: 2, Юлий, Цезарь
  showName("Юлий", "Цезарь");
  
  // Вывод: 1, Илья, undefined (второго аргумента нет)
  showName("Илья");



let superF = 10;

  function makeCounter() {
    let count = 0;
  
    return function() {
        superF = 20;
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();

  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2
  console.log( superF); // 2



  function chechh(){
    if(1){
      let bro = 10;

    }
    console.log(bro);
  }

  chechh();




  let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
  console.log(timerId); // идентификатор таймера

clearTimeout(timerId);
console.log(timerId); // тот же идентификатор (не принимает значение null после отмены)