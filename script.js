"use strict";

import qoutes from "./qoutes.js";

const generateBtn = document.getElementById("generate-btn");
const qouteAuthor = document.querySelector(".quotes-content-author");
const qouteText = document.querySelector(".quotes-content-text");
const favoritesText = document.querySelector(".favorites-qoutes-item");
const favoritesBtn = document.querySelector(".favorites-btn");
let qoute;

function hideFavoriteCard () {
	qoute.isFavorite = false;
	favoritesBtn.classList.remove("active");
	const favoriteCard = document.querySelectorAll(".favorites-qoute");
	favoriteCard.forEach((card) => {
		if (card.textContent.includes(qoute.text)) {
			card.remove();
		}
	});
}

function showFavoriteCard () {
	qoute.isFavorite = true;
	favoritesBtn.classList.add("active");
	const favoritesQoute = document.createElement("div");
	favoritesQoute.classList.add("favorites-qoute");
	favoritesQoute.textContent = `${qoute.text} (${qoute.author})`;
	favoritesText.prepend(favoritesQoute);
}

const generateRandomQoutes = () => {
  qoute = qoutes[Math.floor(Math.random() * qoutes.length)];
  const { text, author } = qoute;
  qouteText.textContent = `"${text}"`;
  qouteAuthor.textContent = author;
  if (qoute.isFavorite) {
    favoritesBtn.classList.add("active");
  } else {
    favoritesBtn.classList.remove("active");
  }
};

const addToFavorites = () => qoute.isFavorite ? hideFavoriteCard() :  showFavoriteCard()



generateBtn.addEventListener("click", generateRandomQoutes);
favoritesBtn.addEventListener("click", addToFavorites);
generateRandomQoutes();

