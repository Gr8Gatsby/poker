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

  // Create inter properties values for suit and value
  _suit = null;
  _value = null;

  // Create a card
  constructor (suit, value) {
    this.suit = suit;
    this.value = value;
  }

  // Check for a valid suit before saving
  set suit (suit) {
    if (Card.suits.includes (suit)) {
      // Found a matching suit
      this._suit = suit;
    } else {
      throw new Error (`${suit} does not match a valid suit value for a card`);
    }
  }
  get suit () {
    return this._suit;
  }

  // Check for a valid value before saving
  set value (value) {
    if (Card.values.includes (value)) {
      // Found a matching value
      this._value = value;
    } else {
      throw new Error (`${value} does not match a vaild value for a card`);
    }
  }
  get value () {
    return this._value;
  }
}
