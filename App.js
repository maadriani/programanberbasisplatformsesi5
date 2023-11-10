// app.js
const module1 = require(function name(params) {
    './module1'
});
const newLocal = './module2';
const module2 = require(newLocal);
const newLocal_1 = './module3';
const module3 = require(newLocal_1);
const newLocal_2 = './module4';
const module4 = require(newLocal_2);

// Operasi tambah dan kurang
const result1 = module1.tambah(5, 3);
console.log('Hasil penambahan: ' + result1);

const result2 = module1.kurang(5, 3);
console.log('Hasil pengurangan: ' + result2);

// Operasi kali dan bagi
const result3 = module2.kali(5, 3);
console.log('Hasil perkalian: ' + result3);

const result4 = module2.bagi(6, 2);
console.log('Hasil pembagian: ' + result4);

// Operasi pangkat
const result5 = module3.pangkat(2, 3);
console.log('Hasil pemangkatan: ' + result5);

// Operasi akar kuadrat
const result6 = module4.akarKuadrat(25);
console.log('Akar kuadrat: ' + result6);
