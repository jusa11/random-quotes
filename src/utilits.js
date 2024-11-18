// Генерирует случайную цитату
function generateRandomInt(qoutes) {
  return qoutes[Math.floor(Math.random() * qoutes.length)];
}


export { generateRandomInt };
