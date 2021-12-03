// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его текущее
// значение в span#name-output. Если инпут пустой, в спане
// должна отображаться строка "Anonymous".

const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value || "Anonymous";
});
