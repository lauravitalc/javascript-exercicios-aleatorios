/*
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
*/ 

const numeros = [1,6,8,12,50];
const arr = numeros.map(multiplicar)
function multiplicar(n){
    return n * 2;
}

console.log(arr)