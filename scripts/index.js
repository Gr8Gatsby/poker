document.addEventListener ('DOMContentLoaded', init);

function init (event) {
  myCard = new Card ('Hearts', 'Ace');

  console.log (`You have a card that is the ${myCard.value} of ${myCard.suit}`);
  mydeck = new Deck();
}
