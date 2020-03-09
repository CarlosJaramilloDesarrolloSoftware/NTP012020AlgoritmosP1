/**
 * 5. Realice un algoritmo para generar e imprimir los números pares e impares 
 * que se encuentran entre 0 y 100. Además muestre la multiplicación de todos estos.
 */

var multip = 1;
var pares = ""; 
var impares = "";
numeroInicial = 0;
for(var i=numeroInicial;i<=100;i++){
    if(i%2 == 0){
        pares = pares + i + ", ";
    }else{
        impares = impares + i + ", "
    }
    multip = multip*i;
}
console.log("Pares: " + pares);
console.log("Impares: " + impares);
console.log("Multiplicación desde "+numeroInicial+" a 100: " + multip);