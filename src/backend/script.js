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
    'C11_PageOfCup.jpg',
    'C12_KnightOfCup.jpg',
    'C13_QueenOfCup.jpg',
    'C14_KingOfCup.jpg',
    'P01_AgeOfPentacles.jpg',
    'P02_2pentacles.jpg',
    'P03_3pentacles.jpg',
    'P04_4pentacles.jpg',
    'P05_5pentacles.jpg',
    'P06_6pentacles.jpg',
    'P07_7pentacles.jpg',
    'P08_8pentacles.jpg',
    'P09_9pentacles.jpg',
    'P10_10pentacles.jpg',
    'P11_PageofPentacles.jpg',
    'P12_KnightofPentacles.jpg',
    'P13_QueenofPentacles.jpg',
    'P14_KingofPentacles.jpg',
    'S01_AgeOfSword.jpg',
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
    'W01_AgeOfWands.jpg',
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
    'M01_TheFool.jpg',
    'M02_TheMagician.jpg',
    'M03_TheHighPriestess.jpg',
    'M04_TheEmpress.jpg',
    'M05_TheEmperor.jpg',
    'M06_TheHierophant.jpg',
    'M07_TheLovers.jpg',
    'M08_TheChariot.jpg',
    'M09_Strength.jpg',
    'M10_TheHermit.jpg',
    'M11_WheelofFortune.jpg',
    'M12_Justice.jpg',
    'M13_TheHangedMan.jpg',
    'M14_Death.jpg',
    'M15_Temperance.jpg',
    'M16_TheDevil.jpg',
    'M17_TheTower.jpg',
    'M18_TheStar.jpg',
    'M19_TheMoon.jpg',
    'M20_TheSun.jpg',
    'M21_Judgement.jpg',
    'M22_TheWorld.jpg'
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
