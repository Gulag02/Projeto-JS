/* ↓Criando variaveis com DOM↓ */

const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

/* ↓criando evento do botão ↓*/

turnOn.addEventListener('click',lampOn);

turnOff.addEventListener('click',lampOff);

/*↓ Evento mouseOver quando o ponteiro estiver sobre a lampada ↓*/

lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick', lampBroken)

/* ↓funções↓ */

function isLampbroken(){
   return lamp.src.indexOf('quebrada')>-1 
};

function lampOn (){
    if(!isLampbroken())
lamp.src="./img/ligada.jpg"
};

function lampOff (){
    if(!isLampbroken())
lamp.src="./img/desligada.jpg"
}

function lampBroken(){
      lamp.src="./img/quebrada.jpg"
}