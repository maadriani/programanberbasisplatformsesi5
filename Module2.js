// module2.js
function kali(a, b) {
    return a * b;
  }
  
  function bagi(a, b) {
    if (b === 0) {
      return "Tidak dapat dibagi dengan nol.";
    }
    return a / b;
  }
  
  module.exports = { kali, bagi };
  