import './index.css';
import Card from "../scripts/components/card.js";
import formValidator from "../scripts/components/formValidator.js"
import Section from "../scripts/components/Section.js"
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

//модальные окна
const editPopupModal = document.querySelector(".popup_type_edit-profile");
const addPopupModal = document.querySelector(".popup_type_add-card");

//открытие модальных окон
const editPopupOpen = document.querySelector(".profile__edit-button");
const addPopupOpen = document.querySelector(".profile__add-button");

//контеинер для карточек
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

//массив классов для валидации форм
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_invisible"
};

//инфа о профиле
const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle'});

//открытие попапа с картинкой
const imagePopup = new PopupWithImage(".popup_type_image");

//созадние карточек
function addNewCard(cardData) {
  const card = new Card(cardData, "#template-card", function openImgPopup() {
    imagePopup.open(card);
  },
);
  const cardElement = card.createCard();
  cardContainer.prepend(cardElement);
}

const profileFormSubmitHandler = (data) => {
  userInfo.setUserInfo(data.name, data.job);
}

const profileAddSubmitHandler = (cardData) => {
  const link = cardData.link;
  const name = cardData.place;
  section.addItem(addNewCard({link, name}))
}

const openEditPopup = () => {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  editPopup.open()
}

const openAddPopup = () => {
  addPopup.open()
}

const section = new Section({
  items: initialCards, 
  renderer: addNewCard}, 
  cardContainer);

section.renderItems();

const editPopup = new PopupWithForm(profileFormSubmitHandler, '.popup_type_edit-profile');
const addPopup = new PopupWithForm(profileAddSubmitHandler , '.popup_type_add-card');

addPopup.setEventListeners();
editPopup.setEventListeners();
imagePopup.setEventListeners();

editPopupOpen.addEventListener('click', openEditPopup);
addPopupOpen.addEventListener('click', openAddPopup);

const editPopupValidator = new formValidator (settings, editPopupModal);
const addPopupValidator = new formValidator (settings, addPopupModal);

editPopupValidator.enableValidation();
addPopupValidator.enableValidation();
