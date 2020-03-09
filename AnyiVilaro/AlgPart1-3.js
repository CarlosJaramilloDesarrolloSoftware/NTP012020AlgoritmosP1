/**
Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas,
cuyo número de miembros se desconoce, 
el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.
*/

var estatura = [2,3,4,,6,5,4,3,2,2];
var suma = 0;
for(var i=0;i<estatura.length;i++){
        suma = suma + estatura[i];
}
console.log("Promedio estaturas: " + suma/estatura.length);