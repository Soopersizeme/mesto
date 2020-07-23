const templateCard = document.querySelector(".template-card").content.querySelector(".card");
const sectionCards = document.querySelector(".cards");

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


const imagePopupTitle = imagePopup.querySelector(".popup__subtitle");
const imagePopupPicture = imagePopup.querySelector(".popup__image");

const editForm = editPopup.querySelector(".form");
const addCardForm = addPopup.querySelector(".form");


//карточки отображаемые на странице по дефолту
const initialCards = [
    {
        name: "Окэбарэ",
        link: "https://images.unsplash.com/photo-1518804948246-a31b8bd31716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Фестиваль",
        link: "https://images.unsplash.com/photo-1463319611694-4bf9eb5a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80ttps://sun9-3.userapi.com/FMtotWasWF-0lVDS6vqyq56R7JRAbyNgDAQioQ/Or3mpe4F5-g.jpg",
    },
    {
        name: "В Токио",
        link: "https://images.unsplash.com/photo-1528360354687-839420409a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Судзуе",
        link: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "Сакура",
        link: "https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Ямада",
        link:
            "https://images.unsplash.com/photo-1505069190533-da1c9af13346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80://images.unsplash.com/photo-1536957604029-6779ab858551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
];


let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let placeNameInput = document.querySelector("#place");
let linkPlaceInput = document.querySelector("#link");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

function popupOpened(popup) {
    popup.classList.add("popup_opened");
};

function popupClosed(popup) {
    popup.classList.remove("popup_opened");
};

function imagePopupOpen(cardText, cardPic) { 
    imagePopupTitle.textContent = cardText.textContent; 
    imagePopupPicture.src = cardPic.src;
};

function formSubmitHandlerEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClosed(editPopup);
};

function formSubmitHandlerAddCard(evt) {
    evt.preventDefault();
    renderCards({ name: placeNameInput.value, link: linkPlaceInput.value });
    popupClosed(addPopup);
};



initialCards.forEach((cardData) => {
    renderCards(cardData);
});

function renderCards(cardData) {
    sectionCards.prepend(createCards(cardData));
};

function createCards(cardData) {
    const cardElement = templateCard.cloneNode(true);
    const cardImg = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const cardLikeBtn = cardElement.querySelector(".card__button-like");
    const cardDeleteBtn = cardElement.querySelector(".card__button-delete");

    cardLikeBtn.addEventListener("click", (evt) => evt.target.classList.toggle("card__button-like_active"));

    cardDeleteBtn.addEventListener("click", () => {
        cardDeleteBtn.closest(".card").remove();
    });
    
    cardImg.addEventListener("click", () => { 
        imagePopupOpen(cardTitle, cardImg);
        popupOpened(imagePopup);  
    }); 

    cardTitle.textContent = cardData.name;
    cardImg.src = cardData.link;
 
    return cardElement;
};


editPopupOpen.addEventListener("click", () => { nameInput.value = profileName.textContent; jobInput.value = profileJob.textContent; popupOpened(editPopup);});
addPopupOpen.addEventListener("click", () => popupOpened(addPopup));

editPopupClose.addEventListener("click", () => popupClosed(editPopup));
addPopupClose.addEventListener("click", () => popupClosed(addPopup));
imagePopupClose.addEventListener("click", () => popupClosed(imagePopup));

editForm.addEventListener("submit", formSubmitHandlerEditProfile);
addCardForm.addEventListener("submit", formSubmitHandlerAddCard);






