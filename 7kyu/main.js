// function string(){
//     let arr = []
//     for(let i = 99; i >=2; i-- ){
//         arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
//         arr.push(`Take one down pass it around, ${i-1} bottles of beer on the wall`)
        
//     }
//     arr.push(`1 bottle of beer on the wall, 1 bottle of beer.`)
//     arr.push(`Take one down and pass it around, no more bottles of beer on the wall`)
//     arr.push(`No more bottles of beer on the wall, no more bottles of beer.`)
//     arr.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
//     return arr
// }



// console.log(string([0]))


//remove the values of the second array from the first array and return the numbers that are not removed into a new array 

// Array.prototype.remove_=function(integer_list, value_list){
//     return integer_list.filter(el=>{
//         value_list.index0f(el)=== -1
//     })
// }

// function remove(integer_list,value_list){
//     //go through each element of the integer_list array
//     let filtered = integer_list.filter(e=>{
//         //each element is defined by 'e'
//         //return the 'e'or number from integer list, that is not included in the value_list array
//         return !value_list.includes(e)
//     })
//     return filtered
// }

// console.log(remove([1, 1, 2, 3, 1, 2, 3, 4],[1, 3]))


// youtube like button
//function that takes in a list of button and returns the final state 
//buttons is an array
//if both are the name return 'nothing'
//if the last is like return like
//if the last is dislike return dislike



// function likeToDislike(button){
//     if(button.length <1 || !button){
//         return "Nothing"
//     }else if(button.length>=1){
//       return button.reduce((a,b)=>{return (a===b) ? 'Nothing' : b})
        
//     }
//     }


// console.log(likeToDislike([]))



//length and two values

//Given an integer n and two other values, build an array of size n filled with these two values alternating.

// function alternate(n, firstValue,secondValue){
//     let array = []
//     for(let i = 1; i <=n; i++){
//        i%2===1 ? array.push(firstValue) : array.push(secondValue)  
//     }
//     return array
// }

// console.log(alternate(5,true,false))


// let alternate = (n,f,s)=>{
//     return n ? [f,...alternate(n-1,s,f)] : []
// }

// console.log(alternate(5,true,false))


//find duplicates

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).


// function duplicates(arr){
//    let array = []
//    arr.reduce((a,b)=>{
//     if(a===b){
//         return array.push(b)
//     }
//    })
//    return array
// }

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))


//LATIN SQUARES

//A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

//given n, create an array with random n numbers and n columns 
// function makeLatinSquare(n) {
//     // Your code here
// let square = []
//     let row = []
//     let column;
//     let min = 1
  

//     for(let i = 0; i<n;i++){
//         row.push( Math.floor(Math.random() * (n - min +1) + min))
        
//     }
    
// return [row]

  
//   }
// console.log(makeLatinSquare(8))

// function makeLatinSquare(n){
//     const array = []//initializes main array
//     for(let i = 1; n >=i;i++){
//         //loop where starting at 1 if the n is greater or equal to 1, continue iterating 
//         array.push(i)//adds the i to the array
//     }
//     const latinSquare = array.map((el,id,arr)=>{
//         return[...arr.slice(id+1), ...arr.slice(0,id+1)]
//     })

//     //map iterates through the array
//     //first slice starts at index 1 puts it in index 0, copies the rest
//     //second slice takes the index 0 value and adds it to the end of the created array 
//     return latinSquare
// }

// console.log(makeLatinSquare(8))


// TESTING 1-2-3

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


*/ 

//compares the array string letter to the alpha array to find its letter match output is the alpha index number and key



// function number (array){
//     return array.map(function(el,index){
//         return (index+1) + ":" + el
//     })
// }


// console.log(number(["a", "b", "c"]))


//NO IFS NO BUTS

// function noIfsNoButs(a,b){
//   switch(Math.sign(a-b)){
//     case 1:return `${a} is greater than ${b}`
//     case -1:return `${a} is smaller than ${b}`
//     case 0: return `${a} is equal to ${b}`
//   }

// }

// console.log(noIfsNoButs(5,4))


///VOWEL COUNT
/*
return the number of vowels in a given string
*/

// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }
    
//     return vowelsCount;
//   }
// console.log(getCount('cat'))


//Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

// getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.


// function getMean(arr,x,y){
//   //returns -1 
//   if(x<=1 || y <=1 || x > arr.length || y > arr.length){
// return -1
//   }else{
//     //set variables to hold the values 
//     let m1=0, m2=0
//     //loops through adds the element to the m1 variable
//     for(let i = 0; i < x; ++i){
//       m1 += arr[i]
//     }
//     //loops through and adds the variable to the m2 variable, begins at the end
//     for(let i =arr.length-y; i<arr.length; ++i){
//       m2+=arr[i]
//     }
    
