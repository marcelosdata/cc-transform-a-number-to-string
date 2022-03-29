//Convert text to string
//Description:
//We need a function that can transform a number into a string.

//What ways of achieving this do you know?

let transformToNumber = num => num + '';

console.log(typeof(transformToNumber(2)))

let secondTransform = num => toString(num);
console.log(typeof(secondTransform(10)))


//adding a nre problem
  /* 
Description:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


  */

var countSheep = function(num){
  let contador = ''
  for(let i = 1 ; i<=num ; i++) { //se iteran las cantidades donde este sea n veces menor que num
     contador += `${i} sheep...`  //aca se agrega a la variable contador cada resultado con un template literal
  }
  return contador //se retorna el resultado aca fuera del loop que envie el resultado en el loop hacia la variable contador
}
//explain it 

console.log(countSheep(3))