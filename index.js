import Deck from "./deck.js"

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

document.addEventListener('click', () => {
	flipCards()
})

const cardSlot01 = document.querySelector('.card-slot-01')

startGame()
function startGame() {
	const deck = new Deck()
	deck.shuffle()
	console.log(deck.cards)
}

function flipCards() {
	const card01 = deck.pop()
	
	cardSlot01.appendChild(card01.getHTML())
}