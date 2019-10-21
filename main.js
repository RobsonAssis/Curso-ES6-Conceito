// REST

const arr = [1,2,3,4];

const [a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// SPREAD

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








