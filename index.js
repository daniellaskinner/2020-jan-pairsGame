var clickCounter = 0
var clickedCard1 = {}
var clickedCard2 = {}
var winCounter = 0


fetch('./deck.json')
    .then(data => data.json())
    .then((fetchDeck)=>{
        let deck = fetchDeck.hippos
        deck = randomiseDeck(deck)
        assignCards(deck)
        addClickEvents(deck)
    }).catch(()=>{
        alert('Something went wrong. Please contact an administrator.')
    })

