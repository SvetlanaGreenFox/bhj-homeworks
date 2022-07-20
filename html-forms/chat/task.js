const robotsMessages = [
  'Кто тут?',
  'Где ваша совесть?',
  'Добрый день! До свидания!',
  'Мы ничего не будем вам продавать',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
];

const widgetElement = document.querySelector('.chat-widget');

widgetElement.addEventListener('click', () => {
  widgetElement.classList.add('chat-widget_active');
});

const messages = document.querySelector('.chat-widget__messages');

const inputElement = document.getElementById('chat-widget__input');

const getRobotsResponce = () => {
  const randomIndex = Math.floor(Math.random() * robotsMessages.length);
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  messages.innerHTML += `<div class="message">
  <div class="message__time">${hours}:${minutes}</div>
  <div class="message__text">${robotsMessages[randomIndex]}</div>
  </div>`;
};

inputElement.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if (e.target.value.length === 0) return;
    const userMessage = e.target.value;

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    messages.innerHTML += `<div class="message message_client">
  <div class="message__time">${hours}:${minutes}</div>
  <div class="message__text">${userMessage}</div>
</div>`;
    getRobotsResponce();
    e.target.value = '';
  }
});