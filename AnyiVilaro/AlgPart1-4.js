/**
 * 4. Se requiere un algoritmo para determinar, 
 * de N cantidades, cuántas son menores o iguales a cero y cuántas mayores a cero.
 */

var cantidades = [2,-3,4,8,6,-1,0,-3,-2,2];
var mayores, menores = 0;
for(var i=0;i<cantidades.length;i++){
    if(cantidades[i] <= 0){
        menores = menores + 1;
    }else{
        mayores = mayores + 1;
    }
}
console.log("Menores: " + menores);
console.log("Mayores: " + mayores);