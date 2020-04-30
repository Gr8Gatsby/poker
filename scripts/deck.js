/*
    Class: Deck
    Description: This class will manage a full deck of cards
*/

class Deck {
  deck = [];
  static suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  static values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  // Construct deck
  constructor () {
    this.initialize ();
  }

  // Shuffle method
  shuffle () {
   
  }

  // Initailize method
  initialize () {
    for (let suit in Deck.suits) {
        for (let value in Deck.values) {
          this.deck.push (new Card(Deck.suits[suit], Deck.values[value]));
        }
      }
  }

  // Deal method
}

/*
    Class: Card
    Description: This class will store the basic data for 
    a card, including suit, and value. It will ensure that 
    the values for a card are valid.
*/

  
