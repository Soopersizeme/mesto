import { popupOpened } from "./index.js";

export default class Card {
  constructor(cardData, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = cardData.name;
    this._link = cardData.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._cardElement = this._getTemplate();

    this._cardImg = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardBtnLike = this._cardElement.querySelector(".card__button-like");
    this._cardDeleteBtn = this._cardElement.querySelector(".card__button-delete");

    this._cardImg.src = this._link;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();

    return this._cardElement;
  }

  _popupOpeningImg = () => {
    this._imagePopup = document.querySelector(".popup_type_image");
    this._imagePopupTitle = this._imagePopup.querySelector(".popup__subtitle");
    this._imagePopupPicture = this._imagePopup.querySelector(".popup__image");

    this._imagePopupPicture.src = this._cardImg.src;
    this._imagePopupTitle.textContent = this._cardTitle.textContent;

    popupOpened(this._imagePopup);
  };

  _cardDeleted = () => {
    this._cardElement.remove();
  };

  _setEventListeners = () => {
    this._cardBtnLike.addEventListener("click", (evt) => { evt.target.classList.toggle("card__button-like_active"); });
    this._cardDeleteBtn.addEventListener("click", this._cardDeleted);
    this._cardImg.addEventListener("click", this._popupOpeningImg);
  }
}
