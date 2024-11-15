'use strict';
import qoutes from './src/qoutes.js';
import { hideFavoriteCard, showFavoriteCard } from './src/favoritesHandler.js';

const generateBtn = document.getElementById('generate-btn');
const qouteAuthor = document.querySelector('.quotes-content-author');
const qouteText = document.querySelector('.quotes-content-text');
const favoritesText = document.querySelector('.favorites-qoutes-item');
const favoritesBtn = document.querySelector('.favorites-btn');
let qoute;

const generateRandomQoutes = () => {
  qoute = qoutes[Math.floor(Math.random() * qoutes.length)];
  const { text, author } = qoute;
  qouteText.textContent = `"${text}"`;
  qouteAuthor.textContent = author;
  if (qoute.isFavorite) {
    favoritesBtn.classList.add('active');
  } else {
    favoritesBtn.classList.remove('active');
  }
};

const addToFavorites = () =>
  qoute.isFavorite
    ? hideFavoriteCard(qoute, favoritesBtn)
    : showFavoriteCard(qoute, favoritesBtn, favoritesText);

generateBtn.addEventListener('click', generateRandomQoutes);
favoritesBtn.addEventListener('click', addToFavorites);
generateRandomQoutes();
