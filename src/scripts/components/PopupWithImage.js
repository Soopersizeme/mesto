import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._closeButton = document.querySelector('.popup__image-close-icon');
        this._popupCardImg = document.querySelector('.popup__image');
        this._popupCardTitle = document.querySelector('.popup__subtitle');
    };

    open(data) {
        super.open();
        this._popupCardImg.src = data._link;
        this._popupCardTitle.textContent = data._name;
        this._popupCardImg.alt = data._name;
    };
};