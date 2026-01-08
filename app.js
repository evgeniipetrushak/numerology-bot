// Telegram WebApp initialization
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ==================== ДАННЫЕ ЗНАКОВ ЗОДИАКА ====================

const zodiacSigns = [
    {
        name: 'Козерог',
        emoji: '\u2651',
        element: 'earth',
        startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
        traits: ['Целеустремлённость', 'Практичность', 'Дисциплина', 'Ответственность', 'Терпение'],
        description: 'Козерог — знак амбиций и упорства. Стремится к вершинам, ценит стабильность и традиции.'
    },
    {
        name: 'Водолей',
        emoji: '\u2652',
        element: 'air',
        startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
        traits: ['Оригинальность', 'Независимость', 'Интеллект', 'Гуманизм', 'Новаторство'],
        description: 'Водолей — знак свободы и прогресса. Мыслит нестандартно, ценит дружбу и справедливость.'
    },
    {
        name: 'Рыбы',
        emoji: '\u2653',
        element: 'water',
        startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
        traits: ['Интуиция', 'Эмпатия', 'Творчество', 'Мечтательность', 'Сострадание'],
        description: 'Рыбы — знак глубины и духовности. Чувствительны, романтичны, живут в мире эмоций.'
    },
    {
        name: 'Овен',
        emoji: '\u2648',
        element: 'fire',
        startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
        traits: ['Энергичность', 'Смелость', 'Лидерство', 'Импульсивность', 'Страстность'],
        description: 'Овен — знак первопроходцев. Энергичен, решителен, любит быть первым во всём.'
    },
    {
        name: 'Телец',
        emoji: '\u2649',
        element: 'earth',
        startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
        traits: ['Надёжность', 'Терпение', 'Чувственность', 'Упрямство', 'Практичность'],
        description: 'Телец — знак стабильности и комфорта. Ценит красоту, качество и материальные блага.'
    },
    {
        name: 'Близнецы',
        emoji: '\u264A',
        element: 'air',
        startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
        traits: ['Общительность', 'Любознательность', 'Остроумие', 'Адаптивность', 'Переменчивость'],
        description: 'Близнецы — знак коммуникации. Интеллектуальны, общительны, любят разнообразие.'
    },
    {
        name: 'Рак',
        emoji: '\u264B',
        element: 'water',
        startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
        traits: ['Заботливость', 'Эмоциональность', 'Верность', 'Интуиция', 'Домашность'],
        description: 'Рак — знак семьи и дома. Глубоко чувствующий, заботливый, привязан к близким.'
    },
    {
        name: 'Лев',
        emoji: '\u264C',
        element: 'fire',
        startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
        traits: ['Харизма', 'Щедрость', 'Творчество', 'Гордость', 'Лидерство'],
        description: 'Лев — знак царственности. Яркий, уверенный, любит внимание и восхищение.'
    },
    {
        name: 'Дева',
        emoji: '\u264D',
        element: 'earth',
        startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
        traits: ['Аналитичность', 'Внимание к деталям', 'Скромность', 'Практичность', 'Перфекционизм'],
        description: 'Дева — знак совершенства. Внимательна к мелочам, стремится к порядку и чистоте.'
    },
    {
        name: 'Весы',
        emoji: '\u264E',
        element: 'air',
        startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
        traits: ['Дипломатичность', 'Гармония', 'Эстетизм', 'Партнёрство', 'Нерешительность'],
        description: 'Весы — знак баланса и красоты. Стремятся к гармонии, ценят отношения и справедливость.'
    },
    {
        name: 'Скорпион',
        emoji: '\u264F',
        element: 'water',
        startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
        traits: ['Страстность', 'Интенсивность', 'Проницательность', 'Магнетизм', 'Скрытность'],
        description: 'Скорпион — знак трансформации. Глубокий, страстный, способен на полное перерождение.'
    },
    {
        name: 'Стрелец',
        emoji: '\u2650',
        element: 'fire',
        startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
        traits: ['Оптимизм', 'Свободолюбие', 'Философичность', 'Авантюризм', 'Прямолинейность'],
        description: 'Стрелец — знак путешествий и философии. Оптимистичен, любит свободу и новые горизонты.'
    }
];

