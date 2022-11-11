const removeFromArray = function(arry, ...removeArry) {

    for (i = 0; i < removeArry.length; i++){

        let x = arry.indexOf(removeArry[i]);
        while(x >= 0){
            arry.splice(x, 1);
            x = arry.indexOf(removeArry[i]);
        }
    }

    return arry;
};

// Do not edit below this line
module.exports = removeFromArray;
