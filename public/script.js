// Use correct path for assets relative to the HTML file that loads this script.
// If your HTML is at src/frontpage/homepage.html and assets are at src/assets/cards,
// the correct path is '../assets/cards' (if script.js is loaded from frontpage).
const folderPath = 'assets/cards';

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

// Card meanings: map image filename to meaning
const cardMeanings = {
    'C01_AceOfCup.jpg': 'New beginnings in love, compassion, and creativity.',
    'C02_2cups.jpg': 'Partnership, unity, and connection.',
    'C03_3cups.jpg': 'Celebration, friendship, and community.',
    'C04_4cups.jpg': 'Apathy, contemplation, and reevaluation.',
    'C05_5cups.jpg': 'Loss, regret, and focusing on the negative.',
    'C06_6cups.jpg': 'Nostalgia, memories, and childhood.',
    'C07_7cups.jpg': 'Choices, fantasy, and illusion.',
    'C08_8cups.jpg': 'Walking away, seeking deeper meaning.',
    'C09_9cups.jpg': 'Contentment, satisfaction, and wishes fulfilled.',
    'C10_10cups.jpg': 'Happiness, family, and emotional fulfillment.',
    'C11_PageOfCup.jpg': 'Creative opportunities, curiosity, and possibility.',
    'C12_KnightOfCup.jpg': 'Romance, charm, and imagination.',
    'C13_QueenOfCup.jpg': 'Compassion, calm, and comfort.',
    'C14_KingOfCup.jpg': 'Emotional balance, generosity, and control.',
    'P01_AceOfPentacles.jpg': 'New job, career change, or financial opportunity.',
    'P02_2pentacles.jpg': 'Balance, adaptability, and time management.',
    'P03_3pentacles.jpg': 'Teamwork, collaboration, and skill development.',
    'P04_4pentacles.jpg': 'Control, stability, and holding on.',
    'P05_5pentacles.jpg': 'Financial loss, poverty, and isolation.',
    'P06_6pentacles.jpg': 'Generosity, charity, and giving/receiving help.',
    'P07_7pentacles.jpg': 'Patience, perseverance, and long-term success.',
    'P08_8pentacles.jpg': 'Diligence, mastery, and hard work.',
    'P09_9pentacles.jpg': 'Financial independence, luxury, and self-sufficiency.',
    'P10_10pentacles.jpg': 'Wealth, inheritance, and family ties.',
    'P11_PageofPentacles.jpg': 'New opportunities, ambition, and desire to learn.',
    'P12_KnightofPentacles.jpg': 'Hard work, routine, and responsibility.',
    'P13_QueenofPentacles.jpg': 'Practicality, nurturing, and financial security.',
    'P14_KingofPentacles.jpg': 'Wealth, business acumen, and stability.',
    'S01_AgeOfSword.jpg': 'Mental clarity, truth, and justice.',
    'S02_2swords.jpg': 'Indecision, choices, and blocked emotions.',
    'S03_3swords.jpg': 'Heartbreak, sorrow, and grief.',
    'S04_4swords.jpg': 'Rest, recovery, and contemplation.',
    'S05_5swords.jpg': 'Conflict, tension, and defeat.',
    'S06_6swords.jpg': 'Transition, change, and rite of passage.',
    'S07_7swords.jpg': 'Betrayal, deception, and getting away with something.',
    'S08_8swords.jpg': 'Restriction, imprisonment, and feeling trapped.',
    'S09_9swords.jpg': 'Anxiety, worry, and fear.',
    'S10_10swords.jpg': 'Betrayal, loss, and crisis.',
    'S11_PageOfSwords.jpg': 'Curiosity, mental energy, and new ideas.',
    'S12_KnightOfSwords.jpg': 'Action, speed, and ambition.',
    'S13_QueenOfSwords.jpg': 'Independence, complexity, and perceptiveness.',
    'S14_KingOfSwords.jpg': 'Intellectual authority, truth, and ethics.',
    'W01_AgeOfWands.jpg': 'Inspiration, potential, and new opportunities.',
    'W02_2wands.jpg': 'Planning, decisions, and discovery.',
    'W03_3wands.jpg': 'Expansion, growth, and foresight.',
    'W04_4wands.jpg': 'Celebration, harmony, and homecoming.',
    'W05_5wands.jpg': 'Conflict, competition, and rivalry.',
    'W06_6wands.jpg': 'Victory, success, and public recognition.',
    'W07_7wands.jpg': 'Courage, perseverance, and maintaining control.',
    'W08_8wands.jpg': 'Speed, action, and swift movement.',
    'W09_9wands.jpg': 'Resilience, persistence, and test of faith.',
    'W10_10wands.jpg': 'Burden, responsibility, and hard work.',
    'W11_PageOfWands.jpg': 'Inspiration, ideas, and exploration.',
    'W12_KnightOfWands.jpg': 'Energy, passion, and adventure.',
    'W13_QueenOfWands.jpg': 'Courage, confidence, and independence.',
    'W14_KingOfWands.jpg': 'Leadership, vision, and honor.',
    'M01_TheFool.jpg': 'New beginnings, innocence, and spontaneity.',
    'M02_TheMagician.jpg': 'Manifestation, resourcefulness, and power.',
    'M03_TheHighPriestess.jpg': 'Intuition, unconscious, and mystery.',
    'M04_TheEmpress.jpg': 'Fertility, femininity, and beauty.',
    'M05_TheEmperor.jpg': 'Authority, structure, and control.',
    'M06_TheHierophant.jpg': 'Tradition, conformity, and morality.',
    'M07_TheLovers.jpg': 'Love, harmony, and partnership.',
    'M08_TheChariot.jpg': 'Willpower, determination, and triumph.',
    'M09_Strength.jpg': 'Courage, strength, and confidence.',
    'M10_TheHermit.jpg': 'Soul-searching, introspection, and guidance.',
    'M11_WheelofFortune.jpg': 'Luck, karma, and life cycles.',
    'M12_Justice.jpg': 'Fairness, truth, and law.',
    'M13_TheHangedMan.jpg': 'Sacrifice, release, and new perspectives.',
    'M14_Death.jpg': 'Endings, transformation, and transition.',
    'M15_Temperance.jpg': 'Balance, moderation, and purpose.',
    'M16_TheDevil.jpg': 'Addiction, materialism, and playfulness.',
    'M17_TheTower.jpg': 'Disruption, awakening, and chaos.',
    'M18_TheStar.jpg': 'Hope, inspiration, and serenity.',
    'M19_TheMoon.jpg': 'Illusion, fear, and anxiety.',
    'M20_TheSun.jpg': 'Joy, success, and positivity.',
    'M21_Judgement.jpg': 'Judgement, rebirth, and inner calling.',
    'M22_TheWorld.jpg': 'Completion, accomplishment, and travel.',
};

