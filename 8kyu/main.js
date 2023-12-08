

// function positiveSum(arr){
//   return arr.reduce((a,c)=> c > 0 ? c + a : a , 0)

// }


// function positiveSum(arr){
//     let sum = 0
//     return arr.reduce((a,c)=>{
//         if(c >0){
//             sum = (c + a)
//         }else{
//             sum = a + 0
//         }
//         return sum
//     },0)
// }
// console.log(positiveSum([1,-4,7,12]))

// function opposite(number){
//    return number * -1
// }
// console.log(opposite(14))

// numberToString = String
// console.log(numberToString(123))


// function periodIsLate(last,today,cycleLength){
//     if(today - last < cycleLength){
//         return false
//     }else{
//         return true
//     }
// }

// periodIsLate()

// function repeatStr(n,s){
//     return s.repeat(n)
// }

// console.log(repeatStr(6, 'I'))

/*

 human years >=1

 cat years: 
 1 human  year = 15 cat years

2 human year = + 9 more years 

+3 human years = + 4 more years for each year after


dog years:
1 human year = 15 dog years
2 human year = 9 more dog years 
+3 human years = 5 more dog years each year after 


 */



// function removeChar(str){
//     return str.substring(1,str.length-1)
   
// }
// console.log(removeChar('hello'))

// function summation(num){
// let sum = 0

// for(let i = 1; i <= num; i++){
    
    
//     sum += 1
    
// }

// return sum

// }

// console.log(summation(8))

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }
// let example = new SmallestIntegerFinder()
// console.log(example.findSmallestInt([34, 15, 88, 2]))

// function basicOp(operation,value1,value2){
//     if(operation == '+'){
//         let result = value1 + value2
//         return result
//     }else if(operation == '-'){
//         let result = value1 - value2
//         return result
//     }else if(operation == '*'){
//         let result = value1 * value2
//         return result
//     }else{
//         let result = value1 / value2
//         return result
//     }
   
// }
// console.log(basicOp('+',2,3))


// function abbrevName(name){
   
//     let split = name.split(' ')
//     return split.map((x)=>x[0]).join('.')
 


// }
// console.log(abbrevName('Sam Harris'))


// let findNeedle = haystack=>{haystack.map((e,i)=>{e ==='needle'? `found needle at position ${i}` : undefined})}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))


// function greet(){
//     let h = ['h','e','l','l','o']
//     let w = ['w','o','r','l','d']
//     let hAndW = h.concat(` ${w}`).toString().split(',').join('')
//     return hAndW
//   }

//   console.log(greet())



//   function lovefunc(f1, f2){
//       if(f1 % 2 === 0 && f2 % 2 != 0 ||f2 % 2 === 0 && f1 % 2 != 0 ){
//           return true
//       }else if(f1 === f2){
//           return false
//       }else{
//           return false
//       }
//   }

//   console.log(lovefunc(166,508))
//   console.log(lovefunc(2,2))
//   console.log(lovefunc(0,1))
//   console.log(lovefunc(0,0))



//   function areYouPlayingBanjo(name) {
//     // Implement me
//     if(name[0]=== 'R'|| name[0]==='r'){
//         return `${name} plays banjo`
//     }else{
//         return `${name} does not play banjo`
//     }
    
  
//   }

//   console.log(areYouPlayingBanjo('Ringo'))


/*

h=0
m=1
s=1


take value of h,m,s multiply times the time value and add together, add three zeros at the end 
if or for loop? 

if then for loop 
*/

// function sinceMidnight(h,m,s){
//    let minute = 60
//    let second = 60
//     let result;
//   if(h <=23 ){
//       if 
//   }


// }



// console.log(sinceMidnight(0,1,))

// function check(a, x) {
// return a.includes(x)
// }

// console.log(check([2,4,5,6], 5))



// function average(array){
//   let result = array.reduce((a,b)=>{
//     return (a + b)
//   },0)
//   return result/array.length
// }
// console.log(average([49,72,75,6,69,9,82,11,97,47,43,95]))

// function fakeBin(x){
//   let array = x.split('')
//   let newArr=[]
//   array.forEach(el => {
//     if(el < 5){
//       el = 0
//       return newArr.push(el)
//     }else if(el >= 5){
//       el = 1
//       return newArr.push(el)
//     }
   
    
//   });
//   return newArr.join('')
// }
// console.log(fakeBin('92485294'))

