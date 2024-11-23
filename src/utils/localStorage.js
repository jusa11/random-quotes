// Сохранение избранных цитат
function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('Error: Key must be a string');
    return;
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in LocalStorage');
  }
}

// Получение данных из localStorage
function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

// Удаляет цитату из локаоьного хранилища
function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  clearLocalStorage,
  saveCurrentQuteInLocalStorage,
};
