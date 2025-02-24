"use strict";

/*task-1
/* При натисканні на кнопку змінюється колір фону сторінки.

const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
});
 
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


/*task-2*/
/*Відстежуємо, яку клавішу натиснув користувач, і виводимо її у div.

  document.addEventListener("keydown", (event) => {
    document.getElementById("keyDisplay").textContent = `Ви натиснули: ${event.key}`;
  });

  /*task-3*/
/*Кнопка дозволяє показати або приховати введений пароль.
При натисканні кнопки змінюємо type інпуту між "password" і "text".
Пароль можна бачити або ховати.
const passwordInput = document.getElementById("passwordInput");
const togglePasword = document.getElementById("togglePassword");

togglePasword.addEventListener("click", (event) => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
})*/


/*task-4*/
 /*При наведенні на текст він змінюється, а при відведенні мишки повертається назад.
 mouseover змінює текст при наведенні.
mouseout повертає початковий текст.

const text = document.getElementById("hoverText");

text.addEventListener("mouseover", () => {
    text.textContent = "Ти навів мишку! 😃";
});

text.addEventListener("mouseout", () => {
     text.textContent = "Наведи на мене!";
}); */

/*task-5*/

/*При виборі значення з випадаючого списку показується вибрана опція.


const selectMenu = document.getElementById("selectMenu");
const output = document.getElementById("output");

selectMenu.addEventListener("change", () => {
    output.textContent = `Ви обрали: ${selectMenu.value}`;
});
*/