// const reverseSeq = n =>{
//   for(let i = n; i < n; i--){
//     return n
//   }
// }


// function reverseSeq(n){
//   let arr=[]
//   for(let i = n; i >= n; i--){
//     console.log(i)
//     arr.push(i)
//   }
//   return arr
// }
// console.log(reverseSeq(5))



// function reverseWords(str){
//   let array =  str.split(' ')
//   let reversed = array.reverse()
//   return reversed.join(' ')
// }

// console.log(reverseWords("The greatest victory is that which requires no battle"))

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
// let arr = dna.split('')
// let mapped= arr.map(el=>{
//   return el.replace('T','U')
  
// })
// return mapped.join('')
// }



// const DNAtoRNA = dna=>{return dna.split('').map(el=>{return el.replace('T','U')}).join('')}

// console.log(DNAtoRNA('TTTT'))

// function hero(bullets, dragons){
//   //Get Coding!
    
//   if(bullets%dragons===0){
//     return true
//   }else{
//     return false
//   }
//   }

//   console.log(hero(205,92))


// function list(x){
    
//   return Math.min(x);
// }

// console.log(list([-52, 56, 30, 29, -54, 0, -110]))



// var max = function(list){
  
//   return list[0];
// }

// function smash(words){
//   return words.join(' ')
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']))

// let countSheep = function(num){
//   let result;
//   for(let i = 1; i >= num; i++){
//     return result = i
//   }
//   return result
// }

// countSheep = 3
// console.log(countSheep)

// function countSheep(num){
//   let str=''
//   for(let i = 1; i <= num; i++){
//     str += `${i} sheep...`
//   }
//   return str
// }
// console.log(countSheep(3))

// function min(list){
    
//   return Math.min(...list)
// }

// var max = function(list){
  
//   return Math.max(...list)
// }
// console.log(max([4,6,2,1,9,63,-134,566]))

//index * x
// function countBy(x, n) {
//   let z = [];

//   if(x && n > 0){
   
//     for(let i = 1; i <=n; i++){

//       z.push(x * i)
     

//     }
  
//   }

//   return z;
// }

// console.log(countBy(2,5))

// function greet(name){

  
//   if(name === "Johnny"){
//     return "Hello, my love!";
//   }else{
//     return "Hello, " + name + "!";
//   }
   
// }


// function arrPlusArr(arr1,arr2){


//   let result1 = arr1.reduce((acc,curr)=>{
//     return acc + curr
//   },0)
 
//   let result2 = arr2.reduce((acc,curr)=>{
//     return acc + curr
//   },0)
//    console.log(result2 + result1)
// }

// arrPlusArr([-1, -2, -3], [-4, -5, -6])



// function past(h,m,s){
//     let hours = h * 60 * 60 * 1000;
//     let min = m * 60 * 1000;
//     let sec = s * 1000

//     return hours + min + sec

// }


// function sumArray(array){
//     if(!array || array.length < 1){
//         return 0
//     }else{
//         let sum = 0
//     let sorted = array.sort((a,b)=>{
//        return  a-b
//     })

//     for(let i = 1; i < sorted.length-1; i++){

//         sum += sorted[i]

//     }
//     return sum

//     }
    
  
// }

// console.log(sumArray([null]))



// function monkeyCount(n){
//     let arr=[]
//     for(let i =1; i<=n; i++){
//         arr.push(i)
//     }
//     return arr
// }

// console.log(monkeyCount(10))

// function monkeyCount(n){
//     return Array.from({length:n},(_,i)=>i+1)
// }
// console.log(monkeyCount(10))


/*
Array.from creates a new array from an iterable object

- iterable is the {length:n}, then the created array will have length of n

map function will be called on each item of the new created arrat (_,i) the _ item is ignored, but the new item if formed with index(i)





*/

// function remove(string){
//      let array = string.split('')
//    let filtered= array.filter(item=>{return item !== '!'})
//    return filtered.join('') + '!'
// }
// console.log(remove('HI! HI!'))

