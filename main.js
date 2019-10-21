// REST
//A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.
//Se o último argumento nomeado de uma função tiver prefixo com  ..., 
//ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) 
//são disponibilizados pelos argumentos atuais passados à função
const arr = [1,2,3,4];

const [a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// SPREAD
//A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, 
//seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados
// ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);


const usuario1 = {
    nome: 'Robson',
    idade: '20',
    empresa: 'Indra'
};

const usuario2 = { ...usuario1, nome: 'Henrique'};

console.log(usuario2);


//Template Literals
//Template literals são literais string que permitem expressões embutidas. 
//Você pode usar string multi-linhas e interpolação de string com elas. 
//Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015.

const nome = "Robson";
const altura = 1.90;

console.log(`Meu nome é ${nome} e tenho ${altura} `);


//Short Syntax
const nome3 = 'Diego';
const idade = 23

const usuario = {
    nome3,
    idade,
    empresa: 'Rocketseat',
};

console.log(usuario);


//Arrow Functions
//Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression)
// e não tem seu próprio this, arguments, super ou new.target.
// Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, 
//e elas não podem ser usadas como construtoras (constructors).
const arr4 = [1,3,4,5,6];

const newArr = arr4.map(item => item * 2);
console.log(newArr);


const teste = () => {
    return 'test';
}

console.log(teste());


const teste2 = () => [1,2,3]

console.log(teste2());

const teste3 = () => ({ nome: 'Flavio'});

console.log(teste3());








