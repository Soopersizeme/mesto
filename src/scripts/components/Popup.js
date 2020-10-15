export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._closeButton = document.querySelector(".popup__close-icon");
    };
  
    _closingEscPopup(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    };
    
    _closingPopupClickToOverlay(evt) {
        if (evt.target.classList.contains("popup_opened")) {
          this.close();
      }
    };
  
    open() {
      this._popup.classList.add("popup_opened");
  
      document.addEventListener("keydown", this._closingEscPopup.bind(this));
      document.addEventListener('mousedown', this._closingPopupClickToOverlay.bind(this));
    };
  
    close() {
      this._popup.classList.remove("popup_opened");
  
      document.removeEventListener("keydown", this._closingEscPopup.bind(this));
      document.removeEventListener('mousedown', this._closingPopupClickToOverlay.bind(this));
    };
  
    setEventListeners() {
      this._closeButton.addEventListener('click', () => {
          this.close();
      });
    }
  }