// function remove2(string) {
//     //coding and coding....
//   return string.split('!').join('') + "!"
//   }
//   console.log(remove2('HI! HI!'))




//   var rooms = {
//     first: {
//       description: 'This is the first room',
//       items: {
//         chair: 'The old chair looks comfortable',
//         lamp: 'This lamp looks ancient'
//       }
//     },
//     second: {
//       description: 'This is the second room',
//       items: {
//         couch: 'This couch looks like it would hurt your back',
//         table: 'On the table there is an unopened bottle of water'
//       }
//     }
//   }


//kata example twist 
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

//Add the value "codewars" to the array websites 1,000 times.


// let websites = []
// let i = 0;
// while(i <5){
//     websites.push('codewars')
//     i++
// }
// console.log(websites)


// function tripleTrouble(one,two,three){
// return one.split("").map((letter,index)=>{
//     return letter + two[index] + three[index]
// }).join('')

// }

// function tripleTrouble(one, two, three){
//     //Solution
//     let result = ''
//     for(let i = 0; i < one.length;i++){
//       result += one.charAt(i) + two.charAt(i)+three.charAt(i)
//     }
//     return result
//    }

// console.log(tripleTrouble('aa','bb','cc'))


// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         return name = 'Mercury'
//       case 2:
//         return name = 'Venus'
//       case 3:
//         return name = 'Earth'
//       case 4:
//        return  name = 'Mars'
//       case 5:
//         return name = 'Jupiter'
//       case 6:
//         return name = 'Saturn'
//       case 7:
//         return name = 'Uranus'
//       case 8:
//         return name = 'Neptune'
//     }
    
//     // return name;
//   }

//   console.log(getPlanetName(3))



//TOTEL AMOUNT OF POINT
/*Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

*/

// function points(games){
// let total = 0
// games.map(game =>{
//   if(game[0] === game[2]){
//     total +=1
//   }else if (game[0]> game[2]){
//     total +=3
//   }
// })
// return total


// }


// other solution

// const points = games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0] === current[2] ? 1 : 0
// },0)
  

// console.log(points(["3:1", "2:2", "0:1"]))




///PILLARS

/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


*/

// function pillars(numPill,dist,width){
//  if(numPill === 1){
//   return 0;
//  }else{
//   let distance = dist * ((numPill - 1) * 100)
//   let pillars = numPill - 2
//   return distance + (width * pillars)
//  }

  
// }


//////
// function problem(x){
//   if(typeof x === 'string'){
//     return 'error'
//   }else{
//     return x * 50 + 6
//   }
// }

// console.log(problem(5))


// Remove duplicates from list

/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

// function distinct(a){
//   let arr = []
//   for(let i = 0; i<a.length; i++){
//     if(!arr.includes(a[i])){
//       arr.push(a[i])
//     }
//   }
// }


//other solution

// const distinct = a = a.filter((item,index)=> a.indexOf(item)=== index)

// indeOf finds the first appearance of an item, so if its index doesnt match the current one, the item is filtered out.
// console.log(distinct([1,1,2]))


// REMOVE FIRST AND LAST CHARACTERS PT2

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//my solution
// function array(string){
    
//     intArr = Array.from(String(string).split(","))
//     if(intArr.length <= 2 ){
//         return null
//     }else{
//         return intArr.slice(1,-1).join(' ').toString()
       
//     }
// }



//other solution

// function array(arr){
//     return arr.split(',').slice(1,-1).join(' ')|| null
// }

// console.log(array("1,2,3"))



//Printing Array elements with Comma delimiters

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// function printArray(array){
// return array.join(",")
// }

// console.log(printArray(["h","o","l","a"]))


//WELCOME TO THE CITY

//Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// function sayHello(name,city,state){
   

//     return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}`
// }

// console.log(sayHello(['john','smith'], 'phoenix','arizona'))

//SHORT LONG SHORT

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// function solution(a,b){
//     if(a.length>b.length){
//         return `${b}${a}${b}`
//     }else{
//         return `${a}${b}${a}`
//     }
// }
// console.log(solution('1','22'))



//MY HEAD IS AT THE WRONG END
//Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).


// function fixTheMeerkat(arr){
//   return [arr[2],arr[1],arr[0]]
  
