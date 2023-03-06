// const arr = [1, 2, 3, 4, 5]

// function forEach(arr, callback) {
//     for (let index = 0; index < arr.length; index++) {
//         callback(arr[index])  
//     }
// }    

// function pow (a){
//     console.log(a**2);
// }

// function cube(a){
//     console.log(a**3);
// }

// forEach(arr, pow)
// forEach(arr, cube)



// const prgph = document.querySelector("p")
// function clicked() {
//     console.log("Clicked");
// }
// prgph.addEventListener("click", clicked)


// const btnIncer = document.querySelector("#incer")
// const prgph = document.querySelector("p")
// const btnDecr = document.querySelector("#decer")
// let counter = 0;
// function clickHandlerIncr() {
//     counter += 1
//     prgph.innerText = counter

//     // prgph.innerText = +prgph.innerText + 1
// }

// function clickHandlerDecr() {
//     counter = counter - 1
//     prgph.innerText = counter   
// }

// btnIncer.addEventListener("click", clickHandlerIncr)
// btnDecr.addEventListener("click", clickHandlerDecr)

// const prgph = document.querySelector("p")
// function clickHandler(event) {
//     console.log(event);
//     prgph.innerText += event.key
// }
// document.addEventListener("keydown", clickHandler)

// написать программу, которая формирует на основе массива строк
// с множестом праграфов
// const arr = ["First prgph", "Second prgph", "Thirst prgph"]
// for (let index = 0; index < arr.length; index++) {
//     const newParagraph = document.createElement("p");
//     newParagraph.innerText = arr[index]
//     newParagraph.addEventListener("click", function() {
//         newParagraph.innerText = "*****"
//     })
//     div.append (newParagraph)   
// }

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const thumbnailsDiv = document.querySelector("#thumbnails")
const previewDiv = document.querySelector("preview")
const emptyImgElem = document.createElement("img")
previewDiv.append(emptyImgElem)
for (let index = 0; index < array.length; index++) {
    const newImgElem = document.createElement("img")
    newImgElem.setAttribute("src", images[index])
    newImgElem.addEventListener("click", function(){
        emptyImgElem.setAttribute("src", images[index])
    })
    thumbnailsDiv.append(newImgElem)
}