// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// один параметр - число. Функция создает столько <div>,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое
// div#boxes, тем самым удаляя все созданные элементы.

const inputNumberEl = document.querySelector('input[type="number"]');
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxesContainerEl = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonCreateEl.addEventListener("click", onCreateBtnClick);
buttonDestroyEl.addEventListener("click", destroyBoxes);

let size = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesContainerEl.appendChild(newDiv);
    size += 10;
  }
}

function onCreateBtnClick() {
  const amount = Number(inputNumberEl.value);

  createBoxes(amount);
}

function destroyBoxes() {
  size = 30;
  const boxes = document.getElementById("boxes");
  const children = [...boxes.children];

  for (const child of children) {
    child.remove();
  }
}