document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const cardContainer = document.getElementById('cardContainer');

    drawButton.addEventListener('click', () => {
        const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];
        const imagePath = `${folderPath}/${randomImageName}`;
        const meaning = cardMeanings[randomImageName] || 'Meaning not found.';
        // Show loading spinner
        cardContainer.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; min-height: 320px; justify-content: center;">
            <div id='card-loading' style='margin: 2em 0; display: flex; flex-direction: column; align-items: center; justify-content: center;'>
                <div class="spinner" style="border: 6px solid #eee; border-top: 6px solid #7f53ac; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; display: block; margin: 0 auto;"></div>
                <div style='margin-top: 1em; color: #7f53ac; font-size: 1.2em; text-align: center;'>We are choosing a card for you...</div>
            </div>
        </div>`;
        // Create image and show only after loaded (with artificial delay)
        const img = new Image();
        img.src = imagePath;
        img.alt = 'Card';
        img.style.width = '180px';
        img.style.height = '280px';
        img.style.borderRadius = '1em';
        img.style.boxShadow = '0 8px 32px 0 #4b386966';
        img.style.border = '2px solid #fff';
        img.style.background = '#fff';
        img.style.objectFit = 'contain';
        img.onload = () => {
            setTimeout(() => {
                cardContainer.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="${imagePath}" alt="Card" style="width:180px;height:280px;border-radius:1em;box-shadow:0 8px 32px 0 #4b386966;border:2px solid #fff;background:#fff;object-fit:contain;">
                    <div style="margin-top: 1em; font-size: 1.1em; color: #4b3869; text-align: center; max-width: 220px;">
                        ${meaning}
                    </div>
                </div>`;
            }, 500); // 500ms delay for demo
        };
        img.onerror = () => {
            cardContainer.innerHTML = `<div style='color: #c00;'>Failed to load card image.</div>`;
        };
    });
    // Add spinner animation to the page
    const style = document.createElement('style');
    style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(style);
});
