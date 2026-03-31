const reverseString = function(string) {

    const arrayString = string.split('');
    console.log(arrayString); 

    const reverserdArray = arrayString.reverse(); 
    console.log(reverserdArray);
    
    const stringReversed = reverserdArray.join(''); 
    return stringReversed;

};

console.log(reverseString('Hello'));

// Do not edit below this line
module.exports = reverseString;
