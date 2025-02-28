const translations = {
    en: {
        subtitle: "External Cheat for CS2", // Новый ключ
        features: "Features",
        download: "Download",
        aimbot: "Aimbot",
        aimbotText: "Precision aiming with advanced targeting algorithms.",
        wallhack: "Wallhack",
        wallhackText: "See through walls and gain a tactical advantage.",
        triggerbot: "Triggerbot",
        triggerbotText: "Automatically shoot when the crosshair is on an enemy.",
        downloadText: "Get started with Moon today and dominate the game.",
        downloadButton: "Download Now",
        footerText: "© 2025 Moon. All rights reserved.",
        navFeatures: "Features",
        navDownload: "Download",
        telegramText: "Telegram"
    },
    ru: {
        subtitle: "Внешний чит для CS2", // Перевод
        features: "Возможности",
        download: "Скачать",
        aimbot: "Aimbot",
        aimbotText: "Точное наведение с продвинутыми алгоритмами.",
        wallhack: "Wallhack",
        wallhackText: "Видите сквозь стены и получайте тактическое преимущество.",
        triggerbot: "Triggerbot",
        triggerbotText: "Автоматическая стрельба при наведении на врага.",
        downloadText: "Начните использовать Moon сегодня и сияйте в игре.",
        downloadButton: "Скачать сейчас",
        footerText: "© 2025 Moon. Все права защищены.",
        navFeatures: "Возможности",
        navDownload: "Скачать",
        telegramText: "Телеграм"
    }
};

function changeLanguage(lang) {
    // Обновляем текст на странице
    document.getElementById('subtitle').textContent = translations[lang].subtitle; // Обновляем подзаголовок
    document.getElementById('features-heading').textContent = translations[lang].features;
    document.getElementById('download-heading').textContent = translations[lang].download;
    document.getElementById('aimbot-heading').textContent = translations[lang].aimbot;
    document.getElementById('aimbot-text').textContent = translations[lang].aimbotText;
    document.getElementById('wallhack-heading').textContent = translations[lang].wallhack;
    document.getElementById('wallhack-text').textContent = translations[lang].wallhackText;
    document.getElementById('triggerbot-heading').textContent = translations[lang].triggerbot;
    document.getElementById('triggerbot-text').textContent = translations[lang].triggerbotText;
    document.getElementById('download-text').textContent = translations[lang].downloadText;
    document.getElementById('download-button').textContent = translations[lang].downloadButton;
    document.getElementById('footer-text').textContent = translations[lang].footerText;

    // Обновляем текст в навигации
    document.getElementById('nav-features').textContent = translations[lang].navFeatures;
    document.getElementById('nav-download').textContent = translations[lang].navDownload;
    document.getElementById('telegram-text').textContent = translations[lang].telegramText;
}

// Обработчик для переключателя языка
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        this.classList.add('active');
        // Меняем язык
        const selectedLanguage = this.getAttribute('data-lang');
        changeLanguage(selectedLanguage);
    });
});