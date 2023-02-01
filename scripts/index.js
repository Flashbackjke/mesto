const popupEdit = document.querySelector('.popup_profile');
const nameInput = document.querySelector('.popup__input_name_you');
const infoInput = document.querySelector('.popup__input_info_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const edit = document.querySelector('.profile__edit');
const closeProfile = document.querySelector('.popup__close-profile');
const save = document.querySelector('.popup__form-profile');
const popupPlace = document.querySelector('.popup_place');
const closePlace = document.querySelector('.popup__close-place');
const add = document.querySelector('.profile__add');
const placeInput = document.querySelector('.popup__input_name_place');
const linkInput = document.querySelector('.popup__input_img_link');
const create = document.querySelector('.popup__button-create');
const closeImage = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup_image');
const image = document.querySelector('.element__img');
const imageBatton = document.querySelector('.element__img-batton');


edit.addEventListener('click', openEdit);
closeProfile.addEventListener('click', closeEdit);
save.addEventListener('submit', saveEdit);
add.addEventListener('click', openPlace);
closePlace.addEventListener('click', closePlaceForm);
closeImage.addEventListener('click', closeImg);


function closeImg() {
  popupImage.classList.remove('popup_opened');
}

// Форма редактирования профиля
function openEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileAbout.textContent;
}

function closeEdit() {
  popupEdit.classList.remove('popup_opened');
}

function saveEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = infoInput.value;
  closeEdit();
}

// Форма добавления карточек
function openPlace() {
  popupPlace.classList.add('popup_opened');
}

function closePlaceForm() {
  popupPlace.classList.remove('popup_opened');
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

function renderCards() {
  const card = template.cloneNode(true);
  initialCards.forEach((item) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__img').src = item.link;
    card.querySelector('.element__img').alt = item.name;
    elements.prepend(card);
    card.querySelector('.element__delete').addEventListener('click', ()=> {
      card.remove();
    });
    const like = card.querySelector('.element__like');
    like.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
  });
  create.addEventListener('click', (evt) => {
    const card = template.cloneNode(true);
    evt.preventDefault();
    const name = placeInput.value;
    const img = linkInput.value;
    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__img').src = img;
    card.querySelector('.element__img').alt = name;
    elements.prepend(card);
    closePlaceForm()
    card.querySelector('.element__delete').addEventListener('click', ()=> {
      card.remove();
    });
    const like = card.querySelector('.element__like');
    like.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
  });
};

renderCards();

imageBatton.addEventListener('click', openImage);

function openImage() {
  popupImage.classList.add('popup_opened');
}
