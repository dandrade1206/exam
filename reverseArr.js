module.exports = function reverseArr() { 

const arr = [1,2,3,4,5];
let pos = 0;

arr.push(arr[pos])

for (var i = arr.length-2; i>=0; i--){
    arr[pos] = arr[i];
    pos++;
}
    arr[arr.length-2] = arr[arr.length-1]
    arr.pop()
    return arr;
}

console.log(reverseArr())