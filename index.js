import Deck from "./deck.js"

const deck = new Deck()
console.log(deck.cards)

const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

startGame()
function startGame() {
	const deck = new Deck()
	deck.shuffle()
}