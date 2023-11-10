// module4.js
function akarKuadrat(a) {
    if (a < 0) {
      return "Angka negatif tidak memiliki akar kuadrat real.";
    }
    return Math.sqrt(a);
  }
  
  module.exports = { akarKuadrat };
  