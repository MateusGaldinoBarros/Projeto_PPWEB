function calcular() {
    const salario = parseFloat(document.getElementById("salario").value);
    document.getElementById("resultado").innerHTML = calcularImposto(salario);
    
    
}

function limpar() {
    document.getElementById("salario").value = "";
    document.getElementById("resultado").innerHTML = "";
}




function calcularFaixa1(salario) {
    if(salario < 2259.21){
        return 0;
    }
}

function calcularFaixa2(salario) {
    if(salario > 2826.65) { 
        imposto = (2826.65 - 2259.21) * 0.075;

        return imposto;
    }else if(salario > 2259.21 && salario < 2826.65) {
        imposto = (salario - 2259.21) * 0.075;

        return imposto;
    }else{
        return 0;
    }
}

function calcularFaixa3(salario) {
    if(salario > 3751.05) {
        imposto = (3751.05 - 2826.65) * 0.15;

        return imposto;
    }else if (salario > 2826.65 && salario < 3751.05){
        imposto = (salario - 2826.65) * 0.15;
    }else{
        return 0;
    }
}

function calcularFaixa4(salario) {
    if(salario > 4664.68) {
        imposto = (4664.68 - 3751.06 ) * 0.225;

        return imposto;
    }else if (salario > 3751.06 && salario < 4664.68){
        imposto = (salario - 3751.06) * 0.225;
    }else{
        return 0;
    }
}

function calcularFaixa5(salario){
    if(salario > 4664.68){
        imposto = (salario - 4664.68) * 0.275
    }else{
        return 0;
    }

}

function calcularImposto(salario){
    
    return calcularFaixa1(salario)
    + calcularFaixa2(salario)
    + calcularFaixa3(salario)
    + calcularFaixa4(salario)
    + calcularFaixa5(salario)
}

//OBS: Escrever função para calcular a aliquota