//     return (m1/x+m2/y)/2
//   }
// }
// console.log(getMean([1,3,2,4], 2, 3))


///Tidy Number

// function tidyNumber(n){
//     intArr = Array.from(String(n),Number)
//     for(let i =0; i < intArr.length;i++){
//       if(intArr[i] > intArr[i + 1]) return false
//     }
//     return true
//     }
//     console.log(tidyNumber(12))


//DROPCAPS

/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space 
"   space WALK   " => "   Space Walk   " 
*/


// function dropCap(n){
//   //converts to array seperated at the space
// let array = n.split(" ")
// //loops through the array
// for(let i = 0; i < array.length; i++){
//   //do this if the element in the array is greater than two characters
//   if(array[i].length > 2){
//     //stores the new version of the word
//     //take the element and capitalize the first character then combine it with the rest of the word keeping it lowercase
//     array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1).toLowerCase()
//   }
// }
// //returns the array as string 
// return array.join(" ")
// }

// console.log(dropCap('apple of banana'))

// //other solution

// function dropCap(n){
//   return n.replace(/\S{3,}/g, w => w.slice(0,1).toUpperCase() + w.slice(1).toLowerCase())
// }


// is n divisible by...

// function isDivisible(firstN, ...otherN){
//   return otherN.every(n=> firstN % n === 0)
// }
//use spread syntax where the array is passed as argument
//compare the other numbers to the first number



//ARRAY ELEMENT PARITY

/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

(the only-positive or only-negative integer may appear more than once)
*/

// function solve(arr){
//   return arr.find((e)=>!arr.includes(-e))
// }


// console.log(solve([1,-1,2,-2,3]))

//WHAT TIME IS IT

// Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock


// let militaryTime = function(input){
//   let hour = (input.slice(-2) === 'AM' ? 0 : 12)
//   + + input.slice(0,2) % 12

//   let time = ('00' + hour).slice(-2)
//   + input.slice(2,-2)

//   return time
// }



// console.log(militaryTime('12:00:01AM'))


//THE OFFICE II

// function boredom(staff){
// let teams = { 'accounts': 1,
// 'finance'       : 2 ,
// 'canteen'       : 10, 
// 'regulation'    : 3, 
// 'trading'      : 6, 
// 'change'        : 6,
// 'IS'            : 8,
// 'retail'        : 5,
// 'cleaning'      : 4,
// 'pissing about' : 25}

// //return array of the staff keys
// let scores = Object.keys(staff)
// //map loops through the staff values and matches with the team key and stores the value
// .map(key => teams[staff[key]])
// //sums us the values
// .reduce((a,b)=>a+b,0)



// if(scores <= 80){
//   return 'kill me now'
// }else if(scores <100 && scores >80){
//   return 'i can handle this'
// }else{
//   return 'party time!!' 
// }
// }

// console.log(boredom({tim: 'change', jim: 'accounts',
// randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
// laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
// mr: 'finance' }))


//BINGO or not

// function bingo(a){
//   return [2,9,14,7,15].every(x=> a.includes(x)) ? "WIN" : "LOSE"

// }

// console.log(bingo([1,2,3,4,5,6,7,8,9,10]))

//MAX DIFF 
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

//PREP
//array lst as param
//return the difference between the highest number an lowest number in the array


// function maxDiff(list){
//   //return 0 condition
//   //else take lowest subtract from highest 
//   //math.max, math.min

//   if(list <=1){
//     return 0
//   }else{
//     return Math.max(...list) - Math.min(...list)
//   }

// }

// const maxDiff = list => list <=1 ? 0: Math.max(...list) - Math.min(...list)
// console.log(maxDiff([]))


//AREA OF A CIRCLE

// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw Error.


// function circleArea(radius){
//   if(radius <= 0){
//     throw new Error
//   }else{
//     let area=Math.PI * radius ** 2
//     return area
//   }
// }

// console.log(circleArea(68     ))

//CHARACTER CONCAT
// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// function charConcat(string){
// let str = ''
// let i =0
// let j = string.length -1
// while(i<j) str+= string[i++]+string[j--]+i
// return str
// }
// console.log(charConcat("abcdef"))

//VOWEL COUNT
//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str){
//   let vowels = ['a','e','i','o','u']
//   let count=0

