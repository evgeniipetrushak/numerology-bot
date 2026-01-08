// Telegram WebApp initialization
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// Zodiac signs data
const zodiacSigns = [
    { name: 'Козерог', emoji: '\u2651', element: 'earth', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { name: 'Водолей', emoji: '\u2652', element: 'air', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { name: 'Рыбы', emoji: '\u2653', element: 'water', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
    { name: 'Овен', emoji: '\u2648', element: 'fire', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { name: 'Телец', emoji: '\u2649', element: 'earth', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { name: 'Близнецы', emoji: '\u264A', element: 'air', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { name: 'Рак', emoji: '\u264B', element: 'water', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { name: 'Лев', emoji: '\u264C', element: 'fire', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { name: 'Дева', emoji: '\u264D', element: 'earth', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { name: 'Весы', emoji: '\u264E', element: 'air', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { name: 'Скорпион', emoji: '\u264F', element: 'water', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { name: 'Стрелец', emoji: '\u2650', element: 'fire', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }
];

// Element names in Russian
const elementNames = {
    fire: 'Огонь',
    earth: 'Земля',
    air: 'Воздух',
    water: 'Вода'
};

// Element compatibility matrix (0-100)
const elementCompatibility = {
    'fire-fire': 85,
    'fire-earth': 45,
    'fire-air': 90,
    'fire-water': 40,
    'earth-earth': 80,
    'earth-air': 55,
    'earth-water': 85,
    'air-air': 75,
    'air-water': 50,
    'water-water': 90
};

// Numerology compatibility matrix for life path numbers (1-9)
const numerologyMatrix = {
    '1-1': 70, '1-2': 60, '1-3': 85, '1-4': 55, '1-5': 80, '1-6': 75, '1-7': 65, '1-8': 70, '1-9': 75,
    '2-2': 75, '2-3': 70, '2-4': 80, '2-5': 55, '2-6': 90, '2-7': 75, '2-8': 85, '2-9': 70,
    '3-3': 80, '3-4': 50, '3-5': 90, '3-6': 85, '3-7': 60, '3-8': 65, '3-9': 95,
    '4-4': 70, '4-5': 45, '4-6': 75, '4-7': 80, '4-8': 90, '4-9': 55,
    '5-5': 85, '5-6': 60, '5-7': 75, '5-8': 70, '5-9': 80,
    '6-6': 80, '6-7': 55, '6-8': 75, '6-9': 90,
    '7-7': 85, '7-8': 60, '7-9': 70,
    '8-8': 75, '8-9': 65,
    '9-9': 85
};

// Letter values for numerology (Russian alphabet)
const letterValues = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9,
    'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9,
    'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9,
    'ъ': 1, 'ы': 2, 'ь': 3, 'э': 4, 'ю': 5, 'я': 6,
    // English letters
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
};

// Reduce number to single digit (except master numbers 11, 22, 33)
function reduceToSingleDigit(num) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}

// Calculate Life Path Number from date
function calculateLifePathNumber(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const sum = String(day).split('').reduce((a, b) => a + parseInt(b), 0) +
                String(month).split('').reduce((a, b) => a + parseInt(b), 0) +
                String(year).split('').reduce((a, b) => a + parseInt(b), 0);

    return reduceToSingleDigit(sum);
}

// Calculate Name Number
function calculateNameNumber(name) {
    const cleanName = name.toLowerCase().replace(/[^a-zа-яё]/g, '');
    let sum = 0;

    for (const char of cleanName) {
        if (letterValues[char]) {
            sum += letterValues[char];
        }
    }

    return reduceToSingleDigit(sum);
}

// Get zodiac sign from date
function getZodiacSign(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    for (const sign of zodiacSigns) {
        if (sign.startMonth === 12 && sign.endMonth === 1) {
            // Capricorn special case (crosses year boundary)
            if ((month === 12 && day >= sign.startDay) || (month === 1 && day <= sign.endDay)) {
                return sign;
            }
        } else if (
            (month === sign.startMonth && day >= sign.startDay) ||
            (month === sign.endMonth && day <= sign.endDay)
        ) {
            return sign;
        }
    }

    return zodiacSigns[0]; // Default to Capricorn
}

// Get numerology compatibility
function getNumerologyCompatibility(num1, num2) {
    // Handle master numbers
    const n1 = num1 > 9 ? reduceToSingleDigit(num1) : num1;
    const n2 = num2 > 9 ? reduceToSingleDigit(num2) : num2;

    const key = n1 <= n2 ? `${n1}-${n2}` : `${n2}-${n1}`;
    return numerologyMatrix[key] || 70;
}

// Get element compatibility
function getElementCompatibility(element1, element2) {
    const key1 = `${element1}-${element2}`;
    const key2 = `${element2}-${element1}`;
    return elementCompatibility[key1] || elementCompatibility[key2] || 60;
}

// Life path number meanings
const lifePathMeanings = {
    1: 'Лидер, независимый, амбициозный',
    2: 'Дипломат, чувствительный, партнёр',
    3: 'Творческий, общительный, оптимист',
    4: 'Практичный, надёжный, строитель',
    5: 'Свободолюбивый, авантюрист, гибкий',
    6: 'Заботливый, ответственный, семьянин',
    7: 'Аналитик, духовный искатель, интроверт',
    8: 'Властный, материалист, успешный',
    9: 'Гуманист, идеалист, мудрый',
    11: 'Мастер-число: интуитивный визионер',
    22: 'Мастер-число: великий строитель',
    33: 'Мастер-число: мастер-учитель'
};

// Pair analysis based on numbers
function getPairAnalysis(lifePath1, lifePath2, nameNum1, nameNum2, sign1, sign2) {
    const analyses = [];

    // Life path compatibility analysis
    const lpCompat = getNumerologyCompatibility(lifePath1, lifePath2);
    if (lpCompat >= 85) {
        analyses.push('Ваши числа судьбы создают мощную гармонию. Вы интуитивно понимаете друг друга и движетесь в одном направлении.');
    } else if (lpCompat >= 70) {
        analyses.push('Числа судьбы показывают хорошую совместимость. Вы можете учиться друг у друга и расти вместе.');
    } else if (lpCompat >= 55) {
        analyses.push('Ваши числа судьбы требуют работы над отношениями. Разные подходы к жизни могут стать как преградой, так и источником роста.');
    } else {
        analyses.push('Числа судьбы указывают на кармические уроки. Эти отношения могут быть сложными, но очень трансформирующими.');
    }

    // Element compatibility
    const elemCompat = getElementCompatibility(sign1.element, sign2.element);
    if (sign1.element === sign2.element) {
        analyses.push(`Вы оба принадлежите стихии ${elementNames[sign1.element]}. Это создаёт глубокое взаимопонимание и схожие ценности.`);
    } else if (elemCompat >= 85) {
        analyses.push(`Стихии ${elementNames[sign1.element]} и ${elementNames[sign2.element]} прекрасно дополняют друг друга, создавая баланс в отношениях.`);
    } else if (elemCompat >= 55) {
        analyses.push(`${elementNames[sign1.element]} и ${elementNames[sign2.element]} могут найти общий язык при взаимном уважении различий.`);
    } else {
        analyses.push(`Стихии ${elementNames[sign1.element]} и ${elementNames[sign2.element]} создают напряжение, которое может стать источником страсти или конфликтов.`);
    }

    return analyses.join(' ');
}

// Get recommendations based on compatibility
function getRecommendations(totalScore, sign1, sign2, lifePath1, lifePath2) {
    const recommendations = [];

    if (totalScore >= 80) {
        recommendations.push('Развивайте общие интересы и проекты');
        recommendations.push('Не принимайте гармонию как должное - работайте над отношениями');
        recommendations.push('Используйте вашу связь для духовного роста');
    } else if (totalScore >= 60) {
        recommendations.push('Уважайте различия друг друга');
        recommendations.push('Находите компромиссы в спорных вопросах');
        recommendations.push('Регулярно обсуждайте ваши чувства и ожидания');
    } else {
        recommendations.push('Работайте над терпением и принятием');
        recommendations.push('Фокусируйтесь на положительных качествах партнёра');
        recommendations.push('Рассмотрите парную терапию или консультации');
    }

    // Element-specific advice
    if (sign1.element === 'fire' || sign2.element === 'fire') {
        recommendations.push('Учитесь контролировать вспыльчивость');
    }
    if (sign1.element === 'water' || sign2.element === 'water') {
        recommendations.push('Создавайте эмоционально безопасное пространство');
    }

    return recommendations.slice(0, 4);
}

// Calculate total compatibility
function calculateCompatibility(person1, person2) {
    const lifePath1 = calculateLifePathNumber(person1.date);
    const lifePath2 = calculateLifePathNumber(person2.date);
    const nameNum1 = calculateNameNumber(person1.name);
    const nameNum2 = calculateNameNumber(person2.name);
    const sign1 = getZodiacSign(person1.date);
    const sign2 = getZodiacSign(person2.date);

    // Calculate component scores
    const lifePathScore = getNumerologyCompatibility(lifePath1, lifePath2);
    const nameScore = getNumerologyCompatibility(nameNum1, nameNum2);
    const elementScore = getElementCompatibility(sign1.element, sign2.element);

    // Weighted average (life path 40%, element 35%, name 25%)
    const totalScore = Math.round(
        lifePathScore * 0.4 +
        elementScore * 0.35 +
        nameScore * 0.25
    );

    return {
        totalScore,
        lifePath1,
        lifePath2,
        nameNum1,
        nameNum2,
        sign1,
        sign2,
        lifePathScore,
        nameScore,
        elementScore,
        analysis: getPairAnalysis(lifePath1, lifePath2, nameNum1, nameNum2, sign1, sign2),
        recommendations: getRecommendations(totalScore, sign1, sign2, lifePath1, lifePath2)
    };
}

// Display results
function displayResults(result, person1, person2) {
    const resultSection = document.getElementById('result');
    const scoreValue = document.getElementById('score-value');
    const numerologyDetails = document.getElementById('numerology-details');
    const astrologyDetails = document.getElementById('astrology-details');
    const analysisText = document.getElementById('analysis-text');
    const recommendationsText = document.getElementById('recommendations-text');

    // Animate score
    let currentScore = 0;
    const targetScore = result.totalScore;
    const scoreInterval = setInterval(() => {
        currentScore += 2;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(scoreInterval);
        }
        scoreValue.textContent = currentScore;
    }, 20);

    // Numerology details
    numerologyDetails.innerHTML = `
        <p><span class="value">${person1.name}</span></p>
        <p>Число судьбы: <span class="value">${result.lifePath1}</span></p>
        <p>Число имени: <span class="value">${result.nameNum1}</span></p>
        <p style="margin-top: 10px;"><span class="value">${person2.name}</span></p>
        <p>Число судьбы: <span class="value">${result.lifePath2}</span></p>
        <p>Число имени: <span class="value">${result.nameNum2}</span></p>
        <p style="margin-top: 10px; font-size: 0.8rem;">Совместимость чисел: <span class="value">${result.lifePathScore}%</span></p>
    `;

    // Astrology details
    astrologyDetails.innerHTML = `
        <p><span class="zodiac-emoji">${result.sign1.emoji}</span> <span class="value">${person1.name}</span></p>
        <p>${result.sign1.name} (${elementNames[result.sign1.element]})</p>
        <p style="margin-top: 10px;"><span class="zodiac-emoji">${result.sign2.emoji}</span> <span class="value">${person2.name}</span></p>
        <p>${result.sign2.name} (${elementNames[result.sign2.element]})</p>
        <p style="margin-top: 10px; font-size: 0.8rem;">Совместимость стихий: <span class="value">${result.elementScore}%</span></p>
    `;

    // Analysis
    analysisText.innerHTML = `<p>${result.analysis}</p>`;

    // Recommendations
    recommendationsText.innerHTML = `
        <ul>
            ${result.recommendations.map(r => `<li>${r}</li>`).join('')}
        </ul>
    `;

    // Show results
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Reset form
function resetForm() {
    document.getElementById('compatibility-form').reset();
    document.getElementById('result').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form submission handler
document.getElementById('compatibility-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const person1 = {
        name: document.getElementById('name1').value.trim(),
        date: document.getElementById('date1').value
    };

    const person2 = {
        name: document.getElementById('name2').value.trim(),
        date: document.getElementById('date2').value
    };

    if (!person1.name || !person1.date || !person2.name || !person2.date) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const result = calculateCompatibility(person1, person2);
    displayResults(result, person1, person2);

    // Send result to Telegram if available
    if (tg && tg.sendData) {
        const data = JSON.stringify({
            person1: person1.name,
            person2: person2.name,
            score: result.totalScore
        });
        // Uncomment to send data back to bot
        // tg.sendData(data);
    }
});

// Make resetForm available globally
window.resetForm = resetForm;
