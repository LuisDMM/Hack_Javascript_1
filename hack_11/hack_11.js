/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let stringArray = ["foo","bar","baz","qux","echo"]
let numberArray = [1,2,3,4,5];
let i = 0;
let change = {
  1 : "one",
  3 : "three",
  5 : "five",
};
let finish = []

finish.push("h@ck");

for(;i < numberArray.length; i++){
    let num = numberArray[i];
    let newNum = change[num] || num;
    finish.push(newNum);
}

finish.push("h@ck");

for(let item of stringArray){
  let letterList;

  switch(item){
    case "foo":
      letterList = "f00";
      break;
    case "bar":
      letterList = "Bar";
      break;
    case "baz":
      letterList = "b@z";
      break;
    case "qux":
      letterList = "quX";
      break;
    case "echo":
      letterList = "3ch0";
      break;
    default:
      letterList = item;
    }
  finish.push(letterList);
}
finish.push("h@ck");

console.log(finish);
//export result
module.exports = finish;