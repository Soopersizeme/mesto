export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._closeButton = this._popup.querySelector(".popup__close-icon");
      
      this._closingEscPopup = this._handleEscClose.bind(this);
      this._closingPopupClickToOverlay = this._handleClickToOverlay.bind(this);
    };
  
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    };
    
    _handleClickToOverlay(evt) {
        if (evt.target.classList.contains("popup_opened")) {
          this.close();
      }
    };
  
    open() {
      this._popup.classList.add("popup_opened");
  
      document.addEventListener("keydown", this._closingEscPopup);
      document.addEventListener('mousedown', this._closingPopupClickToOverlay);
    };
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._closingEscPopup);
      document.removeEventListener('mousedown', this._closingPopupClickToOverlay);
    };
  
    setEventListeners() {
      this._closeButton.addEventListener('click', () => {
          this.close();
      });
    }
  }