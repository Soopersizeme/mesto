const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-icon');

function popupOpened() {
  popup.classList.add('popup_opened');
}

function popupClosed() {
  popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);




