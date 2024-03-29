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

/*Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/

function century(year){
return Math.ceil(year/100)
}
let century2 = (year) => Math.ceil(year/100)
//explicacion aca lo que hice fue dividir los anos entre los siglos que un siglo es 100, y eso lo aplique a un math ceil para que me de el entero
console.log(century2(2022))

///
/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
   let small = Math.min(...args)   
    return small
  }
}
//explain it and try to use it


/* 
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(times,str) {
   let repeated = '' 
  for(let i = 0; i<times;i++){
    repeated += str 
   }
  return repeated
}

console.log(repeatStr(4,'hola'))

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

let removeFirstLast = (str) => {
  let sujeto = str.split('')
  sujeto.pop()
  sujeto.shift()
  sujeto = sujeto.join('')
  return sujeto
}
  //you got this

console.log(removeFirstLast('malopo'))

//now make it using slice

let removeFandL = (str) => str.slice(1,-1)

console.log(removeFandL('parcelo'))

//string.slice(start, end)

/*
Description:
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
  
  return str.split(' ').reverse().join(' ')
  //return str; // reverse those words
  }
console.log(reverseWords('hola, caballero de la noche'))

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name,last){
return name.charAt(0) + '.' + last.charAt(0)
}
console.log(abbrevName('Marcelo','Salazar'))
//another way
let initialsConverter = (name,last) => {
  let convert = name.split('')[0].toUpperCase() + '.' + last.split('')[0].toUpperCase()
  return convert
}

console.log(initialsConverter('marcelo','salazar'))
 /*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(str) {
  let middle = Math.floor(str.length / 2)
  
  return str.length % 2 === 0 ? 
  str.slice(middle - 1 ,middle + 1) :       
  str.slice(middle, middle + 1)
  console.log(middle)
}

console.log(getMiddle('marceloS'))

let middle = Math.floor('marceloS'.length / 2)
console.log('marcelo'.slice(3,5))

/* explicacion : primero obtengo el valor de enmedio del string usando el tamano del string con length dividido 2, esto lo rendondeo hacia abajo con Math floor; luego hago una comprobacion con un ternario, si el valor es par o impar, de esto dependera cuantos caracteres tomar, en este caso marcelos tiene 8 caracteres , las de enmedio serian ce. Para eso compruebo que sea par y le aplico el metodo splice al string indicandole que el rango a tomar sera de la mitad restale uno y de la mitad sumale uno, seran los caracteres 3 (4-1) y 5(4+1);
en caso de que sea impar entonces solo sera del caracter medio hasta una posicion mas (si fuera pedro entonces del 3 al 4) para tomar solo el 3 que es la d*/

console.log(getMiddle('pedros'))

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/

arrTest = [1, 2, ,3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

let sumNegContPos = (input) => {
  return (input === null || input < 0) ? [] : 
    [ input.filter(e => e > 0).length ,
      input.filter(e => e < 0).reduce((acc,c) => acc+c,0) ]
}

console.log(sumNegContPos(arrTest))

console.log(arrTest.filter(e=> e>0).reduce((acc,c)=> acc+c,0))

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle" / After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")*/

let needle = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

let findNeedle = (arr) => {
  let position = arr.map(e=>e).indexOf('needle')
  return `found the needle at position ${position}`
}

console.log(findNeedle(needle))

/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]*/

function giveMeArray(str){
  let sol = transformToNumber(str).split('').reverse()
  return sol.map(e=> Number(e))
}

let transform = (str) => {
  let sol = transformToNumber(str).split('').reverse()
  return sol.map(e=> Number(e))
}

console.log(transform(5344))


//git commit --amend --date '2022-04-03' "Add attempt 4-03 coding challenge"

let digitize = (n) => {
  let sol = n.toString().split('').reverse()
  return sol.map(e=> Number(e))
}

console.log(digitize(4432))

function digitize2(n) {
  return String(n).split('').map(Number).reverse()
}

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

let stringy = (size) => {
 let str = ''
   return str.padStart(size.length,'10')  
}

console.log(stringy('size'))

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s+/g,'')}

let noSpace2 = (x) => x.split(' ').join('')

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.!

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3*/

function litres(time) {
  return Math.floor(time * 0.5);
}

let log = (arg) => console.log(arg)


/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

let vowels = ['a','e','i','o','u'] 

let countVowels = (str) => {
  count = 0
  for(letter of str){
    if(vowels.includes(letter)){
      count++
    }
  } 
  return count
}

log(countVowels('chapapa'))

  let count2 = (str) => {
    return str.match(/[aeiou]/gi).length
  }

let count3 = (str) => {
    return str.match(/[aeiou]/gi)
  }

log(count2('apa'))
log(count3('apa'))

/*
Description:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer
/*/

let squareEveryDigit = (num) =>{
  return Number(num.toString().split('').map(e=>e*e).join(''))
  
}

console.log(squareEveryDigit(45))

//Refactor into an arrow function June 28 2022

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

const plantNeedsWater2 = day => {
  return (day==='Wednesday') ? true : false;
}

console.log(plantNeedsWater2('Friday'))

// Write your code below
let bobsFollowers = ['Marcelo','Valentina','Clemen','Leandro']

let tinasFollowers = ['Valentina','Clemen','John']

let mutualFollowers =[]

for(let i = 0; i < bobsFollowers.length ; i++ ){
  for(let j = 0; j < tinasFollowers.length ; j++ ){
    if(bobsFollowers[i] === tinasFollowers[j]){
       mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers)

//

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Write your code below

let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded)
} while ( cupsAdded < cupsOfSugarNeeded  )

// Practice for loop and break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i = 0; i< rapperArray.length ; i++){
  console.log(rapperArray[i])
  console.log("And if you don't know, now you know.")
  if(rapperArray[i] === 'Notorious B.I.G.') {
    break
  }
}

/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/

function toNumberArray(stringarray){
  return stringarray.map(a=> Number(a))
}

/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.*/

const wordsStr = 'take me to semynak'

let last = x => {
  let res = x.split('')
  return res
}

console.log(last(wordStr))