
function getDailyFunfact() {
    switch (counter) {
        case 1:
            funfact = "Honning går aldri ut på dato.";
            break;
        case 2:
            funfact = "Forskning viser at kuer kan ha bestevenner blandt hverandre.";
            break;
        case 3:
            funfact = "Den største ørkenen i verden er ikke Sahara, men Antarktis"
            break;
        case 4:
            funfact = "Eiffeltårnet kan bli 15cm høyere på sommeren fordi jernet ekspanderer seg i varmen."
            break;
        case 5:
            funfact = "Bananer er bær.";
            break;
        default: funfact = `Tærne dine stinker.`;
            break;
    }
    updateView();
}