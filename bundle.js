"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// REST
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: 'Robson',
  idade: '20',
  empresa: 'Indra'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Henrique'
});

console.log(usuario2); //Template Literals

var nome = "Robson";
var altura = 1.90;
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(altura, " ")); //Short Syntax

var nome3 = 'Diego';
var idade = 23;
var usuario = {
  nome3: nome3,
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuario); //Arrow Functions

var arr4 = [1, 3, 4, 5, 6];
var newArr = arr4.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'test';
};

console.log(teste());

var teste2 = function teste2() {
  return [1, 2, 3];
};

console.log(teste2());

var teste3 = function teste3() {
  return {
    nome: 'Flavio'
  };
};

console.log(teste3());
