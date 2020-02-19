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

