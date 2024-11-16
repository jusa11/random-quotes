'use strict';
import qoutes from './src/qoutes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  checkfavoriteBtn,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utilits.js';

const generateBtn = document.getElementById('generate-btn');
const qouteAuthor = document.querySelector('.quotes-content-author');
const qouteText = document.querySelector('.quotes-content-text');
const favoritesText = document.querySelector('.favorites-qoutes-item');
const favoritesBtn = document.querySelector('.favorites-btn');
let currentQoute;

const generateRandomQoutes = () => {
  const randomIndex = generateRandomInt(qoutes.length);
  currentQoute = qoutes[randomIndex];
  const { text, author } = currentQoute;
  qouteText.textContent = `"${text}"`;
  qouteAuthor.textContent = author;
  checkfavoriteBtn(currentQoute, favoritesBtn);
};

const addToFavorites = () =>
  currentQoute.isFavorite
    ? hideFavoriteCard(currentQoute, favoritesBtn)
    : showFavoriteCard(currentQoute, favoritesBtn, favoritesText);

generateBtn.addEventListener('click', generateRandomQoutes);
favoritesBtn.addEventListener('click', addToFavorites);
generateRandomQoutes();
