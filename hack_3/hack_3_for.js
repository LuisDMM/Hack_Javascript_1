/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

for (let i = 1; i <= 5; i++){
    result.push(i);
}

const reversed = result.reverse();

console.log(result)
//export result
module.exports = result;