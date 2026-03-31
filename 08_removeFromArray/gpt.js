const removeFromArray = function(arr, ...num) {
    function remove(arrnumb) {
        for (let i = 0; i < num.length; i++) {
            if (arrnumb === num[i]) {
                return false; // Wenn arrnumb in num ist → rausfiltern
            }
        }
        return true; // Nur behalten, wenn kein Treffer
    }

    return arr.filter(remove);
};

console.log(removeFromArray([1, 2, 3], 1, 2, 3)); // → Erwartet: []
