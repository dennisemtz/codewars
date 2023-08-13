

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