// }
// console.log(fixTheMeerkat(["tail", "body", "head"]))


//PICK A SET OF FIRST ELEMENTS
//Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

//If n == 0 return an empty sequence []

//PREP
// param,returns,examples, pseudo code

// arr is the given array
//n is the given number of elements 
//return the elements of the sequence in an array

// function first(arr,n){
//   //set up a new array 
//   //for loop 
//   //start at index 0
//   //when the length of the array is equal to the n param we return the elements 
//  let a = []
//  if(n=== undefined){
//   return [arr[0]]
//  }else if(n>0){
//   for(let i = 0; i<n && i<arr.length; i++){
//     a.push(arr[i])
//   }
//   return a

//  }else{
//   return []
//  }
  

// }
//if n is 0 return an empty array
//accepts numbers and letters 
// console.log(first(["a","b","c","d"])) //return [12,5]

// //other solutions

// const first = (arr,n=1) => n === 0 ? [] : arr.slice(0,n)

//MULTIPLE OF INDEX

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

//PREP
//param- array of numbers 
//return a new array of the elements that are multiples of the index of the given array
//ex : [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
//positive and negative numbers 
//length must be greater than 1 

// function multOfIndex(arr){
//   //loop through the array 
//   //if the number is divisible by the index number then return to the new array 
//   return arr.filter((x,i)=>{
//     return x%i == 0 || x==0
//   })
 
// }

// console.log(multOfIndex([0,2,3,6,9]))


//DUCK DUCK GOOSE
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

//PREP
//array and n as params
//return the name of the player chosen from the n param
//ex: duck_duck_goose([a, b, c, d], 1) returns a
// class Player {
//   constructor(name) {
//   	this.name = name;
//   }
// }

// let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
// let players = ex_names.map((n) => new Player(n));

// function duckDuckGoose(players,goose){
//   return players[(goose-1)%players.length].name
// }

// console.log((duckDuckGoose(players, 1)))


//WELCOME

//Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// function greet(language) {
// 	let GreetingsDB = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }, 
//   defaultLanguage = 'english';
//   return GreetingsDB[language] || GreetingsDB[defaultLanguage];
// }

