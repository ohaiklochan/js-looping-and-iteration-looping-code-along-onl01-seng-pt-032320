function writeCards(arraynames, eventname) {
  let thankYouCards = []
  for (let i = 0; i < arraynames.length; i++) {
    thankYouCards.push(`Thank you, ${arraynames[i]}, for the wonderful ${eventname} gift!`);
  }
 
  return thankYouCards;
}

function countDown(number){
  let i = 0;
  while (i < 11){
    console.log(i++)
  }
}