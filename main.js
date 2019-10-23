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

/*
Quando uma função assíncrona é chamada, ela retorna uma Promise. 
Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. 
Quando a função assíncrona lança uma exceção ou algum valor, 
a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, 
que pausa a execução da função assíncrona e espera pela resolução da Promise passada, 
e depois retoma a execução da função assíncrona e retorna o valor resolvido.

Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") 
representa um valor que pode estar disponível agora, no futuro ou nunca.

Dependencias yarn package.json
"@babel/plugin-transform-async-to-generator": "^7.5.0",
"@babel/polyfill": "^7.6.0",

yarn webpack.config.js
entry: ['@babel/polyfill','./src/main.js'],

.babel
 "@babel/plugin-transform-async-to-generator"

const minhaPromisse = () => new Promise((resolve, rejects) => {

    setTimeout(() => { resolve('Ok')}, 2000);

});

async function executaPromisse(){
    const response  = await minhaPromisse();
    console.log(response);
}

executaPromisse();

*/








