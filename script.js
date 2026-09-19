const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.45;

window.addEventListener("load", () => {
    music.play().catch(() => {
        // Если браузер заблокировал autoplay,
        // музыка запустится при первом касании/клике
    });
});

document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

document.addEventListener("touchstart", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

musicButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (music.paused) {
        music.play();
        musicButton.classList.remove("paused");
    } else {
        music.pause();
        musicButton.classList.add("paused");
    }
});
