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


