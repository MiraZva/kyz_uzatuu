/* =========================================================
   МУЗЫКА
========================================================= */

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;


/* =========================================================
   ВКЛЮЧЕНИЕ МУЗЫКИ
========================================================= */

function startMusic() {

    if (musicStarted) {
        return;
    }

    music.volume = 0.45;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicStarted = true;

                musicButton.classList.remove("paused");

            })
            .catch(() => {

                /*
                    Браузер заблокировал autoplay.
                    Музыка включится после первого
                    клика / касания.
                */

                musicButton.classList.add("paused");

            });
    }
}


/* =========================================================
   ПЫТАЕМСЯ ВКЛЮЧИТЬ СРАЗУ
========================================================= */

window.addEventListener("load", () => {

    startMusic();

});


/* =========================================================
   ПЕРВОЕ ДЕЙСТВИЕ ПОЛЬЗОВАТЕЛЯ
========================================================= */

document.addEventListener(
    "click",
    () => {

        startMusic();

    },
    {
        once: true
    }
);


document.addEventListener(
    "touchstart",
    () => {

        startMusic();

    },
    {
        once: true
    }
);


/* =========================================================
   КНОПКА МУЗЫКИ
========================================================= */

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