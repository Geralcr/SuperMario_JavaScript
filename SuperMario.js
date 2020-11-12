let lienzo = document.getElementById("Background");
let contextoLienzo = lienzo.getContext("2d");
let faceLuigi = document.getElementById("luigi");
let faceMario = document.getElementById("mario");
let checkCharacter = false;
let fondo = {
    url: "backgroung.png",
    loadCheck: false
}
let coin = {
    url: "coin2.png",
    loadCheck: false
}
let live = {
    url: "heart2.png",
    loadCheck: false
}
let mario = {
    url: "mario2.png",
    loadCheck: false
}
let luigi = {
    url: "luigi2.png",
    loadCheck: false
}
const arrowKeys =
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
let geral = false;
faceLuigi.addEventListener('mousedown', drawFaceLuigi);
faceMario.addEventListener('mousedown', drawFaceMario);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', drawBackground);

coin.imagen = new Image();
coin.imagen.src = coin.url;
coin.imagen.addEventListener('load', drawBackground);

live.imagen = new Image();
live.imagen.src = live.url;
live.imagen.addEventListener('load', drawBackground);

mario.imagen = new Image();
mario.imagen.addEventListener('load', drawMario);
mario.imagen.src = mario.url;

luigi.imagen = new Image();
luigi.imagen.addEventListener('load', drawLuigi);
luigi.imagen.src = luigi.url;

function drawBackground() {
    fondo.loadCheck = true;
    coin.loadCheck = true;
    live.loadCheck = true;
    if (fondo.loadCheck) {
        contextoLienzo.drawImage(fondo.imagen, 0, 0);
    }
    if (coin.loadCheck) {
        contextoLienzo.drawImage(coin.imagen, 0, 0);
    }
    if (live.loadCheck) {
        contextoLienzo.drawImage(live.imagen, 0, 50);
    }
    if (mario.loadCheck) {
        contextoLienzo.drawImage(mario.imagen, 0, 308);
    }
    if (luigi.loadCheck) {
        contextoLienzo.drawImage(luigi.imagen, 30, 299);
    }
}

function drawLuigi() {
    luigi.loadCheck = true;
    drawBackground();
}

function drawMario() {
    mario.loadCheck = true;
    drawBackground();
}

function drawFaceLuigi(eventoluigi) {
    if (!checkCharacter) {
        faceMario.parentNode.removeChild(faceMario);
    }
    faceMario.removeEventListener('mousedown', drawFaceMario);
    document.getElementById('name').innerHTML = "LUIGI";
    //mario.imagen.addEventListener('load', drawMario);
    checkCharacter = true;
}

function drawFaceMario(eventomario) {
    if (!checkCharacter) {
        faceLuigi.parentNode.removeChild(faceLuigi);
    }
    faceLuigi.removeEventListener('mousedown', drawFaceLuigi);
    document.getElementById('name').innerHTML = "MARIO";
    //luigi.imagen.addEventListener('load', drawLuigi);
    checkCharacter = true;
}

