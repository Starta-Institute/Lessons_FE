// Dom = Document Objeckt Model

// const pValue = document.querySelector("p")
// console.log(pValue.innerText);
// pValue.innerText = "Hello workd!"
// console.log(pValue.innerText);

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs);

// for (let index = 0; index < paragraphs.length; index++) {
//   console.log(paragraphs[index]);   
// }


// const p = paragraphs[index]
// console.log(p.innerText);

// const p = document.querySelector(".main .info_1")
// p.innerText = "Hello world"

// const p = document.querySelectorAll (".info_1")
// let originalArray = [1,2,3,4]
// let newArray = originalArray
// console.log(newArray);

// содержимое двух параграфов перенести в новый массив и вывести на екран
// const paragraphs = document.querySelectorAll(".info_1")
// let newArray = []
// for (let index = 0; index < paragraphs.length; index++) {
// newArray.push(paragraphs[index].innerText)
// }
// console.log(newArray);

// const img = document.querySelector("img")
// console.log(img.src);
// console.log(img.alt);
// img.setAttribute("src", "https://avatars.dzeninfra.ru/get-zen_doc/1567436/pub_5cc4a65e6e47b000b3222961_5cc4af1fc839c900b058ce07/scale_1200") 
// console.log(img.src);
// img.setAttribute("alt", "dog")
// img.setAttribute("data-content", "hello world")

// const img = document.querySelectorAll(".main .img")

// for (let index = 0; index < 5; index++) {
//  img[index].setAttribute("src", "https://avatars.dzeninfra.ru/get-zen_doc/1567436/pub_5cc4a65e6e47b000b3222961_5cc4af1fc839c900b058ce07/scale_1200")  
// }

const div = document.querySelector(".main")
const p = document.createElement("p")
p.innerText = "hello world"
div.append(p) // добавляет элемент после всех дочерних элементов

// div.prepend // добавляет элемент до первого дочерного элемента 



    
// const paragraphsTexts = ["Day 1", "Day 2", "Day 3","Day 4"];
// const elementsString = "";
//  for (let i = 0; i < paragraphsTexts.length; i++) {
//   elementsString += `<p>${paragraphsTexts[i]}</p>`;
// }
//  elementsString = `<div class=".main">${elementsString}</div>`;

const paragraphsTexts = ["Day 1", "Day 2", "Day 3","Day 4"];
for (let index = 0; index < paragraphsTexts.length; index++) {
    const p = document.createElement("p")
    p.innerText = paragraphsTexts[index]
    div.append(p)    
}


    

