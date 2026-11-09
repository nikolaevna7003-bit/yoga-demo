// Адреса для заявок. Пока пусто: заполнить, когда заказчик выберет канал связи.
const CONTACTS = {
  email: "",
  telegram: "",
  vk: "",
  max: ""
};

const form = document.getElementById("signup-form");
const thanks = document.getElementById("thanks");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("f-name");
  const phone = document.getElementById("f-phone");
  if (!name.value.trim() || !phone.value.trim()) {
    thanks.textContent = "Укажите имя и телефон, чтобы мы могли связаться с вами.";
    thanks.classList.add("show");
    return;
  }
  thanks.textContent = "Спасибо! Заявка принята, тренер свяжется с вами.";
  thanks.classList.add("show");
  form.reset();
});