//SORT AND STAR 
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s){
// let sorted = s.sort()
// let word = sorted[0].split("").join("***")
// return word

// }
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

//GRASSHOPPER GRADEBOOK
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


// function getGrade(s1,s2,s3){
//   let avg = (s1+s2+s3)/3
//   if(avg >=90){
//     return 'A'
//    }else if(avg >=80){
//     return 'B'
//    }else if(avg >=70){
//     return 'C'
//    }else if(avg >=60){
//    return 'D'
// }else{
//    return 'F'
//   }
  
// }


// console.log(getGrade(70,70,100))


//SUM MIXED ARRAY
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// function sumMix(x){
//   let arr=[]
//  x.forEach(item => {return arr.push(item/1)});
//  return arr.reduce((acc,curr)=>{return acc+curr},0)
// }
//other solution
// const sumMix=x=>x.reduce((a,b)=>+b+a,0)



// function sumMix(x){
//   return x.map(a=>+a).reduce((a,b)=>a+b)
// }
// function sumMix(x){
//   let sum = 0
//   for(let i=0;i<x.length;i++){
//     sum += Number(x[i])
//   }
//   return sum
// }
// console.log(sumMix([9, 3, '7', '3']))

//AREA OR PERIMETER
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// const areaOrPerimeter = function(l,w) {
//   return l===w ? l*w : (l*2)+(w*2)
//   }
// console.log(areaOrPerimeter(6,10))

//REMOVE EXCLAMATION MARKS
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeMarks(s){

//   return s.replaceAll("!","")
// }
// console.log(removeMarks("vyWnZlGnOx!PTXEJxiXnc tlADfxPIVy!wSLVcpKjBL"))

//The FEAST OF MANY BEASTS
//make a function taking two arguments of beast and dish, return true if the first and last leatter of string beast and dish are the same

// function feast(beast,dish){
//   let b = beast
//   let d = dish
// if(b[0]=== d[0]&&b[b.length-1]==d[d.length-1]){
//   return true
// }else{
//   return false
// }
  
// }
// console.log(feast("brown bear", "bear claw"))


//TRANSPORTATION ON VACATION
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d){
//   let totalCost = 0
//   if(d>=7){
//     return totalCost += (d*40) - 50
//   }else if(d>=3){
//     return totalCost += (d*40) - 20
//   }else{
//     return totalCost+=d*40
//   }
// }
// console.log(rentalCarCost())

//LOGIC DRILLS: TRAFFIC LIGHT
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// function updateLight(current){
//   if(current=="green"){
//     return "yellow"
//   }else if(current =="yellow"){
//     return "red"
//   }else{
//     return "green"
//   }
// }

// const updateLight = current =>({
//   green:"yellow",
//   yellow:"red",
//   red:"green",
// })[current]
// console.log(updateLight("red"))

//DO I GET A BONUS
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// function bonusTime(salary,bonus){
//   return bonus? `\u00A3${salary *10}`: `\u00A3${salary}`
// }
// console.log(bonusTime(10000,true))

//L1 SET ALARM
//creat function with two arguments of employed and vacation, the function should return true if you are employed and not on vacation, return false otherwise 

// function setAlarm(employed,vacation){
//   return employed>vacation
// }
// console.log(setAlarm(false,false))

//PERSONALIZED MESSAGE
//create a function that takes two arguments of name and owner, if the name is the same a owner return one greeting, else return another greeting

// function greet(name,owner){
//   return name ===owner? "Hello boss": "Hello guest"
// }


//write a function that calculates the original product price, without the VAT of 15%

// const excludingVatPrice = p => p === null ? -1: +(p/1.15).toFixed(2)
// console.log(excludingVatPrice(230))

//CLASSY CLASSES
//complete the person class by filling the constructor method that accepts a name as a string and an age as a number, to print name age is age

// class Person{
//   constructor(name,age){
//    this.name = name
//    this.age=age
//   }
//  sentence(){
//   return `${this.name}s age is ${this.age} `
//  }
//  get info(){
//   return this.sentence()
//  }
// }
// let john = new Person('john',34)
// console.log(john.info)

//DOUBLE CHAR
//given a string, return a new string where each character - case-sensitive, is repeared once 

// function doubleChar(str){
//   let arr = str.split("")
//   return arr.map((item)=>{
//     return item.repeat(2)
//   })
//   .join("")
// }

// function doubleChar(str){
//   let word = ''
//   for(let i = 0; i<str.length;i++){
//     word = word + str[i] + str[i]
//   }
//   return word
// }

// function doubleChar(str){
//   return str.split("").map((item)=>{
//     return item + item
//   }).join("")
// }
// console.log(doubleChar("StrIng"))

//WILL THERE BE ENOUGH SPACE?
//create a function that takes in three parameters, cap,on,and wait to determine if enough people can fit on the bus. 
//cap is the amount of people the bus can hold,on is the amount of people already on the bus, and wait it how many people need to get on the bus, all excluding the driver. 
//return the number of how many people can not fit on the bus

// function enough(cap,on,wait){
//   if(on + wait <= cap){
//     return 0
//   }else{
//     return (on+wait)-cap
//   }
// }
// function enough(cap,on,wait){
//   return Math.max(0,wait-cap+on)
// }
// console.log(enough(100,60,50))

//COCKROACH
//create a function that takes in the cockroache's speed in km per hour and return it in cm per second rounded down to the integer

// function cockroachSpeed(s){
// return Math.floor(s * 27.7778)/1
// }
// console.log(cockroachSpeed(1.7923560943431125))

//FIND THE FIRST NON-CONSECUTIVE NUMBER
//find the first element in the array that is not consecutive
//if the whole array is consecutive return null
//array should have at least 2 elements and could be either positive or negative integers

// function firstNonConsecutive(arr){
//  for(let i =0;i<arr.length-1;i++){
//   if(arr[i]+1!==arr[i+1]){
//     return arr[i+1]
//   }
//  }
//  return null
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7]))

//TWICE AS OLD
//create a function that takes in the fathers age and son's age and calculate how many years ado the father was twice as old as his son.

// function twiceAsOld(dadAge,sonAge){
// return Math.abs((sonAge*2)-dadAge)
// }
// console.log(twiceAsOld(36,7))

