/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 0;
while (i < 7){
    i ++;
    if (i == 2) continue
    if (i == 4) continue
    if (i == 6) continue
    result.push(i)
}
console.log(result);
//export result
module.exports = result;