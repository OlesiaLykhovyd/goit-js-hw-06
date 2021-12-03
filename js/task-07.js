// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeControlEl.addEventListener("input", onFontSizeInput);

function onFontSizeInput({ currentTarget }) {
  const fontSize = currentTarget.value;
  textEl.style.fontSize = fontSize + "px";
}
