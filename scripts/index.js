const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-icon');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function popupOpened() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

function popupClosed() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpen.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);



