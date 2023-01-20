let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name');
let infoInput = document.querySelector('.popup__input_info');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__container');

edit.addEventListener('click',OpenEdit);
close.addEventListener('click',CloseEdit);
save.addEventListener('submit',SaveEdit);

function OpenEdit() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileAbout.textContent;
}

function CloseEdit() {
  popup.classList.toggle('popup_opened');
}

function SaveEdit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = infoInput.value;
  popup.classList.toggle('popup_opened');
}