//   for(let i=0;i<str.length;i++){
//     for(let j =0;j<vowels.length;j++){
//       if(str[i]===vowels[j]){
//         count++
//       }
//     }
    
//   }
//   return count

// }
// function getCount(str){
// return str.split("").filter(c=>'aeiou'.includes(c)).length
// }

// console.log(getCount('abracadabra'))

//SQUARE EVER DIGIT
//you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 is 81 and 1 is 1. (81-1-1-81)

// function squareDigits(num){
// return +num.toString().split("").map(i=>i*i).join("")
// }
//other result

// function squareDigits(num){
// let string = num.toString()
// let result = []
// for(let i = 0;i<string.length;i++){
//   result[i] = string[i]*string[i]
// }
// return Number(result.join(""))
// }
// console.log(squareDigits(9119))

//HIGHEST LOWEST
//given a string of numbers, return the highest and lowest number as a string seperated by a space 

// function highAndLow(num){
//   let sorted = num.split(" ").sort((a,b)=>b-a)
//   return [sorted[0],sorted[sorted.length-1]].join(" ")
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

//MUMBLING
//take a string and create a function that returns each character repeated by the index number it is located in,seperated by a dash, the first character being repeated is uppercase, the following lowercase

// function accum(s){
// return s.split("").map((c,i)=>(c.toUpperCase()+c.toLowerCase().repeat(i))).join("-")
// }
// function accum(str){
//   let letters=str.split("")
//   let results = []
//   for(let i =0;i<letters.length;i++){
//     results.push(letters[i].toUpperCase()+Array(i+1).join(letters[i].toLowerCase()))
//   }
//   return results.join("-")
// }
// console.log(accum("ZpglnRxqenU"))

//GET THE MIDDLE CHARACTER
//given a word, return the middle character of the word, if its even return the two middle characters

// function getMiddle(s){
// if(s.length%2==1){
//   return s.substring((s.length /2)+1,(s.length/2))
// }else if(s.length %2==0){
//   return s.substring((s.length/2)-1,(s.length/2)+1)
// }
// }
// console.log(getMiddle("handers"))

//ISOGRAMS
//create a function that returns true if a string cointains no repeating letters and false if it does

// function isIsogram(str){
//   let word = str.toLowerCase()
//   for(let i=0;i<word.length;i++){
//     if(word.indexOf(word[i])!== word.lastIndexOf(word[i])){
//       return false
//     }
//   }
//   return true
// }
//using indexof and lastindex of: the first occurence of the character is also the last occurence; does not repeat. 
// console.log(isIsogram("Aba"))

//EXES AND OHS
//create a function that takes in a string, check if it contains the same number of x and o, return a boolean, if there are no x or o return true

// function XO(str){
// str=str.toLowerCase().split("")
// return str.filter(x=>x==="x").length === str.filter(x=>x==="o").length
// }

// function XO(str){
//   if(str==""|| str ==null)return true
//   str=str.toLowerCase().split("")
//   let x=0
//   let o=0
//   for(let i =0;i<str.length;i++){
//     if(str[i]==="x"){
//       x++
//     }
//     if(str[i]==="o"){
//       o++
//     }
//   }
//   if(x===o){
//     return true
//   }
//   return false
// }

// function XO(str){
//   let x=str.match(/x/gi)
//   let o = str.match(/o/gi)
//   return (x&&x.length)===(o&&o.length)
// }
// console.log(XO("Oooxx"))

//BOILED EGGS
//create a function that takes the number of eggs to boil and return the number of minutes it would take to boil them
//up to 8 eggs at a time
//5 min to boil an egg

// function cookingTime(eggs){
// let maxEggs = 8
// let time = 5
// return Math.ceil(eggs/maxEggs) * time
// }
// console.log(cookingTime(9))

//SHORTEST WORD
//given a string of words, return the length of the shortes word(s)

// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => b.length - a.length)
//   .pop()
//   .length;


// function findShort(s){
// return Math.min(...s.split(" ").map(s=>s.length))
// }
// console.log(findShort("Let's travel abroad shall we"))

//LIST FILTERING
//return an array with the strings filtered out 

// function filterList(l){

//     return l.filter((item)=>{
//       return typeof item != "string"|| !!item instanceof String
//     })
  
// }
// console.log(filterList([1,2,'a','b']))

//CREDIT CARD MASK
//create a function that takes in a string and changes all the character besides the last for into "#", return the new string 

// function maskify(cc){
//  if(cc.length <4 || cc === null){
//     return cc
//   }else{
//     let arr = cc.split("")
//     return arr.fill("#",0,-4).join("")
//   }
// }

