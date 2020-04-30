/*
    Class: Deck
    Description: This class will manage a full deck of cards
*/

class Deck {

    deck = [];
    static suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    static values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    // Construct deck
    constructor() {
        this.shuffle()
        
    }

    // Shuffle method
    shuffle() {
        for (let suit in this.suits) {
                  for (let value in this.values) {
                    this.deck.push(`${this.values[value]} of ${this.suits[suit]}`);
                  }
                }
    }
    

    // Initailize method
    initialize() {

    }

    // Deal method


}

class Hand {

}