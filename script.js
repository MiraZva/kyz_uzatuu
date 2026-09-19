const music = document.getElementById("weddingMusic");

let musicStarted = false;

music.volume = 0.5;

function startMusic() {
    if (musicStarted) return;

    const promise = music.play();

    if (promise !== undefined) {
        promise
            .then(() => {
                musicStarted = true;
                console.log("🎵 Музыка запущена");
            })
            .catch(() => {
                console.log("Музыка заблокирована браузером");
            });
    }
}

// 1. Пытаемся сразу при открытии
window.addEventListener("load", () => {
    startMusic();
});

// 2. При первом касании телефона
document.addEventListener(
    "touchstart",
    () => {
        startMusic();
    },
    { once: true, passive: true }
);

// 3. При первом нажатии
document.addEventListener(
    "pointerdown",
    () => {
        startMusic();
    },
    { once: true }
);

// 4. Дополнительная попытка при скролле
window.addEventListener(
    "scroll",
    () => {
        startMusic();
    },
    { passive: true }
);


