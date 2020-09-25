function writeCards(arraynames, eventname) {
  let thankYouCards = []
  for (let i = 0; i < arraynames.length; i++) {
    thankYouCards.push(`Thank you, ${arraynames[i]}, for the wonderful ${eventname} gift!`);
  }
 
  return thankYouCards;
}