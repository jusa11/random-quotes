'use strict';
import qoutes from './src/qoutes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  checkfavoriteBtn as updateFavoriteButton,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utilits.js';

const generateBtn = document.getElementById('generate-btn');
const favoritesText = document.querySelector('.favorites-qoutes-item');
const favoritesBtn = document.querySelector('.favorites-btn');
let currentQute;

if (!generateBtn || !favoritesText || !favoritesBtn)
  throw new Error('Не удалось найти нужные элементы на странице.');

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
};

// Добавляет цитату в избранное
const addToFavorites = () =>
  currentQute.isFavorite
    ? hideFavoriteCard(currentQute, favoritesBtn)
    : showFavoriteCard(currentQute, favoritesBtn, favoritesText);

generateBtn.addEventListener('click', generateRandomQoutes);
favoritesBtn.addEventListener('click', addToFavorites);
generateRandomQoutes();
