// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let deck = [];

for (let x of suits) {
  for (let y of values) {
    // create card object
    const card = { Value: y, Suit: x };

    deck.push(card);
  }
}
// Add Jokers card
deck.push("Joker 1");
deck.push("Joker 2");
