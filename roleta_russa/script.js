function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = getRandomInt(0, 5);

const mostraNum = document.getElementById('mostraNum');
const btn = document.getElementById('btn');
const girar = document.getElementById('girar')
const tambor = document.getElementById('tambor')

let tentativaAtual = 0;
let anguloAtual = 0

function verificar() {
    
    if (tentativaAtual == numeroAleatorio) {
        tentativaAtual += 1;
        mostraNum.innerText = `${tentativaAtual}/6`;
        document.getElementById('somTiro').play();
        alert('Voce morreu!');
        btn.disabled = true;
    } else {
        document.getElementById('empty').play();
        tentativaAtual += 1;
        mostraNum.innerText = `${tentativaAtual}/6`
        anguloAtual += 60;
        tambor.style.transform = `translate(-50%, -50%) rotate(${anguloAtual}deg)`;
        tambor.style.transition = '1s'
    }
}

function girarTambor () {
    anguloAtual += 60;
    document.getElementById('somReload').play();
    tambor.style.transform = `translate(-50%, -50%) rotate(${anguloAtual}deg)`;
    tambor.style.transition = '1s'
}

btn.addEventListener('click', verificar);
girar.addEventListener('click', girarTambor)

console.log(numeroAleatorio)