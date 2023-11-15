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

    // create elements for displaying the card
    const cardDiv = document.createElement("div");
    cardDiv.textContent = x + " " + y;
    document.body.appendChild(cardDiv);

    // add the card to the deck array
    deck.push(card);
  }
}
// Add Jokers card


const joker_1 = deck.push("Joker 1");
const joker_2 = deck.push("Joker 2")

const joker1 = document.createElement("div");
joker1.innerHTML = "Joker  1";
document.body.appendChild(joker1);

const joker2 = document.createElement("div");
joker2.innerHTML = "Joker 2 ";
document.body.appendChild(joker2)



// console.log(deck);
