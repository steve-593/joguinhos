function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = getRandomInt(0, 5);

const mostraNum = document.getElementById('mostraNum');
const btn = document.getElementById('btn');

let tentativaAtual = 0;

function verificar() {
    
    if (tentativaAtual == numeroAleatorio) {
        tentativaAtual += 1;
        mostraNum.innerText = `${tentativaAtual}/6`;
        alert('Voce morreu!');
        btn.disabled = true;
    } else {
        tentativaAtual += 1;
        mostraNum.innerText = `${tentativaAtual}/6`
    }
}

btn.addEventListener('click', verificar);

console.log(numeroAleatorio)