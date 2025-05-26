// Use correct path for assets relative to the HTML file that loads this script.
// If your HTML is at src/frontpage/homepage.html and assets are at src/assets/cards,
// the correct path is '../assets/cards' (if script.js is loaded from frontpage).
const folderPath = '../assets/cards';

// Replace 'image_names' with the names of your card images (e.g., 'card1.jpg', 'card2.jpg', ...)
const imageNames = [
    'C01_AceOfCup.jpg',
    'C02_2cups.jpg',
    'C03_3cups.jpg',
    'C04_4cups.jpg',
    'C05_5cups.jpg',
    'C06_6cups.jpg',
    'C07_7cups.jpg',
    'C08_8cups.jpg',
    'C09_9cups.jpg',
    'C10_10cups.jpg',
    'C11_PageOfCups.jpg',
    'C12_KnightOfCups.jpg',
    'C13_QueenOfCups.jpg',
    'C14_KingOfCups.jpg',
    'P01_AceOfPentacles.jpg',
    'P02_2pentacles.jpg',
    'P03_3pentacles.jpg',
    'P04_4pentacles.jpg',
    'P05_5pentacles.jpg',
    'P06_6pentacles.jpg',
    'P07_7pentacles.jpg',
    'P08_8pentacles.jpg',
    'P09_9pentacles.jpg',
    'P10_10pentacles.jpg',
    'P11_PageOfPentacles.jpg',
    'P12_KnightOfPentacles.jpg',
    'P13_QueenOfPentacles.jpg',
    'P14_KingOfPentacles.jpg',
    'S01_AceOfSwords.jpg',
    'S02_2swords.jpg',
    'S03_3swords.jpg',
    'S04_4swords.jpg',
    'S05_5swords.jpg',
    'S06_6swords.jpg',
    'S07_7swords.jpg',
    'S08_8swords.jpg',
    'S09_9swords.jpg',
    'S10_10swords.jpg',
    'S11_PageOfSwords.jpg',
    'S12_KnightOfSwords.jpg',
    'S13_QueenOfSwords.jpg',
    'S14_KingOfSwords.jpg',
    'W01_AceOfWands.jpg',
    'W02_2wands.jpg',
    'W03_3wands.jpg',
    'W04_4wands.jpg',
    'W05_5wands.jpg',
    'W06_6wands.jpg',
    'W07_7wands.jpg',
    'W08_8wands.jpg',
    'W09_9wands.jpg',
    'W10_10wands.jpg',
    'W11_PageOfWands.jpg',
    'W12_KnightOfWands.jpg',
    'W13_QueenOfWands.jpg',
    'W14_KingOfWands.jpg',
    'Major_00_TheFool.jpg',
    'Major_01_TheMagician.jpg',
    'Major_02_TheHighPriestess.jpg',
    'Major_03_TheEmpress.jpg',
    'Major_04_TheEmperor.jpg',
    'Major_05_TheHierophant.jpg',
    'Major_06_TheLovers.jpg',
    'Major_07_TheChariot.jpg',
    'Major_08_Strength.jpg',
    'Major_09_TheHermit.jpg',
    'Major_10_WheelOfFortune.jpg',
    'Major_11_Justice.jpg',
    'Major_12_TheHangedMan.jpg',
    'Major_13_Death.jpg',
    'Major_14_Temperance.jpg',
    'Major_15_TheDevil.jpg',
    'Major_16_TheTower.jpg',
    'Major_17_TheStar.jpg',
    'Major_18_TheMoon.jpg',
    'Major_19_TheSun.jpg',
    'Major_20_Judgement.jpg',
    'Major_21_TheWorld.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const cardContainer = document.getElementById('cardContainer');

    drawButton.addEventListener('click', () => {
        const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];
        const imagePath = `${folderPath}/${randomImageName}`;
        cardContainer.innerHTML = `<img src="${imagePath}" alt="Card" onerror="this.src='https://via.placeholder.com/180x280/ffffff/cccccc?text='">`;
    });
});
