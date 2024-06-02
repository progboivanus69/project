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