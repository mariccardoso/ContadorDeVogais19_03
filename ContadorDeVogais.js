//Atividade Contador de Vogais - Aula 19/03

//Indicar qual a palavra
let palavras = "Mariana";

//Transformar a palavra em um array  (cada elemento é uma letra)
let letras = palavras.split("");
//console.log(letras)

//Declarar um array "vogais" que tenha todas as vogais 
let vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

//O método "Filter()" filtra o array "letras" e adiciona apenas os caracteres incluidos (includes()) no array "vogais"
let resultado = letras.filter((letras) => vogais.includes(letras));

//exibindo resultado
console.log("As vogais encontradas são: " + resultado);
console.log ("A quantidade de vogais é: " + resultado.length);
