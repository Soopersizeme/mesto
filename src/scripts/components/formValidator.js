export default class formValidator {
  constructor(object, formElement) {
    this._object = object;
    this._formElement = formElement;
  };
  
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._object.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._object.errorClass);
  };

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._object.inputErrorClass);
    this._errorElement.classList.remove(this._object.errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
  } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._object.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
      });
    });
  }; 
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._inactiveButton()
    } else {
      this._activeButton()
    }
  };
  
  _inactiveButton() {
    this._buttonElement.classList.add(this._object.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  
  _activeButton() {
    this._buttonElement.classList.remove(this._object.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  enableValidation() {
		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._inactiveButton();
		});

		this._setEventListeners();
	};
}

