function getName() {
    const name = prompt("Write your name")
    console.log(name)
}

// getName()

function check (){
    const value = prompt("write a number")
    if (value %2 === 0) {
        console.log("да")
    } else{
        console.log("НЕТ")
    }
}

//  check ()

// const num = 6

// function power(a, b) {
//     const result = a**b
//     console.log(result)
//     console.log(num) 
//     let num = 8
//     console.log(num)
// }

// power(2, 2)
// console.log(result)
// // power(4, 3)
// // power(5, 4)
// // power(6, 2)

// if (1===1){
//     var a = 123;
//     let b =123;
// }

// console.log('a = ${a}');
// console.log('b =${b}');

// var a = 5
// var a = 6
// var a = 7
// var a = 8
// var a = 9
// var a = 10

// console.log(a);

// function power(a, b = 2) {
//   let result = a**b

//   return result

//  }

//  let a = power(3, 2)
//  let b = power(4, 2)
//  let c = power(a + b, 0.5)
//  console.log(power(power(3)+ power (4), 0.5));


//  function check(a) {
//     // if (value %2 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return a % 2 === 0
//  }

//  console.log(check(4));
//  console.log(check(5));


// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {
//         newArray.push(index)
//     }
//     return newArray
// }

// console.log(getNewArray(9));
// console.log(getNewArray(10));
// console.log(getNewArray(50));
// console.log(getNewArray(32));

// const getArray = getNewArray

// console.log(getArray(9));
// console.log(getArray(10));
// console.log(getArray(50));
// console.log(getArray(32));


// const power = function(a) {
//     return a**2
// }

// console.log(power(4));

// const obj = {
//     print: console.log
    
// }

// const cout = console.log


// obj.print(123)
// obj.print(125)
// obj.print(22)
// obj.print(95)

// cout(123)

 function getNewArray(a, b) {
     let newArray = []
     for (let index = a; index <= b;) {
        newArray.push(index)}
     
     return newArray
 }

 console.log(getNewArray(9, 15));



    
    
    // const result = power(4, 3)
    // console.log(result);