//KEEP UP THE HOOP
//write a function that takes in the number of hoops and return an encouraging message

// function hoopCount(n){
//   if(n>=10){
//     return "Great, now move on to tricks"
//   }else{
//     return "Keep at it until you get it."
//   }
// }
// console.log(hoopCount(3))

//CHECK FOR FACTOR
//create a function that takes in a factror and a base and return true if it is a factor or false if it's not

// function checkForFactor(base,factor){
//   if(base%factor===0){
//     return true
//   }else{
//     return false
//   }
// }
// const checkForFactor = (base,factor)=> !(base%factor)
// console.log(checkForFactor(10,2))

//ALL STAR CODE CHALLENGE
//create a function that accepts a string and a single character and return the number of occurences of the chracter, if there are non return 0

// function strCound(str,letter){
//   let num =0
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter)
//       num++;
//   }
  
//   return num
// }
// console.log(strCound('Hello',"o"))

//SWITCH IT UP
//create a function that takes in a number and return the number as a string

// function switchItUp(number){
//   switch(number){
//     case 0:
//       return"Zero"
//     case 1:
//       return "One"
//     case 2:
//       return "Two"
//     case 3:
//       return "Three"
//     case 4:
//       return "Four"
//     case 5:
//       return "Five"
//     case 6:return "Six"
//     case 7:return "Seven"
//     case 8:return "Eight"
//     case 9:return "Nine"
//   }
// }
// console.log(switchItUp(0))

//PARSE NICE INT FROM CHAR PROBLEM
//create a function that takes in a firls age as a string and returns as a number 

// function getAge(inputString){
//   let num = inputString.split(" ")[0]
//   return parseFloat(num)
// }
// function getAge(inputString){
//   return +inputString[0]
// }
// console.log(getAge("4 years old"))

//SQUARING THE ARGUMENT
//write a function that takes in a number and squares it,return the result

// function square(n){
//   return Math.pow(n,2)
// }
// const square = n=> Math.pow(n,2)
// console.log(square(3))

//DEBUG SAYHELLO
//fix the code to greet everyone

// const sayHello = name=> `Hello, ${name}`

//TERMINAL GAME MOVE FUNCTION
//create a gamefunction that takes in two parameters, the first one is the players starting point, the second parameter is the number of moves it must make, twice. return the spot the player landed on 

// function move(position,roll){
//   return roll*2 +position
// }
// console.log(move(3,6))

//FIND NUMBERS WHICH ARE DIVISIBLE BY GIVEN NUMBER
//complete a function that takes two arguments and returns all numbers which are divisible by the given divisor

// function divisibleBy(numbers,divisor){
//   let arr = []
//   for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]%divisor===0){
//       arr.push(numbers[i])
//     }
//   }
//   return arr
// }
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

//MERGE TWO SORTED ARRAYS
//given two sorted arrays, merge them to create one array. if they both have the same integer,remove the duplicates.if arrays are empty,return an empty array

// function mergeArray(arr1,arr2){
//  let arr3 = arr1.concat(arr2).sort((a,b)=>a-b)
// return arr3.filter((item,index)=>arr3.indexOf(item)===index)
// }
// function mergeArray(arr1,arr2){
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b)=>(a-b))))
// }
// console.log(mergeArray([1,2,3,4,5], [5,7,6,8]))

//TO SQUARE ROOT OR NOT TO SQUARE ROOT
//given an array as an input, return a new array with processing every number of the input-array as a square root or square the number

// function squareOrSquareRoot(array){
//     return array.map((x)=>{
//      const r = Math.sqrt(x)
//      return (r%1==0)? r:(x*x)
        
//     })
// }
// console.log(squareOrSquareRoot([4,3,9,7,2,1]))

//Merging sorted integer arrays without uplicates
//write a function that merges two sorted array into a single one, must only contain integer and no duplicates 

// function mergeArray(a,b){
//     let arr=a.concat(b).sort((a,b)=>a-b)
//     return arr.filter((item,index)=>arr.indexOf(item)===index)
// }
// console.log(mergeArray([1, 3, 5], [2, 4, 6]))

//SUM OF DIFFERENCES IN ARRAY
//create a function that sums the diff between consecutive pairs in the array in descending order
//[10, 2, 1] -> (10 - 2) + (2 - 1) = 8 + 1 = 9

