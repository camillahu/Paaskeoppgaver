const app = document.getElementById("app");
const model = {

    app: {
        page: ["createCard", "showNewCard", "showAllCards",],

    },
    input: {
        createNewCard: {
            recipient: "",
            sender: "",
            content: "",
            chosenPicture: "",
        }
    },
    data: {
        savedCards: [
            {
                recipient: "Navn Navnesen",
                sender: "Navn Navneson",
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
                chosenPicture: "img1.jpg",
            },

        ],
        pictures: [
            "img1.jpg",
            "img2.jpg",
            "img3.jpg",
            "img4.jpg"
        ],
    },
}
