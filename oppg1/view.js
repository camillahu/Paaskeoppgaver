
calculateDays(currentDate, easterDate, displayDOM);
updateView();
function updateView() {
    app.innerHTML= /*HTML*/ `
    <h2>Velkommen, ${user}!</h2>
    <div>Det er ${counter} dager til påskeaften</div>

    `
    
}