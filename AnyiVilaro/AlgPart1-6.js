/**
 * Realice un algoritmo 
 * para generar N elementos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13,…).
 * 
 * en fobonacci, la suma del siguiente valor es igual a los dos previos
 * F(n) = F(n-1) + F(n-2)
 */

fibonacci = [0, 1];
numeroInicial = 2;
cantidad = 10;
for(var i=numeroInicial;i<=cantidad;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

var fibo = "";
fibonacci.forEach(item => {
    fibo = fibo + item + ", ";
});
console.log(fibo);
