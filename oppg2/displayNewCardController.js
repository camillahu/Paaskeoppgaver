function deleteNewCard() {
    updateNewCardView();
    const newCardIndex = model.data.savedCards.length - 1;
    model.data.savedCards.splice(newCardIndex, 1);
}