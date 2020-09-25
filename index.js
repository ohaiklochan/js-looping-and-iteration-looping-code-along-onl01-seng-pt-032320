const cards = ["teddy bear", "drone", "doll"];
 
function wrapCards(["Ada", "Brendan", "Ali"], "birthday") {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
  }
 
  return cards;
}
 
wrapCards(cards);