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


//Таймер зі зворотнім відліком
//Часовий пояс не опрацьовано

//1) Потрібно задати дедлайн 
//2) Потрібно задати поточну дату
//3) Потрібно знайти їх різницю
//4) Різницю конвертувати в нормальний фортмат для користувача
//5) Відобразити це все на екрані

/*const deadline = new Date(2026, 0, 1);
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

function timer() {
    const today = new Date();
    const delta = deadline - today;
    console.log(delta);

    const seconds = Math.floor(delta / 1000) % 60;
    const minutes = Math.floor(delta / 1000 / 60) % 60;
    const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
    const days = Math.floor(delta / 1000 / 60 / 60 / 24);
    daysElement.textContent = days < 10 ? `0${days}` : days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
setInterval(timer, 1000);
*/


//promise

/*function promiseCreator(counter) {
    return new Promise((ok, failed) => {
        let total = 0;

        for (let i = 0; i < counter; i++) {
            total += i;
        }
        if (total % 2 === 0) {
            ok(total);
        }
        else {
            failed("Error");
        }
    });
}


    promiseCreator(10)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

    promiseCreator(999)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
*/
