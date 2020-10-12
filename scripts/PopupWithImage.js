import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._closeButton = document.querySelector('.popup__image-close-icon');
        this._popupCardImg = document.querySelector('.popup__image');
        this._popupCardTitle = document.querySelector('.popup__subtitle');
    };

    open({name, link}) {
        super.open();
        this._popupCardImg.src = link.src;
        this._popupCardTitle.textContent = name.textContent;
        this._popupCardTitle.alt = name.textContent;
    };
};