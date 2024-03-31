"use strict";
// const getEl = document.querySelector("div#block");
// console.log(getEl);
// const divEl = document.querySelector("div#block");
// console.log(divEl);
// console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
// console.log(divEl.querySelectorAll("p.www")[0].innerHTML);
// const linkEl = document.querySelector("a.link");
// linkEl.innerHTML = "link tetxt js";
// linkEl.href = "https://developer.mozilla.org/ru/";

// const imgEL = document.querySelector("img.photo");
// imgEL.src = "ссылка на картинку";

// const newEl = document.querySelector("div.content");
// const pEl = document.createElement("p");
// pEl.innerHTML = "Новый текстовый элемент";
// newEl.appendChild(pEl);
// pEl.remove();

// const divEL = document.querySelector("div.content");
// const btnEl = document.createElement("button");
// btnEl.innerHTML = "cleack me";
// divEL.appendChild(btnEl);
// let count = 0;
// btnEl.onclick = function (e) {
//   count++;
//   console.log(count);
// };

const divEl = document.querySelector("div.content");
const btnEl = document.createElement("button");
btnEl.innerHTML = "Отправить";
divEl.appendChild(btnEl);
btnEl.style.color = "blue";
btnEl.onclick = function (e) {
  e.target.innerHTML = "Текст отправлен";
};
