let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__container-input_name');
let infoInput = document.querySelector('.popup__container-input_info');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__form');

edit.addEventListener('click',openEdit);
close.addEventListener('click',closeEdit);
save.addEventListener('submit',saveEdit);

function openEdit() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileAbout.textContent;
}

function closeEdit() {
  popup.classList.remove('popup_opened');
}

function saveEdit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = infoInput.value;
  closeEdit();
}
