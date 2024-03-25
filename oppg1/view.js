
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
    <div class="grid">
    <h2>Velkommen, ${user}🐰</h2>
    <button onclick="getDailyFunfact()">Klikk her for dagens funfact!</button>
    
    <div class="counterDiv">Det er ${counter} dager til påskeaften!</div>
    <div class="funfactDiv">${funfact}</div>
    </div>
    
    `
}