// Названия стихий
const elementNames = {
    fire: 'Огонь',
    earth: 'Земля',
    air: 'Воздух',
    water: 'Вода'
};

const elementEmojis = {
    fire: '\uD83D\uDD25',
    earth: '\uD83C\uDF3F',
    air: '\uD83D\uDCA8',
    water: '\uD83D\uDCA7'
};

// ==================== СОВМЕСТИМОСТЬ СТИХИЙ ====================

const elementCompatibilityData = {
    'fire-fire': {
        score: 85,
        description: 'Два огненных знака создают яркий и страстный союз. Много энергии, драйва и взаимного восхищения.',
        strengths: [
            'Взаимное понимание потребности в свободе',
            'Страстные и яркие отношения',
            'Общая любовь к приключениям',
            'Поддержка амбиций друг друга',
            'Высокая энергетика пары'
        ],
        challenges: [
            'Борьба за лидерство',
            'Бурные конфликты из-за вспыльчивости',
            'Конкуренция вместо сотрудничества',
            'Недостаток терпения друг к другу'
        ]
    },
    'fire-earth': {
        score: 50,
        description: 'Огонь и Земля — сложное сочетание. Огонь может иссушить землю, а земля — погасить огонь.',
        strengths: [
            'Земля даёт стабильность, огонь — вдохновение',
            'Баланс между действием и планированием',
            'Огонь мотивирует, земля воплощает'
        ],
        challenges: [
            'Разный темп жизни',
            'Огню скучно, земле тревожно',
            'Конфликт между стабильностью и переменами',
            'Непонимание приоритетов друг друга'
        ]
    },
    'fire-air': {
        score: 90,
        description: 'Идеальное сочетание! Воздух раздувает пламя, делая его ярче. Интеллект встречает страсть.',
        strengths: [
            'Отличная коммуникация',
            'Взаимное вдохновение',
            'Много общих интересов',
            'Поддержка идей друг друга',
            'Лёгкость и свобода в отношениях'
        ],
        challenges: [
            'Оба могут избегать глубоких эмоций',
            'Недостаток практичности',
            'Воздух может быть слишком отстранённым для огня'
        ]
    },
    'fire-water': {
        score: 45,
        description: 'Огонь и Вода — противоположности. Вода тушит огонь, пар обжигает. Требуется много работы.',
        strengths: [
            'Страсть огня и глубина воды',
            'Взаимное притяжение противоположностей',
            'Возможность научиться у партнёра новому'
        ],
        challenges: [
            'Эмоциональное непонимание',
            'Огонь кажется грубым, вода — слишком чувствительной',
            'Разные способы выражения любви',
            'Частые обиды и недомолвки'
        ]
    },
    'earth-earth': {
        score: 80,
        description: 'Два земных знака строят прочный фундамент. Стабильность, надёжность, общие ценности.',
        strengths: [
            'Общее стремление к стабильности',
            'Практичный подход к жизни',
            'Надёжность и верность',
            'Материальное благополучие',
            'Понимание важности традиций'
        ],
        challenges: [
            'Может не хватать спонтанности',
            'Рутина и скука',
            'Упрямство с обеих сторон',
            'Сложности с выражением эмоций'
        ]
    },
    'earth-air': {
        score: 55,
        description: 'Земля и Воздух — разные миры. Земля приземляет воздух, воздух расшатывает землю.',
        strengths: [
            'Воздух приносит новые идеи',
            'Земля помогает воплотить планы',
            'Интеллектуальное обогащение'
        ],
        challenges: [
            'Земле нужна стабильность, воздуху — перемены',
            'Разные приоритеты',
            'Воздух кажется поверхностным, земля — скучной',
            'Сложности с пониманием друг друга'
        ]
    },
    'earth-water': {
        score: 85,
        description: 'Прекрасное сочетание! Вода питает землю, земля даёт воде русло. Плодородный союз.',
        strengths: [
            'Глубокая эмоциональная связь',
            'Взаимная забота и поддержка',
            'Создание уютного дома',
            'Стабильность и безопасность',
            'Интуитивное понимание'
        ],
        challenges: [
            'Возможна чрезмерная замкнутость пары',
            'Медленное развитие отношений',
            'Избегание конфликтов вместо их решения'
        ]
    },
    'air-air': {
        score: 75,
        description: 'Два воздушных знака — это бесконечные разговоры, идеи и свобода. Интеллектуальный союз.',
        strengths: [
            'Великолепная коммуникация',
            'Общие интеллектуальные интересы',
            'Уважение к свободе друг друга',
            'Много общения и дружбы',
            'Лёгкость отношений'
        ],
        challenges: [
            'Может не хватать глубины чувств',
            'Оба избегают обязательств',
            'Непрактичность',
            'Поверхностность в эмоциях'
        ]
    },
    'air-water': {
        score: 50,
        description: 'Воздух и Вода — туман и непонимание. Разные языки любви, но возможен рост.',
        strengths: [
            'Воздух учит воду лёгкости',
            'Вода учит воздух глубине чувств',
            'Творческий потенциал союза'
        ],
        challenges: [
            'Воздух кажется холодным и отстранённым',
            'Вода кажется слишком эмоциональной',
            'Разные потребности в близости',
            'Недопонимание в коммуникации'
        ]
    },
    'water-water': {
        score: 90,
        description: 'Два водных знака создают океан эмоций. Глубочайшее понимание и духовная связь.',
        strengths: [
            'Интуитивное понимание без слов',
            'Глубокая эмоциональная связь',
            'Романтика и нежность',
            'Взаимная поддержка',
            'Духовное единение'
        ],
        challenges: [
            'Эмоциональные качели',
            'Оба слишком чувствительны к обидам',
            'Сложности с принятием решений',
            'Погружение в негатив вместе'
        ]
    }
};

