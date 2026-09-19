const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.45;


/* =========================================
   ПОПЫТКА ЗАПУСТИТЬ МУЗЫКУ СРАЗУ
========================================= */

function tryStartMusic() {

    music.play()
        .then(() => {

            // Музыка действительно запустилась
            musicButton.classList.remove("paused");

        })
        .catch(() => {

            // Браузер заблокировал autoplay
            musicButton.classList.add("paused");

        });

}


/* =========================================
   ПРИ ОТКРЫТИИ САЙТА
========================================= */

window.addEventListener("load", () => {

    tryStartMusic();

});


/* =========================================
   ЕСЛИ AUTOPLAY ЗАБЛОКИРОВАН
   ЗАПУСКАЕМ ПРИ ПЕРВОМ ДЕЙСТВИИ
========================================= */

function userInteraction() {

    if (music.paused) {

        music.play()
            .then(() => {

                musicButton.classList.remove("paused");

            })
            .catch(() => {});

    }

}


/* Клик */
document.addEventListener(
    "click",
    userInteraction,
    { once: true }
);


/* Телефон */
document.addEventListener(
    "touchstart",
    userInteraction,
    { once: true }
);


/* =========================================
   КНОПКА МУЗЫКИ
   ТОЛЬКО PLAY / PAUSE
========================================= */

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