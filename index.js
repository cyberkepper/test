// const datos = {
//     nombre: 'pepe',
//     apelidos: 'lopez',
//     edad: 36
// }

var coches = [{
    marca: 'ford',
    color: 'rojo',
    año: 2007
},
    {
        marca: 'ford',
        color: 'rojo',
        año: 2009
    },
{
    marca: 'peugeot',
    color: 'azul',
    año: 2012
}]

var resultados = coches.map( results => {
    return results.marca;
}).filter(marca => marca == 'ford', año => año == 2009)

console.log(resultados);

let numbers = [1,2,3,4,5,6,7,8,9,10];

let numFiltered = numbers.filter(number => number > 3)

console.log(numFiltered);







// // Obtener el nombre
// var result = datos.nombre;
// console.log(result);

// // Concatenar todos los datos con el operador + separados con un espacio
// var result = datos.nombre + ' ' + datos.apelidos + ' ' + datos.edad;
// console.log(result);

// // Obtener todas las claves
// var result = Object.keys(datos);
// console.log(result);

// // Obtener todos los valores
// var result = Object.values(datos);
// console.log(result);

// // Concatenar todos los valores con reduce separados con un espacio
// var valores = Object.values(datos);
// valores.reduce( (result, valorActual) => {
//     console.log(result + valorActual);
//     return result + valorActual;
// }, '')

// // Eliminar edad
// delete datos.edad;
// console.log(datos);




