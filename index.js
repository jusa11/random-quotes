'use strict';
import qoutes from './data/qoutes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton,
  initFavoritesHandler,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils/generateRandomInt.js';
import {
  clearLocalStorage,
  saveCurrentQuteInLocalStorage,
} from './src/utils/localStorage.js';

const generateBtn = document.getElementById('generate-btn');
const favoritesBtn = document.querySelector('.favorites-btn');
const deleteBtn = document.querySelector('.delete-btn');
let currentQute;

// Показывает цитату
function showQute() {
  const qouteAuthor = document.querySelector('.quotes-content-author');
  const qouteText = document.querySelector('.quotes-content-text');
  const { text, author } = currentQute;
  qouteText.textContent = `"${text}"`;
  qouteAuthor.textContent = author;
}

// Выдает цитату из массива цитат
const generateRandomQoutes = () => {
  currentQute = generateRandomInt(qoutes);
  updateFavoriteButton(currentQute, favoritesBtn);
  showQute();
  saveCurrentQuteInLocalStorage('currentQute', currentQute);
  console.log(qoutes);
};

// Добавляет цитату в избранное
const addToFavorites = () => {
  document.querySelector(
    `.favorites-qoute[data-qoute-id = '${currentQute.id}']`
  )
    ? hideFavoriteCard(currentQute, favoritesBtn)
    : showFavoriteCard(currentQute, favoritesBtn);
};

const deleteAllQutes = () => {
  const favarr = Array.from(document.querySelectorAll('.favorites-qoute'));
  if (favarr) {
    favarr.forEach((card) => {
      card.remove();
      clearLocalStorage();
    });
  }
};

initFavoritesHandler(favoritesBtn);

/* function initApp () {
	localStorage.length < 0 ? generateRandomQoutes() :
} */

generateBtn.addEventListener('click', generateRandomQoutes);
favoritesBtn.addEventListener('click', addToFavorites);
deleteBtn.addEventListener('click', deleteAllQutes);
generateRandomQoutes();