// function sumOfDiff(arr){
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

// }
// console.log(sumOfDiff([10, 2, 1]))

//DUCK DUCK GOOSE
//given an array of player objects and an index, reutrn the name of the chosen player

// function duckDuckGooe(players,goose){
//     for(let i =0;i<players.length;i++){
//         if(i===(goose-1)%players.length){
//             return players[i]
//         }
//     }
// }
// console.log(duckDuckGooe(["a", "b", "c", "d"], 1))

//NO LOOPS 2 
//create a function given an array and an x value, return true or false if the array includes the value x without using a loop.

// function check(a,x){
//     return a.includes(x)
// }
// console.log(check([66,101],66))

//I love you, a little , a lot, passionately ... not at all
//create a function that returns the last petal and their message 
/*
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
 */

// function howMuchILoveYou(numP){
//     let phrase =
//     {
//     0: "I love you",
//     1:"a little",
//     2:"a lot",
//     3:"passionately",
//     4:"madly",
//     5:"not at all",
//     }
//     return phrase[numP%6]
// }
// console.log(howMuchILoveYou(6))

//WELL OF IDEAS
//create a function where you are give an array. if there are one or two "good" strings then return publish,more that two "good"return "i smell a series" if there are no "good" strings return fail

// function well(x){
//     let arr =[]
//     if(!x.includes("good")){
//         return "Fail"
//     }else{
//         x.map((item)=>{
//             if(item ==="good"){
//                 arr.push(item)
//             }
//         })
       
//     }
//   if(arr.length<=2){
//     return "Publish"
//   }else{
//     return " i smell"
//   }
// }
// function well(x){
//     const count = x.filter(el =>el=="good").length
//     return count >2?"Ismell a series!":count >0?"Publish":"Fail"
// }
// console.log(well(['good', 'good']))

//A WOLF IN SHEEPS CLOTHING
//create a function where you are given an array with the string of "sheep" and "wolf" if "wolf" is at the end of the array return a string if it is not return another string 

// function warnTheSheep(queue){
//     if(queue[queue.length -1]==="wolf"){
//         return "Pls go away and stop eating my sheep"
//     }else{ 
//         let loc = queue.reverse().indexOf("wolf")  
//         return `Oi! Sheep number ${ loc }! You are about to be eaten by a wolf!`
//     }
// }
// console.log(warnTheSheep(["wolf"]))

//SPEEDCODE ARRAY MADNESS
//given two integer array with length greater than 1, create a program that returns true if the sum of the squares of each element in the array is strictly greater than the sum of the cubes of each element in the second array

// function arrayMadness(a,b){
//     let squared = a.reduce((acc,curr)=>acc+Math.pow(curr,2),0)
//     let cubed = b.reduce((acc,curr)=>acc+Math.pow(curr,3),0)
//     return squared>cubed?true:false
// }
// console.log(arrayMadness([5,6,7],[4,5,6]))

//HOW MANY STAIRS WILL SUZUKI CLIMB IN 20 YEARS
//given an array of week day with nested array of number of stairs suzuki climed that day, estimate the number of stairs he will have climbed in 20 years
//20 ys estimate = one year total stairs * 20

// function stairsIn20(s){
   
//     for(let i =0,sum=0;i<s.length;i++){
//         for(let j=0;j<s[i].length;j++){
//             sum +=s[i][j]
//         }
//     }
//     return sum*20
// }
// function stairsin20(stairs){
//     let total = 0
//     for(value of stairs){
//         for(num of value){
//             total +=num 
//         }
//     }
//     return total *=20
// }
// function stairsin20(a){
    
//     return 20 * a.reduce((s,a)=>s+a.reduce((s,n)=>s+n,0),0)
// }

//FIND THE DIFF IN AGE
//given an array of ages, return a new array of youngest age,oldest age, and the diff between the two

function differenceInAges(ages){
    let arr=[]
   arr.push(Math.min(...ages))
   arr.push(Math.max(...ages))
   arr.push(Math.max(...ages)-Math.min(...ages))
   return arr

}
console.log(differenceInAges([82, 15, 6, 38, 35]))
