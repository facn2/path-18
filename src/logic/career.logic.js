export const flipCard = () => {
  document.querySelector('.flipper').classList.add('flip');
};

export const flipCardBack = () => {
  document.querySelector('.flipper').classList.remove('flip');
};

export const checkFlip = () => {
  const flippedCard = document.querySelector('.flipper');
  if (flippedCard.classList.contains('flip')) {
    document.querySelector('.flipper').classList.remove('flip');
  }
};