// ==================== ДАННЫЕ НУМЕРОЛОГИИ ====================

const lifePathData = {
    1: {
        name: 'Единица',
        title: 'Лидер',
        traits: ['Лидерство', 'Независимость', 'Амбициозность', 'Новаторство', 'Решительность'],
        description: 'Прирождённый лидер с сильной волей. Стремится быть первым, не любит подчиняться. Инициативен и целеустремлён.'
    },
    2: {
        name: 'Двойка',
        title: 'Дипломат',
        traits: ['Дипломатичность', 'Чувствительность', 'Партнёрство', 'Интуиция', 'Миролюбие'],
        description: 'Миротворец и партнёр. Ценит гармонию, умеет слушать и понимать других. Лучше проявляется в паре.'
    },
    3: {
        name: 'Тройка',
        title: 'Творец',
        traits: ['Творчество', 'Общительность', 'Оптимизм', 'Самовыражение', 'Артистизм'],
        description: 'Творческая личность с даром слова. Обаятелен, весел, вдохновляет других. Любит быть в центре внимания.'
    },
    4: {
        name: 'Четвёрка',
        title: 'Строитель',
        traits: ['Практичность', 'Надёжность', 'Трудолюбие', 'Организованность', 'Стабильность'],
        description: 'Строитель и организатор. Создаёт прочный фундамент во всём. Надёжен, последователен, ценит порядок.'
    },
    5: {
        name: 'Пятёрка',
        title: 'Авантюрист',
        traits: ['Свобода', 'Перемены', 'Адаптивность', 'Любознательность', 'Энергичность'],
        description: 'Искатель приключений и свободы. Не терпит рутины, жаждет перемен и новых впечатлений.'
    },
    6: {
        name: 'Шестёрка',
        title: 'Хранитель',
        traits: ['Забота', 'Ответственность', 'Семейность', 'Гармония', 'Служение'],
        description: 'Хранитель семьи и гармонии. Заботится о близких, стремится создать уют и красоту вокруг себя.'
    },
    7: {
        name: 'Семёрка',
        title: 'Мыслитель',
        traits: ['Аналитичность', 'Духовность', 'Интроверсия', 'Мудрость', 'Исследование'],
        description: 'Философ и искатель истины. Склонен к анализу, интроспекции. Нуждается в уединении для размышлений.'
    },
    8: {
        name: 'Восьмёрка',
        title: 'Властелин',
        traits: ['Амбициозность', 'Власть', 'Материальный успех', 'Сила воли', 'Организаторский талант'],
        description: 'Прирождённый руководитель с деловой хваткой. Стремится к власти и материальному достатку.'
    },
    9: {
        name: 'Девятка',
        title: 'Гуманист',
        traits: ['Гуманизм', 'Мудрость', 'Сострадание', 'Идеализм', 'Творчество'],
        description: 'Мудрец и гуманист. Думает о благе человечества, обладает широким видением и состраданием.'
    },
    11: {
        name: 'Мастер-число 11',
        title: 'Визионер',
        traits: ['Интуиция', 'Вдохновение', 'Духовность', 'Харизма', 'Чувствительность'],
        description: 'Духовный учитель с мощной интуицией. Способен вдохновлять массы, видит то, что скрыто от других.'
    },
    22: {
        name: 'Мастер-число 22',
        title: 'Архитектор',
        traits: ['Масштабное видение', 'Практичность', 'Созидание', 'Лидерство', 'Дисциплина'],
        description: 'Великий строитель. Способен воплощать грандиозные замыслы в реальность, менять мир.'
    },
    33: {
        name: 'Мастер-число 33',
        title: 'Учитель',
        traits: ['Самоотверженность', 'Мудрость', 'Исцеление', 'Любовь', 'Духовное служение'],
        description: 'Мастер духовного служения. Посвящает жизнь помощи другим, несёт свет и исцеление.'
    }
};

