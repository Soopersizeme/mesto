import Card from "./card.js";
import formValidator from "./formValidator.js"

//модальные окона
const editPopup = document.querySelector(".popup_type_edit-profile");
const addPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image");

//открытие модальных окон
const editPopupOpen = document.querySelector(".profile__edit-button");
const addPopupOpen = document.querySelector(".profile__add-button");

//закрытие модальных окон
const editPopupClose = editPopup.querySelector(".popup__close-icon");
const addPopupClose = addPopup.querySelector(".popup__close-icon");
const imagePopupClose = imagePopup.querySelector(".popup__image-close-icon");

const editForm = editPopup.querySelector(".popup__form");
const addCardForm = addPopup.querySelector(".popup__form");

const cardContainer = document.querySelector(".cards")

//карточки отображаемые на странице по дефолту
const initialCards = [
  {
    name: "Окэбарэ",
    link:
      "https://images.unsplash.com/photo-1518804948246-a31b8bd31716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Фестиваль",
    link:
      "https://images.unsplash.com/photo-1463319611694-4bf9eb5a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80ttps://sun9-3.userapi.com/FMtotWasWF-0lVDS6vqyq56R7JRAbyNgDAQioQ/Or3mpe4F5-g.jpg",
  },
  {
    name: "В Токио",
    link:
      "https://images.unsplash.com/photo-1528360354687-839420409a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Судзуе",
    link:
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Сакура",
    link:
      "https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Ямада",
    link:
      "https://images.unsplash.com/photo-1505069190533-da1c9af13346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80://images.unsplash.com/photo-1536957604029-6779ab858551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
];

const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const placeNameInput = document.querySelector("#place");
const linkPlaceInput = document.querySelector("#link");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

//массив классов для валидации форм
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_invisible"
};

const editPopupValidator = new formValidator (settings, editPopup);
const addPopupValidator = new formValidator (settings, addPopup);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closingEscPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closingEscPopup);
}

function closingPopupClickToOverlay(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
}

function closingEscPopup(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard({ name: placeNameInput.value, link: linkPlaceInput.value });
  closePopup(addPopup);
  placeNameInput.value = "";
  linkPlaceInput.value = "";
}

function addNewCard(cardData) {
  const card = new Card(cardData, "#template-card");
  const cardElement = card.createCard();
  cardContainer.prepend(cardElement);
}

editPopupOpen.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
});

addPopupOpen.addEventListener("click", () => { openPopup(addPopup);});

editPopupClose.addEventListener("click", () => closePopup(editPopup));
addPopupClose.addEventListener("click", () => closePopup(addPopup));
imagePopupClose.addEventListener("click", () => closePopup(imagePopup));

editForm.addEventListener("submit", handleEditProfileFormSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => {
  addNewCard(cardData);
});

// Закрытие всех попапов по нажатию на оверлай
closingPopupClickToOverlay(editPopup);
closingPopupClickToOverlay(addPopup);
closingPopupClickToOverlay(imagePopup);

// проверка на валидность формы 
editPopupValidator.enableValidation();
addPopupValidator.enableValidation();

export { openPopup };


