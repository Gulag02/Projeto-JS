const calcular = document.getElementById("calcular")

calcular.addEventListener('click',imc);

function imc() {

    /* criando variaveis */
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    /* fazendo comparação lógica */


    if (nome !== "" && altura !== "" && peso !== "") {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso";

        } else if (valorIMC < 25) {
            classificacao = "Peso ideal"

        } else if (valorIMC < 30) {
            classificacao = "Levemente acima do peso"

        } else if (valorIMC < 35) {
            classificacao = "Com obsidade gral 1"

        } else if (valorIMC < 40) {
            classificacao = "Com obsidade gral 2"

        } else {
            classificacao = "Com obsidade gral 3"
        }
        /* enviando o resultado para  a <DIV> com id = "Resultado" */
        resultado.textContent=`${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resultado.textContent = "Preencha todos os campos!!!"

    }


}