// Совместимость чисел
const numberCompatibilityData = {
    '1-1': { score: 65, description: 'Два лидера — борьба за власть неизбежна, но при уважении границ возможен мощный союз.' },
    '1-2': { score: 80, description: 'Отличное сочетание: единица ведёт, двойка поддерживает. Баланс силы и дипломатии.' },
    '1-3': { score: 85, description: 'Яркий творческий союз. Единица вдохновляет действием, тройка — творчеством.' },
    '1-4': { score: 60, description: 'Сложное сочетание: единица рвётся вперёд, четвёрка строит планы. Требуется терпение.' },
    '1-5': { score: 75, description: 'Динамичная пара авантюристов. Много энергии и приключений, но мало стабильности.' },
    '1-6': { score: 70, description: 'Единица получает заботу, шестёрка — защиту. Важно ценить вклад друг друга.' },
    '1-7': { score: 55, description: 'Разные миры: действие vs размышление. Могут многому научить друг друга.' },
    '1-8': { score: 85, description: 'Два властных числа создают империю. Бизнес-партнёрство и уважение силы друг друга.' },
    '1-9': { score: 70, description: 'Единица действует, девятка направляет к высшей цели. Союз лидера и мудреца.' },
    '2-2': { score: 75, description: 'Гармоничная пара, но может не хватать инициативы. Оба ждут первого шага от другого.' },
    '2-3': { score: 85, description: 'Прекрасный творческий союз. Тройка вдохновляет, двойка поддерживает.' },
    '2-4': { score: 80, description: 'Стабильность и надёжность. Оба ценят безопасность и строят крепкие отношения.' },
    '2-5': { score: 50, description: 'Сложно: двойке нужна стабильность, пятёрке — свобода. Компромисс или расставание.' },
    '2-6': { score: 95, description: 'Идеальная пара! Взаимная забота, гармония, семейные ценности. Созданы друг для друга.' },
    '2-7': { score: 70, description: 'Тихий глубокий союз. Оба ценят уединение и духовную связь.' },
    '2-8': { score: 75, description: 'Восьмёрка зарабатывает, двойка создаёт уют. Традиционное распределение ролей.' },
    '2-9': { score: 80, description: 'Гуманитарный союз. Оба стремятся помогать другим и делать мир лучше.' },
    '3-3': { score: 80, description: 'Творческий хаос! Много веселья, но кто будет решать практические вопросы?' },
    '3-4': { score: 55, description: 'Сложно: тройке скучно, четвёрке тревожно. Творчество vs стабильность.' },
    '3-5': { score: 90, description: 'Искромётная пара! Бесконечные приключения, творчество, оптимизм.' },
    '3-6': { score: 85, description: 'Творчество и гармония. Тройка вдохновляет, шестёрка заботится.' },
    '3-7': { score: 60, description: 'Поверхность vs глубина. Тройке весело, семёрке нужен смысл.' },
    '3-8': { score: 70, description: 'Тройка — творчество, восьмёрка — бизнес. Могут построить успешное дело.' },
    '3-9': { score: 95, description: 'Творческий идеализм! Оба мечтатели, вдохновляют друг друга на великие дела.' },
    '4-4': { score: 70, description: 'Прочно, но скучно. Два строителя создают крепость, но забывают о романтике.' },
    '4-5': { score: 40, description: 'Очень сложно: стабильность vs перемены. Один из самых трудных союзов.' },
    '4-6': { score: 85, description: 'Отличный семейный союз. Практичность и забота создают крепкий дом.' },
    '4-7': { score: 75, description: 'Два интроверта ценят тишину и глубину. Уважение личного пространства.' },
    '4-8': { score: 90, description: 'Бизнес-империя! Оба практичны, амбициозны, строят на века.' },
    '4-9': { score: 55, description: 'Материальное vs духовное. Четвёрка приземляет, девятка возвышает.' },
    '5-5': { score: 70, description: 'Приключения без конца! Весело, но кто будет платить по счетам?' },
    '5-6': { score: 55, description: 'Свобода vs ответственность. Пятёрка рвётся на волю, шестёрка держит дома.' },
    '5-7': { score: 65, description: 'Оба ценят свободу, но по-разному. Интересный союз искателей.' },
    '5-8': { score: 70, description: 'Динамичный союз. Восьмёрка направляет энергию пятёрки в нужное русло.' },
    '5-9': { score: 80, description: 'Путешественники по миру и по жизни. Много приключений и смысла.' },
    '6-6': { score: 80, description: 'Двойная забота! Идеальная семья, но важно не забывать о себе.' },
    '6-7': { score: 60, description: 'Забота vs уединение. Шестёрка хочет близости, семёрке нужно пространство.' },
    '6-8': { score: 75, description: 'Семья и бизнес. Хороший баланс заботы и амбиций.' },
    '6-9': { score: 90, description: 'Гуманитарный союз! Оба хотят сделать мир лучше, начиная с семьи.' },
    '7-7': { score: 80, description: 'Два философа в поисках истины. Глубокий союз, но может не хватать действия.' },
    '7-8': { score: 55, description: 'Духовное vs материальное. Разные ценности, но возможен баланс.' },
    '7-9': { score: 85, description: 'Духовный союз мыслителей. Глубокие разговоры и взаимное обогащение.' },
    '8-8': { score: 75, description: 'Два магната! Огромный потенциал, но кто главный?' },
    '8-9': { score: 65, description: 'Материализм vs идеализм. Восьмёрка строит, девятка мечтает о большем.' },
    '9-9': { score: 85, description: 'Два мудреца. Высокие идеалы, взаимопонимание, духовная связь.' }
};

