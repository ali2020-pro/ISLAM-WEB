const quote = [
    {
        "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
        "translated": "The best of you are those who learn the Quran and teach it.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "رَحِمَ اللَّهُ مَنْ تَجَاوَزَ عَنْهُ وَرَحِمَ اللَّهُ مَنْ رَحِمَ النَّاسَ",
        "translated": "Be merciful to others and you will receive mercy.",
        "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"
    },
    {
        "arabic": "ظِلُّ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ صَدَقَتُهُ",
        "translated": "The believer’s shade on the Day of Resurrection will be their charity.",
        "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"
    },
    {
        "arabic": "الْبِرُّ مَانَ بَذَلَ وَجَهُ اللَّهِ فِي رَحْمَةٍ وَسَحَارِهِ",
        "translated": "Kindness is a mark of faith, and whoever has not kindness has not faith.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "أَقْوَامٌ فِي أَنفُسِهِمْ سَابِقُونَ وَسَابِقُونَ فِي الْجَنَّةِ",
        "translated": "The strongest among you is the one who controls their anger.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "إِنَّمَا الصَّبْرُ فِي الْمُصِيبَةِ الْأُولَىٰ",
        "translated": "Patience is the key to relief.",
        "author": "Prophet Muhammad (PBUH), Musnad Ahmad"
    },
    {
        "arabic": "مَنْ لَمْ يَقُلْ خَيْرًا فَلْيَصْمُتْ",
        "translated": "Speak good or remain silent.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "أَفْضَلُ الغِنَا غِنَا النَّفْسِ",
        "translated": "The best richness is the richness of the soul.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "مَنْ دَلَّ عَلَىٰ خَيْرٍ فَكَمَنْ فَعَلَهُ",
        "translated": "Whoever guides someone to goodness will have a reward like the one who did it.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "مَنْ لَمْ يَغْفِرْ لِلنَّاسِ فَلا يَغْفِرُ اللَّهُ لَهُ",
        "translated": "Forgive others as you would like Allah to forgive you.",
        "author": "Prophet Muhammad (PBUH), Musnad Ahmad"
    },
    {
        "arabic": "صَلُّوا عَلَيَّ فِي رُؤْيَتِي فِي السَّمَاءِ",
        "translated": "Worship Allah as if you see Him; even though you do not see Him, He sees you.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },{
        "arabic": "مَنْ أَحَبَّ لِلنَّاسِ مَا يُحِبُّ لِنَفْسِهِ فَهُوَ مِنْ أَهْلِ الْجَنَّةِ",
        "translated": "Whoever loves for the people what he loves for himself will be among the people of Paradise.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "الْمَرْءُ مَعَ مَنْ أَحَبَّ",
        "translated": "A person will be with the one he loves.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "إِنَّمَا تُؤْمَنُونَ بِاللَّهِ وَرَسُولِهِ",
        "translated": "Indeed, you believe in Allah and His Messenger.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "اللَّهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْقُرْآنِ الَّذِينَ هُمْ أَهْلُكَ وَخَاصَّتُكَ",
        "translated": "O Allah, make us among the people of the Quran, who are Your special people.",
        "author": "Prophet Muhammad (PBUH), Sunan Ibn Majah"
    },
    {
        "arabic": "مَنْ سَأَلَ اللَّهَ الجَنَّةَ فَسَأَلَهُ إِيمَانًا تَامًّا",
        "translated": "Whoever asks Allah for Paradise, let him ask with complete faith.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "الْجَنَّةُ تَحْتَ ظِلِّ السُّيُوفِ",
        "translated": "Paradise lies under the shade of swords.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
        "translated": "Indeed, Allah is Most Forgiving, Most Merciful.",
        "author": "Quran (Al-Mumtahanah 60:3)"
    },
    {
        "arabic": "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
        "translated": "Whoever fasts during Ramadan with faith and seeking reward, his previous sins will be forgiven.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "إِنَّ أَعْمَالَكُمْ تَعْرِفُونَ مِنْهَا مَا تَسْتَحِقُونَ",
        "translated": "Your deeds will make you known to others and you will be judged by them.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        "translated": "None of you truly believes until he loves for his brother what he loves for himself.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "إِنَّمَا يُجَازَى الْمُحْسِنُ بِمَا يُحْسِنُ",
        "translated": "Indeed, the good doer will be rewarded with what he has done well.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "الْأَرْبَعَةُ مِنْ أَعْجَبِ النَّاسِ بِالْإِيمَانِ",
        "translated": "Four people are the most wonderful in faith.",
        "author": "Prophet Muhammad (PBUH), Sunan At-Tirmidhi"
    },
    {
        "arabic": "إِنَّ مَنْ أَحَبَّ رَجُلًا لَا لِجَاهٍ وَلَا لِمَالٍ إِلَّا لِلَّهِ فَذَاكَ يَرْتَفِعُ مَرْتَبَتُهُ",
        "translated": "Whoever loves a person not for his status or wealth but for Allah, his status will be elevated.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "الْوَلَدُ مَرْءَةٌ فِي قُدَمِهِ إِلَّا فِي تَحْسِينِهِ",
        "translated": "A child is a way for his parents to gain reward, except in his disobedience.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "إِنَّ اللَّهَ لَا يَغْفِرُ لِمَنْ تَرَكَ صَلَاةً تَعَمُّدًا",
        "translated": "Indeed, Allah does not forgive the one who abandons prayer intentionally.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "رَحِمَ اللَّهُ مَنْ أَحْيَا سُنبُولَةً فِي قَلْبِهِ",
        "translated": "May Allah have mercy on the one who revives a seed in his heart.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "يُصْحِحُ اللَّهُ النَّبِيَّ وَيُرَسِّلُهُ لِجَمِيعِ النَّاسِ",
        "translated": "Allah corrects the Prophet and sends him to all of mankind.",
        "author": "Prophet Muhammad (PBUH), Quran (Al-Ahzab 33:40)"
    },
    {
        "arabic": "إِنَّ اللَّهَ يَقُولُ فِي لَيَالِي عِيدٍ: إِنِّّي أَعْتَقُ أَصْحَابَ الْمَرَاجِعِ",
        "translated": "Allah says on the nights of Eid: 'Indeed, I have freed the people from Hellfire.'",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "مَا أَصَابَكَ فَفِي تَمَامٍ وَسَجَّلَكُمْ لِدِينِكُمْ",
        "translated": "Whatever happens to you, it is complete, and Allah has recorded your faith.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "الْعِبَادَةُ أَعْظَمُ النِّعَمِ فِي الْجَنَّةِ",
        "translated": "Worship is the greatest blessing in Paradise.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "اِقْتَدُوا بِهِ فَإِنَّكَ فِي النَّجَاحِ",
        "translated": "Follow his example, for you are in success.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "مَنْ قَالَ لَا إِلٰهَ إِلَّا اللَّهُ فَفِي نَفْسِهِ لَمْ يُحْشَرْ",
        "translated": "Whoever says there is no deity but Allah, his heart will not be resurrected.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "مَنْ جَاءَ بِالْحَسَنَاتِ فَفِي كُلِّهِ سَعَادَتٌ",
        "translated": "Whoever brings good deeds will have happiness in all of them.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "الْإِيمَانُ بِالْقَلْبِ وَالْلِّسَانِ وَالْجَوَارِحِ",
        "translated": "Faith is in the heart, on the tongue, and in actions.",
        "author": "Prophet Muhammad (PBUH), Sahih al-Bukhari"
    },
    {
        "arabic": "اللَّهُمَّ أَنتَ حَسْبِي فَأَكْفِني هُمُومَ النَّاسِ",
        "translated": "O Allah, You are enough for me, so relieve me of the worries of the people.",
        "author": "Prophet Muhammad (PBUH), Sunan Ibn Majah"
    },
    {
        "arabic": "إِنَّ اللَّهَ لَا يُحِبُّ الطَّوْلَ عَلَىٰ أَمْرِهِ",
        "translated": "Indeed, Allah does not like people to show pride in their command.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "إِنَّ الصَّدَقَةَ تَطْهُرُهُ",
        "translated": "Indeed, charity purifies the soul.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "قُدِّمُوا فَاسْتَجِيبُوا بِالْأَمَانِ",
        "translated": "Proceed and respond with peace.",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
    {
        "arabic": "اللَّهُ يَقُولُ: إِنِّي فِيهِ تَفْرَجُونَ",
        "translated": "Allah says: 'I am with you, where you find me, you will find relief.'",
        "author": "Prophet Muhammad (PBUH), Sahih Muslim"
    },
];

// Render the Hadiths into HTML dynamically
const hadithsContainer = document.getElementById('hadiths-container');

quote.forEach((hadith,index) => {
    const panel = document.createElement('div');
    panel.classList.add('hadith-panel');

    panel.innerHTML = `
        <h4>Hadith ${index + 1}</h4>
        <h2>Arabic</h2>
        <p class="arabic-text">${hadith.arabic}</p>
        <h2>Translation</h2>
        <p class="translated-text">"${hadith.translated}"</p>
        <p class="author">- ${hadith.author}</p>
    `;

    hadithsContainer.appendChild(panel);
});
