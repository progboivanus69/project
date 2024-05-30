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
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

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