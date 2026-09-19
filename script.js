const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

// Громкость
music.volume = 0.5;


// =========================================
// ЗАПУСК / ПАУЗА
// =========================================

async function toggleMusic() {

    try {

        if (music.paused) {

            await music.play();

            isPlaying = true;

            musicButton.classList.remove("paused");

        } else {

            music.pause();

            isPlaying = false;

            musicButton.classList.add("paused");
        }

    } catch (error) {

        console.log("Ошибка воспроизведения:", error);

    }
}


// =========================================
// НАЖАТИЕ НА КНОПКУ МУЗЫКИ
// =========================================

musicButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    toggleMusic();

});


// =========================================
// СОСТОЯНИЕ МУЗЫКИ
// =========================================

music.addEventListener("play", () => {

    isPlaying = true;

    musicButton.classList.remove("paused");

});


music.addEventListener("pause", () => {

    isPlaying = false;

    musicButton.classList.add("paused");

});