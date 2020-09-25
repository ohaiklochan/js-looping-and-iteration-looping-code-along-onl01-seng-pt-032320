const cards = ["Lisa", "Kaitlin", "Jan"];
 
function wrapCards(["Lisa", "Kaitlin", "Jan"], "surprise") {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
  }
 
  return cards;
}