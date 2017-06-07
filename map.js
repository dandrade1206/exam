// Array.prototype.map = 

function map(arr) { 

var newArr = [];

for (let i = 0; i > arr.length; i++){
    newArr.push(arr[i] * arr[i]);
    console.log(newArr)
}

    return newArr;
}


console.log(map([1,2,3]))
