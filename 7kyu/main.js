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


function dropCap(n){
  //converts to array seperated at the space
let array = n.split(" ")
//loops through the array
for(let i = 0; i < array.length; i++){
  //do this if the element in the array is greater than two characters
  if(array[i].length > 2){
    //stores the new version of the word
    //take the element and capitalize the first character then combine it with the rest of the word keeping it lowercase
    array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1).toLowerCase()
  }
}
//returns the array as string 
return array.join(" ")
}

console.log(dropCap('apple of banana'))

//other solution

function dropCap(n){
  return n.replace(/\S{3,}/g, w => w.slice(0,1).toUpperCase() + w.slice(1).toLowerCase())
}