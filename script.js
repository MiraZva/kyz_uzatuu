const music = document.getElementById("weddingMusic");

music.volume = 0.5;

let musicStarted = false;


/* =========================================
   ЗАПУСК МУЗЫКИ
========================================= */

function startMusic() {

    if (musicStarted) {
        return;
    }

    music.play()
        .then(() => {

            musicStarted = true;

            console.log("Музыка запущена");

        })
        .catch((error) => {

            console.log("Браузер пока не разрешил музыку");

        });

}


/* =========================================
   1. ПЫТАЕМСЯ ЗАПУСТИТЬ ПРИ ОТКРЫТИИ
========================================= */

window.addEventListener("load", () => {

    startMusic();

});


/* =========================================
   2. ПРИ СКРОЛЛЕ
========================================= */

window.addEventListener(
    "scroll",
    () => {

        startMusic();

    },
    { passive: true }
);


/* =========================================
   3. ПРИ ПЕРВОМ КАСАНИИ
========================================= */

document.addEventListener(
    "touchstart",
    () => {

        startMusic();

    },
    {
        passive: true,
        once: true
    }
);


/* =========================================
   4. ПРИ КЛИКЕ
========================================= */

document.addEventListener(
    "click",
    () => {

        startMusic();

    },
    {
        once: true
    }
);