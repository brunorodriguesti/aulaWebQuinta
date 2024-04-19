
document.write("Hello World! " + 
soma());
/*
variaveis globais 
variaveis locais
*/

function soma(){
    var num1 = 10;
    var num2 = 20;

    var soma = num1 + num2;
    
    return soma;
}
function escrever(){
    alert(soma());
}