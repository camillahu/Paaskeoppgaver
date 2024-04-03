
updateNewCardView();
function updateNewCardView() {
    let html = "";

    html += /*HTML*/ `
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
                ${generateImgs()}
            </div>
        </div>
    </div>
    <div class="saveAndDisplayBtns"><button onclick="pushInfoToData()">Save new card</button>
    <button onclick="displayNewCardView()">Preview new card</button>
    <button onclick="showAllSavedCardsView()">Show all saved cards</button>
    </div>
    `
    app.innerHTML= html;
}

function generateImgs() {
    let html= "";
    for(let i = 0; i < model.data.pictures.length; i++) {
        if(model.app.chosenPicture == i) {
            html += /*HTML*/`
            <img src="${model.data.pictures[i]}" class="pictureClicked" onclick="clickedPicture(this.src, ${i})">
        `
        } else {
            html += /*HTML*/`
            <img src="${model.data.pictures[i]}" onclick="clickedPicture(this.src, ${i})">` 
        }
        
    }
    return html;
}

function showSavedCardText() {
    app.innerHTML = /*HTML*/ `
    
    `
}
function showSavedCardPicture() {
    app.innerHTML = /*HTML*/ `
    
    `
}