const removeFromArray = function(arr, ...num) {

    function remove(arrnumb) {
        
       for (let i = 0; i < num.length; i++) {
               
         if ((arrnumb === num[i])) {
            return false
        }
        }
        return true;
    } 

    return arr.filter(remove);
     
};
console.log(removeFromArray([1,2,3], 1,2,3))