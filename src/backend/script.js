// Replace 'folder_name' with the actual folder path containing your card images
const folderPath = './assets/cards';

// Replace 'image_names' with the names of your card images (e.g., 'card1.jpg', 'card2.jpg', ...)
const imageNames = ['C01_AceOfCup.jpg','C02_2cups.jpg'];

document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const cardContainer = document.getElementById('cardContainer');

    drawButton.addEventListener('click', () => {
        const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];
        const imagePath = `${folderPath}/${randomImageName}`;
        cardContainer.innerHTML = `<img src="${imagePath}" alt="Card">`;
    });
});
