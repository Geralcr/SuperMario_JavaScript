let lienzo = document.getElementById("Background");
let contextoCanva = lienzo.getContext("2d");
let faceLuigi = document.getElementById("luigi");
let faceMario = document.getElementById("mario");
let heartImageTwo = document.getElementById("doscorazon");
let checkCharacter = false;
let fondo = {
    url: "backgroung.png",
    loadCheck: false
}
let coin = {
    url: "coin2.png",
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
let enemy = {
    url: "enemy.png",
    loadCheck: false
}
const arrowKeys =
{
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
let initialPosition = {
    x: 0,
    y: 308
};
let numPixeles = 10;
let finalPositionX;
let finalPositionY;
let curCharacter;
let randomLocationX;
let randomLocationY;

faceLuigi.addEventListener('mousedown', selectCharacter);
faceMario.addEventListener('mousedown', selectCharacter);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', drawBackground);

coin.imagen = new Image();
coin.imagen.src = coin.url;
coin.imagen.addEventListener('load', getPositionCoin);

enemy.imagen = new Image();
enemy.imagen.src = enemy.url;
enemy.imagen.addEventListener('load', getPositionEnemy);

mario.imagen = new Image();
mario.imagen.addEventListener('load', drawMario);
mario.imagen.src = mario.url;

luigi.imagen = new Image();
luigi.imagen.addEventListener('load', drawLuigi);
luigi.imagen.src = luigi.url;

let Numeros = [];
Numeros["num2"] = "numTwo.png";
Numeros["num1"] = "numOne.png";
Numeros["num0"] = "numZero.png";

class Numbers {
    constructor(numero) {
        this.nameOfNum = numero
        this.imagen = new Image();
        this.imagen.src = Numeros[this.nameOfNum];
    }
    mostrarImagenNumero() {
        document.body.appendChild(this.imagen);
    }
}

let Num1 = new Numbers("num1");
let Num2 = new Numbers("num2");
let Num0 = new Numbers("num0");
document.addEventListener('keyup', PressIn);

let getPos = true;
let positionsCoin = [];
let positionsEnemy = [];

function drawBackground() {
    fondo.loadCheck = true;

    if (getPos) {
        for (let index = 0; index < 4; index++) {
            positionsCoin.push(getPositionCoin());
        }

        for (let index = 0; index < 2; index++) {
            positionsEnemy.push(getPositionEnemy());
        }

        getPos = false;
    }
    if (fondo.loadCheck) {
        contextoCanva.drawImage(fondo.imagen, 0, 0);
    }
    if (coin.loadCheck) {
        for (const positionCoin of positionsCoin) {
            contextoCanva.drawImage(coin.imagen, positionCoin.x, positionCoin.y);
        }
    }

    if (enemy.loadCheck) {
        for (const positionEnemy of positionsEnemy) {
            contextoCanva.drawImage(enemy.imagen, positionEnemy.x, positionEnemy.y);
        }
    }
    //console.log(positionsCoin[0]);
    //console.log(positionsCoin[1]);
    //console.log(positionsCoin[2]);
    //console.log(positionsCoin[3]);
    //console.log(positionsEnemy[0].x);
    //console.log(positionsEnemy[1].x);
}

function drawLive() {
    live.loadCheck = true;
}
function getPositionCoin() {
    coin.loadCheck = true;
    let positionCoin = {
        x: 0,
        y: 0
    };
    randomLocationY = aleatorio(1, 3);
    switch (randomLocationY) {
        case 1:
            positionCoin.y = 318;
            positionCoin.x = aleatorio(70, 700);
            break;
        case 2:
            positionCoin.y = 184;
            randomLocationX = aleatorio(1, 2);
            if (randomLocationX == 1) {
                positionCoin.x = aleatorio(150, 300)
            } else {
                positionCoin.x = aleatorio(480, 607);
            }
            break;
        case 3:
            positionCoin.y = 55;
            positionCoin.x = aleatorio(318, 543);
            break;

        default:
            break;
    }
    return positionCoin;
}

function getPositionEnemy() {
    enemy.loadCheck = true;
    let positionEnemy = {
        x: 0,
        y: 0
    };
    randomLocationY = aleatorio(1, 3);
    switch (randomLocationY) {
        case 1:
            positionEnemy.y = 328;
            positionEnemy.x = aleatorio(70, 700);
            break;
        case 2:
            positionEnemy.y = 194;
            randomLocationX = aleatorio(1, 2);
            if (randomLocationX == 1) {
                positionEnemy.x = aleatorio(150, 250)
            } else {
                positionEnemy.x = aleatorio(480, 580);
            }
            break;
        case 3:
            positionEnemy.y = 65;
            positionEnemy.x = aleatorio(318, 530);
            break;

        default:
            break;
    }
    return positionEnemy;
}

function drawLuigi() {
    luigi.loadCheck = true;
}

function drawMario() {
    mario.loadCheck = true;
}

function selectCharacter(element) {
    if (element.target.id === "luigi") {
        drawCharacter(faceMario, luigi, "Luigi");
    }
    else if (element.target.id === "mario") {
        drawCharacter(faceLuigi, mario, "Mario");
    }
}

function drawCharacter(faceCharacter, character, name) {
    if (!checkCharacter) {
        faceCharacter.parentNode.removeChild(faceCharacter);
    }
    faceCharacter.removeEventListener('mousedown', selectCharacter);
    document.getElementById('name').innerHTML = name.toUpperCase();
    checkCharacter = true;
    curCharacter = character;
    draw(curCharacter, initialPosition.x, initialPosition.y);
}

function PressIn(dataKey) {

    switch (dataKey.keyCode) {
        case arrowKeys.LEFT:
            finalPositionX = initialPosition.x - numPixeles;
            draw(curCharacter, finalPositionX, initialPosition.y)
            initialPosition.x = finalPositionX;
            break;
        case arrowKeys.UP:
            finalPositionY = initialPosition.y - numPixeles * 3;
            draw(curCharacter, initialPosition.x, finalPositionY)
            initialPosition.y = finalPositionY;
            break;
        case arrowKeys.RIGHT:
            finalPositionX = initialPosition.x + numPixeles;
            draw(curCharacter, finalPositionX, initialPosition.y)
            initialPosition.x = finalPositionX;
            break;
        case arrowKeys.DOWN:
            finalPositionY = initialPosition.y + numPixeles;
            draw(curCharacter, initialPosition.x, finalPositionY)
            initialPosition.y = finalPositionY;
            break;
        default:
            break;
    }

    //enemys
    if (finalPositionX <= positionsEnemy[0].x && finalPositionX + curCharacter.imagen.width >= positionsEnemy[0].x) {
        if (finalPositionY <= positionsEnemy[0].y && finalPositionY + curCharacter.imagen.height >= positionsEnemy[0].y) {
            if (heartImageTwo) {
                heartImageTwo.parentNode.removeChild(heartImageTwo);
                Num1.mostrarImagenNumero();
            }
        }
    }
    if (finalPositionX <= positionsEnemy[1].x && finalPositionX + curCharacter.imagen.width >= positionsEnemy[1].x) {
        if (finalPositionY <= positionsEnemy[1].y && finalPositionY + curCharacter.imagen.height >= positionsEnemy[1].y) {
            console.log("perdio vida");
        }
    }
    //coins
    if (finalPositionX <= positionsCoin[0].x && finalPositionX + curCharacter.imagen.width >= positionsCoin[0].x) {
        if (finalPositionY <= positionsCoin[0].y && finalPositionY + curCharacter.imagen.height >= positionsCoin[0].y) {
            console.log("gano moneda");
        }
    }
    if (finalPositionX <= positionsCoin[1].x && finalPositionX + curCharacter.imagen.width >= positionsCoin[1].x) {
        if (finalPositionY <= positionsCoin[1].y && finalPositionY + curCharacter.imagen.height >= positionsCoin[1].y) {
            console.log("gano moneda");
        }
    }
    if (finalPositionX <= positionsCoin[2].x && finalPositionX + curCharacter.imagen.width >= positionsCoin[2].x) {
        if (finalPositionY <= positionsCoin[2].y && finalPositionY + curCharacter.imagen.height >= positionsCoin[2].y) {
            console.log("gano moneda");
        }
    }
    if (finalPositionX <= positionsCoin[3].x && finalPositionX + curCharacter.imagen.width >= positionsCoin[3].x) {
        if (finalPositionY <= positionsCoin[3].y && finalPositionY + curCharacter.imagen.height >= positionsCoin[3].y) {
            console.log("gano moneda");
        }
    }


}

function draw(character, x, y) {
    drawBackground();
    if (character.loadCheck) {
        contextoCanva.drawImage(character.imagen, x, y);
    }
}

function aleatorio(minimo, maximo) {
    var resAleatorio = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
    return resAleatorio;
}
