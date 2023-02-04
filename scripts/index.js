const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_profile');
const imagePopup = document.querySelector('.popup_image');
const cardPopup = document.querySelector('.popup_place');
const nameInput = document.querySelector('.popup__input_name_you');
const infoInput = document.querySelector('.popup__input_info_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const battonEdit = document.querySelector('.profile__edit');
const closeProfile = document.querySelector('.popup__close-profile');
const buttonSave = document.querySelector('.popup__form-profile');
const closePlace = document.querySelector('.popup__close-place');
const buttonAddCard = document.querySelector('.profile__add');
const placeInput = document.querySelector('.popup__input_name_place');
const linkInput = document.querySelector('.popup__input_img_link');
const buttonCreateCard = document.querySelector('.popup__button-create');
const closeImage = document.querySelector('.popup__close-image');
const image = document.querySelector('.element__img');
const imageBig = imagePopup.querySelector('.popup__fullimg');
const imageTitle = imagePopup.querySelector('.popup__subtitle');

battonEdit.addEventListener('click', openEditForm);
closeProfile.addEventListener('click', closeEditForm);
buttonSave.addEventListener('submit', saveEditForm);
buttonAddCard.addEventListener('click', openPlaceForm);
closePlace.addEventListener('click', closePlaceForm);
closeImage.addEventListener('click', closeImageForm);

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  }

// Форма открытия картинки
function openImageForm() {
  openPopup(imagePopup);
}

function closeImageForm() {
  closePopup(imagePopup);
}

// Форма редактирования профиля
function openEditForm() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  infoInput.value = profileAbout.textContent;
}

function closeEditForm() {
  closePopup(profilePopup);
}

function saveEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = infoInput.value;
  closeEditForm();
}

// Форма добавления карточек
function openPlaceForm() {
  openPopup(cardPopup);
  placeInput.value = '';
  linkInput.value = '';
}

function closePlaceForm() {
  closePopup(cardPopup);
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const template = document.querySelector("#element_template").content.querySelector(".element"); // Темплейт
const elements = document.querySelector('.elements'); // Сюда копируем карточки

function createCard() {
  initialCards.forEach((item) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__img').src = item.link;
    card.querySelector('.element__img').alt = item.name;
    elements.prepend(card);
    card.querySelector('.element__delete').addEventListener('click', ()=>{
      card.remove();
    });
    const like = card.querySelector('.element__like');
    like.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
    card.querySelector('.element__img-batton').addEventListener('click', ()=>{
      openImageForm();
      imageBig.src = card.querySelector('.element__img').src;
      imageBig.alt = card.querySelector('.element__title').textContent;
      imageTitle.textContent = card.querySelector('.element__title').textContent;
    });
  });
  renderCard();
};

createCard();

function renderCard() {
  buttonCreateCard.addEventListener('click', (evt) => {
    const card = template.cloneNode(true);
    evt.preventDefault();
    const name = placeInput.value;
    const img = linkInput.value;
    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__img').src = img;
    card.querySelector('.element__img').alt = name;
    elements.prepend(card);
    closePlaceForm();
    card.querySelector('.element__delete').addEventListener('click', ()=>{
      card.remove();
    });
    const like = card.querySelector('.element__like');
    like.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
    card.querySelector('.element__img-batton').addEventListener('click', ()=>{
      openImageForm();
      imageBig.src = card.querySelector('.element__img').src;
      imageBig.alt = card.querySelector('.element__title').textContent;
      imageTitle.textContent = card.querySelector('.element__title').textContent;
    });
  });
}
