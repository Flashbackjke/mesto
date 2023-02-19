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
const formSaveProfile = document.querySelector('.popup__form-profile');
const closePlace = document.querySelector('.popup__close-place');
const buttonAddCard = document.querySelector('.profile__add');
const placeInput = document.querySelector('.popup__input_name_place');
const linkInput = document.querySelector('.popup__input_img_link');
const formCreateCard = document.querySelector('.popup__form-place');
const closeImage = document.querySelector('.popup__close-image');
const image = document.querySelector('.element__img');
const imageBig = imagePopup.querySelector('.popup__fullimg');
const imageTitle = imagePopup.querySelector('.popup__subtitle');

battonEdit.addEventListener('click', openEditForm);
closeProfile.addEventListener('click', closeEditForm);
formSaveProfile.addEventListener('submit', saveEditForm);
buttonAddCard.addEventListener('click', openPlaceForm);
closePlace.addEventListener('click', closePlaceForm);
closeImage.addEventListener('click', closeImageForm);


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

function keyHandlerEsc(evt) {
  if (evt.key === "Escape") {
    const formOpen=document.querySelector(".popup_opened")
    closePopup(formOpen);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

profilePopup.addEventListener("click", (e) => {
  if(e.target===profilePopup || e.target===closeProfile){
    closePopup(profilePopup);
  }
});

cardPopup.addEventListener("click", (e) => {
  if(e.target===cardPopup || e.target===closePlace){
    closePopup(cardPopup);
  }
});

imagePopup.addEventListener("click", (e) => {
  if(e.target===imagePopup || e.target===closeImage){
    closePopup(imagePopup);
  }
});


const template = document.querySelector("#element_template").content.querySelector(".element"); // Темплейт
const elements = document.querySelector('.elements'); // Сюда копируем карточки

createCard();

function createCard() {
  initialCards.forEach((item) => {
    const card = renderCard(item);
    elements.prepend(card);
  });

}

function renderCard(item) {

    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__img').src = item.link;
    card.querySelector('.element__img').alt = item.name;

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
    return card;
};

formCreateCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  const card = renderCard({name:name, link:link})
  elements.prepend(card);
  closePlaceForm();
});


// Оставил код для собственного понимания, как по разному можно выполнить задачу, но ка делать не стоит.
/*function createCard() {
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
}*/
