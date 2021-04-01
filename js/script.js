let valor;
let resultado;
let porcento;
function botao(num){
    valor = document.calc.visor.value += num;
}
function resetar(){
    document.calc.visor.value = '';

}
function calcular(){
    resultado = eval(valor);
    document.calc.visor.value = resultado;

}
document.getElementById("porc").onclick = function(){
   var porcent = "*(1/100)*";
   return porcent;
}

