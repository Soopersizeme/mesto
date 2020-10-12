export default class Card {
  constructor(cardData, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
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
    this._cardImg.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();

    return this._cardElement;
  }

  _deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _setEventListeners() {
    this._cardBtnLike.addEventListener("click", (evt) => {evt.target.classList.toggle("card__button-like_active");});
    this._cardDeleteBtn.addEventListener("click", this._deleteCard);
    this._cardImg.addEventListener("click", this._openingPopupImg);
  }
}
