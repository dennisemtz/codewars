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


function duplicates(arr){
   let array = []
   arr.reduce((a,b)=>{
    if(a===b){
        return array.push(b)
    }
   })
   return array
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))
