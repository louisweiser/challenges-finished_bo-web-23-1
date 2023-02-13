function toggleButton() {
  const cards = document.querySelectorAll('[data-js="card"]');
  //const buttons = document.querySelectorAll('[data-js="buttons"]');

  for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
    const button = cards[cardIndex].querySelector('[data-js="button"]');
    const link = cards[cardIndex].querySelector('[data-js="link"]');
    const arrow = cards[cardIndex].querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
  }
}
toggleButton();
