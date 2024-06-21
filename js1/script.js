'use strict';

const box = document.getElementById("box"),
button = document.getElementsByTagName("button"),
circle = document.getElementsByClassName('circle'),
hearts = document.querySelectorAll('.heart');
hearts.forEach((item) => {
    //console.log(item);
});
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");
console.dir(box);
console.log(box);


box.style.backgroundColor = 'blue';
box.style.width = '500px';
console.dir(box);

button[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
box.style.cssText = 'background-color: red; width: 600px';

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor ='blue';
}
hearts.forEach(
    item => {
        item.style.backgroundColor = "yellow";
    }
)
const div = document.createElement("div");
const text = document.createTextNode("Тут был я");
div.classList.add('black');

//document.body.append(div);
document.body.appendChild(div);
/* wrapper.append(div);


wrapper.prepend(div); */

/* hearts[1].before(div);
div.style.display = 'inline-block';
hearts[1].after(div); */
/* wrapper.insertBefore(div, hearts[0]); */
//circle[0].remove();
/* wrapper.removeChild(hearts[1]); */
/* hearts[0].replaceWith(circle[0]);  */

/* wrapper.replaceChild(circle[0],hearts[0]); */
div.innerHTML ="<h1>Hello World</h1>";
/* div.textContent = '<h1>Hello World</h1>'; */
div.insertAdjacentHTML("afterend","<h1>Hello WorldYYYYYYY</h1>");