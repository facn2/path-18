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

export const addToLocal = (state) => {
  const career = state.careers[state.currentIndex];
  if (localStorage.liked) {
    const likedCareers = JSON.parse(localStorage.liked);
    if (!likedCareers.includes(career)) {
      likedCareers.push(career);
      localStorage.setItem('liked', JSON.stringify(likedCareers));
    }
  } else {
    const likedCareers = [state.careers[state.currentIndex]];
    localStorage.setItem('liked', JSON.stringify(likedCareers));
  }
};
