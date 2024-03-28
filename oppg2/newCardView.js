
function getCurrentView() {
    const currentPage = model.app.page.find(function(view) {
        return document.getElementById(view);
    });

    if(currentPage) {
        const viewFunctionMap = {
            "createCard": updateNewCardView,
            "showNewCard": displayNewCard,
            "showAllCards": showAllSavedCards,
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
// displayNewCard();
// updateNewCardView();
showAllSavedCards();
function updateNewCardView() {
    app.innerHTML = /*HTML*/ `
    <h1>Create new card</h1>

    <div class="newCardGrid">
        <form class= "inputsForm">
            <label style="cursor: pointer;">To: <br>
            <input type="text" onchange="manageRecipientInput(this.value)" 
            placeholder="Recipient"> </label><br>
            <label style="cursor: pointer;">From: <br>
            <input type="text" onchange="manageSenderInput(this.value)" 
            placeholder="Sender"> </label> <br>
            <label style="cursor: pointer;"> Custom message: <br>
            <textarea onchange="manageContentInput(this.value)" 
            placeholder="Write your easter greeting here" rows="10" cols="40"></textarea>
            </label><br>
        </form>
        
    
    <div>
        <div class="choosePictureText">Choose Picture:</div>
            <div class="picturesGrid">
                <img onclick="choosePicture(this)" src=${model.data.pictures[0]} alt="">
                <img onclick="choosePicture(this)" src=${model.data.pictures[1]} alt="">
                <img onclick="choosePicture(this)" src=${model.data.pictures[2]} alt="">
                <img onclick="choosePicture(this)" src=${model.data.pictures[3]} alt="">
            </div>
        </div>
    </div>
    <div class="saveAndDisplayBtns"><button onclick="pushInfoToData()">Save new card</button>
    <button onclick="displayNewCard()">Preview new card</button>
    <button onclick="showAllSavedCards()">Show all saved cards</button>
    </div>
    `
}

function displayNewCard() {
    pushInfoToData();
    app.innerHTML = /*HTML*/ `
    <div class="dNCGrid">
        <div ><img class="dNCImg" src=${model.data.savedCards[model.data.savedCards.length -1].chosenPicture} alt=""></div>
        <div class="dNCText">
            <div>To: ${model.data.savedCards[model.data.savedCards.length -1].recipient}</div> <br>
            <div>From: ${model.data.savedCards[model.data.savedCards.length -1].sender}</div> <br>
            <div class="dNCContent">${model.data.savedCards[model.data.savedCards.length -1].content}</div>
        </div>
    </div>
    <div class="dNCBtns">
    <button onclick="updateNewCardView()">Save card and create new card</button>
    <button onclick="showAllSavedCards()">Save card and show existing cards</button>
    <button onclick="">Delete and start again</button>
    
    <div>
    `
}

function showAllSavedCards() {
    app.innerHTML = /*HTML*/ `
    <div class="savedCardsContainer">
    <h1>All saved cards:</h1>
    ${savedCardsLoop()}
    </div>
    
    `
}

function showSavedCardText() {
    app.innerHTML = /*HTML*/ `
    
    `
}
function showSavedCardPicture() {
    app.innerHTML = /*HTML*/ `
    
    `
}