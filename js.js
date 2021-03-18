// Questão 01
function calcQuestao01(){
    var nota01 = document.getElementById("nota01").value;
    var nota02 = document.getElementById("nota02").value;
    var nota03 = document.getElementById("nota03").value;

    var somaponderada = parseInt(nota01 * 2) + parseInt(nota02 * 3) + parseInt(nota03 * 5);
    
    document.getElementById("result01").innerHTML = "Resultado: A média das 3 notas foi " + (somaponderada / 10);
}


// Questão 02
function calcQuestao02(){
    var senha = document.getElementById("senha").value;
    var result02 = document.getElementById("result02");
    if (senha == 2002){
        result02.innerHTML = "Acesso Permitido";
    }
    else {
        result02.innerHTML = "Senha Inválida";
    }
}


// Questão 03
function calcQuestao03() {
    var valor = Number(document.getElementById("valor").value);

    if (valor > -1 && valor < 25.01) {
        document.getElementById("result03").innerHTML =
        "O número " + valor + " está no Intervalo [0,25]";
    } else if (valor > 25 && valor < 50.01) {
        document.getElementById("result03").innerHTML =
        "O número " + valor + " está no Intervalo [25,50]";
    } else if (valor > 50 && valor < 75.01) {
        document.getElementById("result03").innerHTML =
        "O número " + valor + " está no Intervalo [50,75]";
    } else if (valor > 75 && valor < 100.01) {
        document.getElementById("result03").innerHTML =
        "O número " + valor + " está no Intervalo [75,100]";
    } else {
        document.getElementById("result03").innerHTML =
        "O número " + valor + " está fora de Intervalo";
    }
    }


// Questão 04
function novoSalario() {
    var salarioAtual = Number(document.getElementById("salarioAtual").value);

    if (salarioAtual > 0 && salarioAtual < 400.01) {
        reajusteSalario = salarioAtual * 0.15;
        novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
        document.getElementById("novoSalario").innerHTML =
        "Seu novo salário é de " +
        novoSalario +
        ". Seu reajuste foi de 15%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
        reajusteSalario.toFixed(2).replace(".", ",");
    } else if (salarioAtual > 400 && salarioAtual < 800.01) {
        reajusteSalario = salarioAtual * 0.12;
        novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
        document.getElementById("novoSalario").innerHTML =
        "Seu novo salário é de " +
        novoSalario +
        ". Seu reajuste foi de 12%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
        reajusteSalario.toFixed(2).replace(".", ",");
    } else if (salarioAtual > 800 && salarioAtual < 1200.01) {
        reajusteSalario = salarioAtual * 0.1;
        novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
        document.getElementById("novoSalario").innerHTML =
        "Seu novo salário é de " +
        novoSalario +
        ". Seu reajuste foi de 10%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
        reajusteSalario.toFixed(2).replace(".", ",");
    } else if (salarioAtual > 1.2 && salarioAtual < 2000.01) {
        reajusteSalario = salarioAtual * 0.07;
        novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
        document.getElementById("novoSalario").innerHTML =
        "Seu novo salário é de " +
        novoSalario +
        ". Seu reajuste foi de 7%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
        reajusteSalario.toFixed(2).replace(".", ",");
    } else if (salarioAtual > 2000) {
        reajusteSalario = salarioAtual * 0.04;
        novoSalario = (reajusteSalario + salarioAtual).toFixed(2).replace(".", ",");
        document.getElementById("novoSalario").innerHTML =
        "Seu novo salário é de " +
        novoSalario +
        ". Seu reajuste foi de 4%, e seu salário atual comparado ao antigo sofreu um acrescimo de R$" +
        reajusteSalario.toFixed(2).replace(".", ",");
    } else {
        alert("Salário Inválido, tente novamente.");
    }
    }


// Questão 05
  function calcQuestao05() {
    var renda = document.getElementById("renda").value;
    var result05 = document.getElementById("result05");
    var imposto = 0;
    console.log(renda);
    if (renda <= 2000) {
        imposto = 0;
    } else if (renda > 2000 && renda <= 3000) {
        renda = renda - 2000;
        imposto = (renda * 0.08);
    } else if (renda > 3000 && renda <= 4500) {
        renda = renda - 3000;
        imposto = (80 + (renda * 0.18));
    } else {
        renda = renda - 4500;
        imposto = (350 + (renda * 0.28));
    }

    if(imposto === 0){
        result05.innerHTML = "Isento";
    }else{
        result05.innerHTML = "Resultado: Imposto de R$ "+ imposto.toFixed(2);
    }
}
