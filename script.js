'use strict';

function openModal() {
  let screenWidth = screen.width;

  document.querySelector('.description').style.display = 'flex';
  if (screenWidth > 690) {
    document.querySelector('#blur :not(.description)').style.filter =
      'blur(3px)'; // Add blur effect
  } else {
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('body').style.height = 'auto';
  }
}

function closeModal() {
  document.querySelector('.description').style.display = 'none';
  document.querySelector('#blur :not(.description)').style.filter = 'none';
  document.querySelector('.buttons').style.display = 'flex';
  document.querySelector('body').style.height = '100vh';
}

// Opening the modal window
const modalButtons = document.querySelectorAll('.modal-button');
for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', openModal);
}

// Closing the modal window
document.querySelector('.close-window').addEventListener('click', closeModal);
