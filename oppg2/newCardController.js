
function pushInfoToData() {
    let newCard =
    {
        recipient: model.input.createNewCard.recipient,
        sender: model.input.createNewCard.sender,
        content: model.input.createNewCard.content,
        chosenPicture: model.input.createNewCard.chosenPicture,
    }
    model.data.savedCards.push(newCard);
    updateNewCardView();
}

function manageRecipientInput(recipientInput) {
    model.input.createNewCard.recipient = recipientInput;
}

function manageSenderInput(senderInput) {
    model.input.createNewCard.sender = senderInput;
}

function manageContentInput(contentInput) {
    model.input.createNewCard.content = contentInput;
    
}

function choosePicture(clickedPicture) {
clickedPicture.classList.toggle('pictureClicked')
model.input.createNewCard.chosenPicture = clickedPicture.src;

}

function savedCardsLoop() {
    html= '';
    for(let i=0; i< model.data.savedCards.length; i++){
        html += /*HTML*/ `
        <div class="sASCGrid">
        <div>
        <img class="sASCImg" src="${model.data.savedCards[i].chosenPicture}">
        </div>
        <div class="sASCText">
        <div>${model.data.savedCards[i].recipient}</div>
        <div>${model.data.savedCards[i].sender}</div>
        <div class="sASCContent">${model.data.savedCards[i].content}</div> 
        </div>
        </div>
        
        
        `
        console.log(model.data.savedCards[i])
    }
    return html
    
}


//bugs:
// man kan få border på flere bilder