// Буквенные значения для русского и английского алфавитов
const letterValues = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9,
    'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9,
    'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9,
    'ъ': 1, 'ы': 2, 'ь': 3, 'э': 4, 'ю': 5, 'я': 6,
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
};

// ==================== ФУНКЦИИ РАСЧЁТА ====================

function getDateDigits(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return (day + month + year).split('').map(Number);
}

function calculateLifePathWithSteps(dateStr) {
    const digits = getDateDigits(dateStr);
    const sum = digits.reduce((a, b) => a + b, 0);
    const formula = digits.join(' + ') + ' = ' + sum;

    let result = sum;
    let steps = [formula];

    while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
        const newDigits = String(result).split('').map(Number);
        const newSum = newDigits.reduce((a, b) => a + b, 0);
        steps.push(newDigits.join(' + ') + ' = ' + newSum);
        result = newSum;
    }

    return { number: result, steps: steps };
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getZodiacSign(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    for (const sign of zodiacSigns) {
        if (sign.startMonth === 12 && sign.endMonth === 1) {
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
    return zodiacSigns[0];
}

function getElementCompatibility(el1, el2) {
    const key1 = `${el1}-${el2}`;
    const key2 = `${el2}-${el1}`;
    return elementCompatibilityData[key1] || elementCompatibilityData[key2];
}

function getNumberCompatibility(n1, n2) {
    const num1 = n1 > 9 ? (n1 % 9 || 9) : n1;
    const num2 = n2 > 9 ? (n2 % 9 || 9) : n2;
    const key = num1 <= num2 ? `${num1}-${num2}` : `${num2}-${num1}`;
    return numberCompatibilityData[key] || { score: 70, description: 'Нейтральная совместимость.' };
}

function getScoreLabel(score) {
    if (score >= 85) return 'Отличная совместимость';
    if (score >= 70) return 'Хорошая совместимость';
    if (score >= 55) return 'Средняя совместимость';
    return 'Требует работы';
}

function getScoreClass(score) {
    if (score >= 70) return 'compat-high';
    if (score >= 55) return 'compat-medium';
    return 'compat-low';
}

// ==================== ГЕНЕРАЦИЯ ПЛЮСОВ И МИНУСОВ ====================

function generateProsAndCons(result) {
    const pros = [];
    const cons = [];

    const elemCompat = result.elementCompatibility;
    const numCompat = result.numberCompatibility;

    // Плюсы из стихий
    if (elemCompat.strengths) {
        pros.push(...elemCompat.strengths.slice(0, 3));
    }

    // Плюсы из чисел
    if (numCompat.score >= 70) {
        pros.push('Числа судьбы гармонично дополняют друг друга');
    }
    if (result.sign1.element === result.sign2.element) {
        pros.push('Одна стихия — глубокое взаимопонимание');
    }

    // Минусы из стихий
    if (elemCompat.challenges) {
        cons.push(...elemCompat.challenges.slice(0, 3));
    }

    // Минусы из чисел
    if (numCompat.score < 60) {
        cons.push('Разные жизненные приоритеты по нумерологии');
    }

    return { pros, cons };
}

// ==================== ГЕНЕРАЦИЯ РЕКОМЕНДАЦИЙ ====================

function generateRecommendations(result) {
    const recs = [];
    const score = result.totalScore;
    const elem1 = result.sign1.element;
    const elem2 = result.sign2.element;

    if (score >= 80) {
        recs.push('Развивайте общие интересы и совместные проекты');
        recs.push('Не воспринимайте гармонию как данность — продолжайте работать над отношениями');
    } else if (score >= 60) {
        recs.push('Учитесь принимать различия друг друга как ресурс');
        recs.push('Регулярно обсуждайте чувства и ожидания');
        recs.push('Ищите компромиссы в спорных вопросах');
    } else {
        recs.push('Работайте над терпением и принятием');
        recs.push('Фокусируйтесь на положительных качествах партнёра');
        recs.push('Рассмотрите совместную работу с психологом');
    }

    // Рекомендации по стихиям
    if (elem1 === 'fire' || elem2 === 'fire') {
        recs.push('Учитесь контролировать вспыльчивость, берите паузу в конфликтах');
    }
    if (elem1 === 'water' || elem2 === 'water') {
        recs.push('Создавайте эмоционально безопасное пространство для откровенности');
    }
    if (elem1 === 'earth' || elem2 === 'earth') {
        recs.push('Не забывайте о романтике и спонтанности');
    }
    if (elem1 === 'air' || elem2 === 'air') {
        recs.push('Практикуйте глубокое эмоциональное общение');
    }

    return recs.slice(0, 5);
}

// ==================== ГЕНЕРАЦИЯ ВЫВОДА ====================

function generateConclusion(result, person1, person2) {
    const score = result.totalScore;
    const astroScore = result.elementCompatibility.score;
    const numScore = result.numberCompatibility.score;

    let verdict = '';
    if (score >= 85) {
        verdict = 'Прекрасный союз с высоким потенциалом!';
    } else if (score >= 70) {
        verdict = 'Хорошая пара с перспективами развития.';
    } else if (score >= 55) {
        verdict = 'Союз возможен при взаимной работе над отношениями.';
    } else {
        verdict = 'Сложный союз, требующий серьёзных усилий с обеих сторон.';
    }

    const analysis = `${result.sign1.name} и ${result.sign2.name} — это сочетание стихий ${elementNames[result.sign1.element]} и ${elementNames[result.sign2.element]}. ${result.elementCompatibility.description} Нумерологически ${person1.name} (число ${result.lifePath1.number}) и ${person2.name} (число ${result.lifePath2.number}) ${numScore >= 70 ? 'хорошо дополняют друг друга' : 'имеют разные приоритеты в жизни'}.`;

    return { analysis, verdict, astroScore, numScore };
}

// ==================== ГЛАВНАЯ ФУНКЦИЯ РАСЧЁТА ====================

function calculateCompatibility(person1, person2) {
    const lifePath1 = calculateLifePathWithSteps(person1.date);
    const lifePath2 = calculateLifePathWithSteps(person2.date);
    const sign1 = getZodiacSign(person1.date);
    const sign2 = getZodiacSign(person2.date);

    const elementCompatibility = getElementCompatibility(sign1.element, sign2.element);
    const numberCompatibility = getNumberCompatibility(lifePath1.number, lifePath2.number);

    // Средняя оценка: 50% астрология, 50% нумерология
    const totalScore = Math.round((elementCompatibility.score + numberCompatibility.score) / 2);

    return {
        lifePath1,
        lifePath2,
        sign1,
        sign2,
        elementCompatibility,
        numberCompatibility,
        totalScore
    };
}

// ==================== ОТОБРАЖЕНИЕ РЕЗУЛЬТАТОВ ====================

function displayResults(result, person1, person2) {
    // Общий счёт
    const scoreValue = document.getElementById('score-value');
    const scoreLabel = document.getElementById('score-label');

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

    scoreLabel.textContent = getScoreLabel(result.totalScore);

    // Нумерология - Партнёр 1
    const num1Data = lifePathData[result.lifePath1.number] || lifePathData[result.lifePath1.number % 9 || 9];
    document.getElementById('person1-numerology').innerHTML = `
        <div class="person-name">${person1.name} (${formatDate(person1.date)})</div>
        <div class="calculation-steps">
            <strong>Расчёт числа судьбы:</strong><br>
            ${result.lifePath1.steps.join('<br>')}
        </div>
        <div class="number-result">Число судьбы: ${result.lifePath1.number} — ${num1Data.title}</div>
        <div class="number-meaning">${num1Data.description}</div>
        <div class="number-traits">
            ${num1Data.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
        </div>
    `;

    // Нумерология - Партнёр 2
    const num2Data = lifePathData[result.lifePath2.number] || lifePathData[result.lifePath2.number % 9 || 9];
    document.getElementById('person2-numerology').innerHTML = `
        <div class="person-name">${person2.name} (${formatDate(person2.date)})</div>
        <div class="calculation-steps">
            <strong>Расчёт числа судьбы:</strong><br>
            ${result.lifePath2.steps.join('<br>')}
        </div>
        <div class="number-result">Число судьбы: ${result.lifePath2.number} — ${num2Data.title}</div>
        <div class="number-meaning">${num2Data.description}</div>
        <div class="number-traits">
            ${num2Data.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
        </div>
    `;

    // Совместимость чисел
    const numCompat = result.numberCompatibility;
    document.getElementById('numerology-compatibility').innerHTML = `
        <div class="compat-score ${getScoreClass(numCompat.score)}">
            Совместимость: ${numCompat.score}%
        </div>
        <div class="compat-description">${numCompat.description}</div>
    `;

    // Астрология - Партнёр 1
    document.getElementById('person1-astrology').innerHTML = `
        <div class="person-name">${person1.name}</div>
        <div class="zodiac-display">
            <span class="zodiac-symbol">${result.sign1.emoji}</span>
            <div class="zodiac-info">
                <h4>${result.sign1.name}</h4>
                <span class="element-badge element-${result.sign1.element}">
                    ${elementEmojis[result.sign1.element]} ${elementNames[result.sign1.element]}
                </span>
            </div>
        </div>
        <div class="zodiac-description">${result.sign1.description}</div>
        <div class="number-traits">
            ${result.sign1.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
        </div>
    `;

    // Астрология - Партнёр 2
    document.getElementById('person2-astrology').innerHTML = `
        <div class="person-name">${person2.name}</div>
        <div class="zodiac-display">
            <span class="zodiac-symbol">${result.sign2.emoji}</span>
            <div class="zodiac-info">
                <h4>${result.sign2.name}</h4>
                <span class="element-badge element-${result.sign2.element}">
                    ${elementEmojis[result.sign2.element]} ${elementNames[result.sign2.element]}
                </span>
            </div>
        </div>
        <div class="zodiac-description">${result.sign2.description}</div>
        <div class="number-traits">
            ${result.sign2.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
        </div>
    `;

    // Совместимость знаков
    const elemCompat = result.elementCompatibility;
    document.getElementById('astrology-compatibility').innerHTML = `
        <div class="compat-score ${getScoreClass(elemCompat.score)}">
            Совместимость стихий: ${elemCompat.score}%
        </div>
        <div class="compat-description">${elemCompat.description}</div>
    `;

    // Сильные стороны
    document.getElementById('strengths-list').innerHTML = `
        <ul>${elemCompat.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
    `;

    // Возможные сложности
    document.getElementById('challenges-list').innerHTML = `
        <ul>${elemCompat.challenges.map(c => `<li>${c}</li>`).join('')}</ul>
    `;

    // Плюсы и минусы
    const { pros, cons } = generateProsAndCons(result);
    document.getElementById('pros-list').innerHTML = `<ul>${pros.map(p => `<li>${p}</li>`).join('')}</ul>`;
    document.getElementById('cons-list').innerHTML = `<ul>${cons.map(c => `<li>${c}</li>`).join('')}</ul>`;

    // Общий вывод
    const conclusion = generateConclusion(result, person1, person2);
    document.getElementById('conclusion-text').innerHTML = `
        <p>${conclusion.analysis}</p>
        <table style="width:100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 8px 0;">Астрологическая совместимость</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold;">${conclusion.astroScore}%</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 8px 0;">Нумерологическая совместимость</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold;">${conclusion.numScore}%</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold; color: var(--gold);">Общая оценка</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold; color: var(--gold);">${result.totalScore}%</td>
            </tr>
        </table>
        <div class="verdict">${conclusion.verdict}</div>
    `;

    // Рекомендации
    const recommendations = generateRecommendations(result);
    document.getElementById('recommendations-list').innerHTML = `
        <ul>${recommendations.map(r => `<li>${r}</li>`).join('')}</ul>
    `;

    // Показать результаты
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// ==================== ОБРАБОТЧИКИ ====================

function resetForm() {
    document.getElementById('compatibility-form').reset();
    document.getElementById('result').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
});

window.resetForm = resetForm;
