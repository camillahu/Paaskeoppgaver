function showAllSavedCardsView() {
    app.innerHTML = /*HTML*/ `
    <h2>All saved cards:</h2>
    ${savedCardsLoop()}
    <button onclick= "updateNewCardView()">Create new card</button>
    `
}