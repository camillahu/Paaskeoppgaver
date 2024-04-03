
function getCurrentView() {
    const currentPage = model.app.page.find(function(view) {
        return document.getElementById(view);
    });

    if(currentPage) {
        const viewFunctionMap = {
            "createCard": updateNewCardView,
            "showNewCard": displayNewCardView,
            "showAllCards": showAllSavedCardsView,
        };

        const viewFunction = viewFunctionMap[currentPage];
        if(viewFunction) {
            viewFunction(); 
        } else {
            console.error("function not found for current view")
        }
    } else {
        console.error("current view not found");
    }
}