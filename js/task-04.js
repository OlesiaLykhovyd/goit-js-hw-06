// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterEl = document.getElementById("value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrement.addEventListener("click", () => {
  counterEl.textContent = counterValue - 1;
  counterValue -= 1;
});

increment.addEventListener("click", () => {
  counterEl.textContent = counterValue + 1;
  counterValue += 1;
});
