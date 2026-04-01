const sumAll = function(a,b) {

    //a und b tauschen wenn a>b 
    if (a>b) {
        let temp = a; 
        a = b; 
        b= temp; 
    }

    //Error bringen wenn a oder b negativ
    if (a<0 || b <0)return "ERROR"; 

    //Error bringen wenn eine der beiden Zahlen kein Integer ist 
    if (!(Number.isInteger(a)) || !(Number.isInteger(b)))return "ERROR";

    let sum = 0; 
   for (let i = a; i <= b; i++) {
    sum = i+sum; 
   }

   return sum;

    };

// Do not edit below this line
module.exports = sumAll;
