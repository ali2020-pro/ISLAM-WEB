// Define an array of 400 Islamic quotes
quotes = [
    {"quote": "And whoever puts their trust in Allah, He will be enough for them.", "author": "The Quran, Surah At-Talaq (65:3)"},
    {"quote": "Indeed, with hardship comes ease.", "author": "The Quran, Surah Ash-Sharh (94:6)"},
    {"quote": "The best of you are those who learn the Quran and teach it.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Be merciful to others and you will receive mercy.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "Allah does not burden a soul beyond that it can bear.", "author": "The Quran, Surah Al-Baqarah (2:286)"},
    {"quote": "The believer’s shade on the Day of Resurrection will be their charity.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "Kindness is a mark of faith, and whoever has not kindness has not faith.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "The strongest among you is the one who controls their anger.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Patience is the key to relief.", "author": "Prophet Muhammad (PBUH), Musnad Ahmad"},
    {"quote": "Remember Allah and He will remember you.", "author": "The Quran, Surah Al-Baqarah (2:152)"},
    {"quote": "Whoever saves one life, it is as if they have saved all of humanity.", "author": "The Quran, Surah Al-Ma’idah (5:32)"},
    {"quote": "Good deeds erase bad deeds.", "author": "The Quran, Surah Hud (11:114)"},
    {"quote": "Speak good or remain silent.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "The best richness is the richness of the soul.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Whoever guides someone to goodness will have a reward like the one who did it.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "Do not let your difficulties fill you with anxiety; after all, it is only in the darkest nights that stars shine more brightly.", "author": "Ali ibn Abi Talib (RA)"},
    {"quote": "Forgive others as you would like Allah to forgive you.", "author": "Prophet Muhammad (PBUH), Musnad Ahmad"},
    {"quote": "Worship Allah as if you see Him; even though you do not see Him, He sees you.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "A true believer is one with whom others feel secure.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "Every act of kindness is charity.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Do not waste water, even if performing ablution on the banks of a fast-flowing river.", "author": "Prophet Muhammad (PBUH), Sunan Ibn Majah"},
    {"quote": "Seek knowledge from the cradle to the grave.", "author": "Prophet Muhammad (PBUH)"},
    {"quote": "Prayer is the key to paradise.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "Modesty is part of faith.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Whoever believes in Allah and the Last Day should be good to their neighbor.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Contentment is the wealth that will never run out.", "author": "Prophet Muhammad (PBUH), Musnad Ahmad"},
    {"quote": "When you help someone, Allah helps you.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "The best prayer is the one offered on time.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "He who is not thankful to people is not thankful to Allah.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "Paradise lies under the feet of your mother.", "author": "Prophet Muhammad (PBUH), Sunan An-Nasa’i"},
    {"quote": "The best charity is to satisfy a hungry person.", "author": "Prophet Muhammad (PBUH), Sunan Ibn Majah"},
    {"quote": "Whoever wishes to enter paradise should treat people the way they want to be treated.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "The most beloved deed to Allah is the most regular and constant, even if it were little.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Do not envy one another.", "author": "Prophet Muhammad (PBUH), Sahih Muslim"},
    {"quote": "The best among you is the one who is best to their family.", "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"},
    {"quote": "The best word is the remembrance of Allah.", "author": "Prophet Muhammad (PBUH), Musnad Ahmad"},
    {"quote": "Guard yourselves against Hellfire, even if it is with half a date in charity.", "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"},
    {"quote": "Seek forgiveness from Allah and He will forgive you.", "author": "The Quran, Surah Nuh (71:10)"},
]


// Dynamically generate quote panels
const quotePanelsContainer = document.getElementById('quote-panels');
quotes.forEach((quoteItem) => {
    const panel = document.createElement('div');
    panel.className = 'quote-panel';
    panel.innerHTML = `<p>"${quoteItem.quote}"</p>
    <p>By: ${quoteItem.author}</p>`;
    quotePanelsContainer.appendChild(panel);
});
