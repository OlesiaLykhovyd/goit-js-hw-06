// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых
// символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur({ currentTarget }) {
  const minLength = currentTarget.getAttribute("data-length");

  if (currentTarget.value.length >= minLength) {
    currentTarget.classList.add("valid");
    currentTarget.classList.remove("invalid");
  } else {
    currentTarget.classList.add("invalid");
    currentTarget.classList.remove("valid");
  }
}
