var nroAlumnos = prompt("Número de alumnos");
var arrayAlumnos = [];
var edadAlumno, edades, promedio = 0;
var finalizado = false;

for(var i=1;i<=nroAlumnos;i++){
    edadAlumno = prompt("Alumno: " + i + ". Ingresar Edad: ", 0);
    if (edadAlumno >= 18){
        edades = 0;
        arrayAlumnos.forEach(item => {
            edades = edades + item;
        });
        promedio = edades/(i-1);
        finalizado = true;
        break;
    }else{
        arrayAlumnos.push(parseInt(edadAlumno));
    }
}

if(finalizado == false){
    edades = 0;
    arrayAlumnos.forEach(item => {
        edades += item
    });
    promedio = edades/parseInt(nroAlumnos);
}
console.log("Edades Alumnos: " + arrayAlumnos)
console.log("Promedio de edad: " + promedio);