function displayNewCardView() {
    pushInfoToData();
    
    app.innerHTML = /*HTML*/ `
    <div class="dNCGrid">
        <div ><img class="dNCImg" src=${model.data.savedCards[model.data.savedCards.length -1].chosenPicture} alt="${model.data.savedCards[0].chosenPicture}"></div>
        <div class="dNCText">
            <div>To: ${model.data.savedCards[model.data.savedCards.length -1].recipient}</div> <br>
            <div>From: ${model.data.savedCards[model.data.savedCards.length -1].sender}</div> <br>
            <div class="dNCContent">${model.data.savedCards[model.data.savedCards.length -1].content}</div>
        </div>
    </div>
    <div class="dNCBtns">
    <button onclick="updateNewCardView()">Save card and create new card</button>
    <button onclick="showAllSavedCardsView()">Save card and show existing cards</button>
    <button onclick="deleteNewCard()">Delete and start again</button>
    
    <div>
    `
}