// function maskify(cc){
//   return cc.slice(0,-4).replace(/./g,"#")+ cc.slice(-4)
// }
// console.log(maskify("11111"))

//JADEN CASING STRINGS
//create a function that takes in a string and returns a new string where each word's first character is capitalized.

// function toJadenString(str){
//   let arr = str.split(" ")
// return arr.map((word)=>{
//   return word[0].toUpperCase()+word.slice(1)
// }).join(" ")
// }
// console.log(toJadenString("how can"))

//COMPLEMENTARY DNA
//create a function that takes a dna string and returns the complentary rna atring
// A ->T
//G -> C
// let pairs = {A:"T", T:"A",C:"G",G:"C"}
// function DNAAstrand(dna){
//  return dna.split("").map((p)=>{return pairs[p]}).join("")
// }
// console.log(DNAAstrand("TATA"))

//SUM OF TWO LOWEST POSITIVE INTEGERS
//create a function that sums the two lowest positive integers in an array, minimum 4 integers

// function sumTwo(num){
// let sorted = num.sort((a,b)=>a-b)
//  return sorted = sorted[0]+sorted[1]
// }
// console.log(sumTwo([15, 28, 4, 2, 43]))

//SUM OF NUMBERS
//given two integers, neg or pos, find the sum of all the integers between and including them and return it. if the two integers are equal return a or b

//ex:(1,0) ->1 
//(-1,2)-> 2

// function getsum(a,b){

//  let min =Math.min(a,b)
//  let max = Math.max(a,b)
//  return (max-min+1) * (min+max)/2

// }
// console.log(getsum(-1,2))

//CATEGORIZE NEW MEMBER
//given a list of pairs, return whether the member will be categorized as a senior or open. if the member is over 55 and a handicap greater than 7, they are a senior, otherwise they are open category. return as an array.

// function openOrSenior(data){
// return data.map(([age,handicap])=>{
//   if(age >54 && handicap>7){
//     return "Senior"
//   }else{
//     return "Open"
//   }
// })
// }

// function openOrSenior(data){
//   let result =[]
//   data.forEach(element => {
//     if(element[0]>=55 && element[1]>7){
//       result.push("Senior")
//     }else{
//       result.push('Open')
//     }
    
//   });
//   return result
// }

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

//FRIEND OF FOE
//given an array of names, return the names in an array that are your friends; if their name hase exaclty 4 letters they are your friend.

// function friend(friends){
//   let list = []
//   for(let i =0;i<friends.length;i++){
//     if(friends[i].length===4){
//       list.push(friends[i])
//     }
//   }
//   return list
// }
// console.log(friend(["Love", "Your", "Face", "1"]))

//STRING ENDS WITH
//create a function that takes in a two strings, if the second arugument passed ends with the first argument passed return true else false
//('abc","bc")->true
//("abc","d")->false
// function solution(str,ending){
//   // let arr1 = str.split("")
//   // let arr2=ending.split("")
//    // return arr1.slice(Math.max(arr1.length-2,1)).join("") === arr2.join("")
//   //  return str.endsWith(ending)
//   return str.substr(-ending.length)==ending
// }
// console.log(solution('sensei', 'i'))

//

//IS IT A TRIANGLE
//create a function that accepts 3 integers, the function should return true if a triangle can be built or false otherwise. All sides bust be greater than 0 to be accepted
// const isTriangle = (a,b,c)=>{return a+b>c&& b+c>a&&c+a>b}

// function isTriangle(a,b,c){
//   [a,b,c]=[a,b,c].sort((x,y)=>x-y)//sorts the numbers in increasing order
//   return a+b>c//now adding the lesser two numbers together and test if the sum is less than the third value
// }

// console.log(isTriangle(1,2,2))

//BINARY ADDITION
//create a function that adds two numbers and returns their sum as a binary as a string 

// function addBinary(a,b){
//   return (a+b).toString(2)
// }
// console.log(addBinary(10,3))

//TWO TO ONE
//create a function that takes in two strings from letters a to z. return a new sorted strinf, the longest possible containing ditcinct letters, each one only once
/*
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
 */

// const longest = (s1,s2)=> s1.concat(s2)
// .split("")
// .sort()
// .filter((item,pos,self)=>self.indexOf(item)==pos)
// .join("")
// function longest(s1,s2){
//   return (s1+s2).split("").sort().filter((a,b,c)=>a!==c[b-1]).join("")
// }
function longest(s1,s2){
return [...new Set(s1+s2)].sort().join("")
}
console.log(longest('abcdefg',"fghijk"))