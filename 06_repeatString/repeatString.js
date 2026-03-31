const repeatString = function(string, num) {

    let repeat = string;

    for (let i = 1; i < num; i++){

        repeat = repeat + string; 
    }
    if (num > 0){
return repeat;
    }else if (num < 0) 
    {
        return 'ERROR';
    } 
    
    else {
        return '';
    }

};



// Do not edit below this line
module.exports = repeatString;
