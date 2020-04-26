/*
    Class: Card
    Description: This class will store the basic data for 
    a card, including suit, and value. It will ensure that 
    the values for a card are valid.
*/
class Card {
  // Create static values for suits and card values
  static suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  static values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  constructor (suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
