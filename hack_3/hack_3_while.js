/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let i = 0;

while (i < 5){
    i++;
    result.push(i)
}

const reversed = result.reverse();
console.log(result)
//export result
module.exports = result;