// const div = document.querySelector("div")
// console.log(div.classList);
// div.classList.add("test")

// div.classList.add("box")

// div.classList.remove("root") //удаляет класс

// div.classList.toggle("main") // если нет класса с таким названием то добавляет, а если есть то удаляет

// div.classList.contains("root")// проверяет на налие класса 
// console.log(div.classList.contains("root"));

// div.classList.replace("main", "container") //заменяет указаный класс на другой

// const div = document.querySelector("div")
// const addButton = document.querySelector("#addColor")
// const removeButton = document.querySelector("#removeColor")

// addButton.addEventListener("click", function(){
//     div.classList.add("green")
// })

// removeButton.addEventListener("click", function(){
//     div.classList.remove("green")

// const div = document.querySelector(".box")
// const button = document.querySelector("#toggleColor")

// button.addEventListener("click", function(){
// div.classList.toggle("active")
// })

// const div = document.querySelectorAll("#cards .card")
// for (let index = 0; index < div.length; index++) {
//     div.addEventListener("click", function(){
//         div.classList.toggle("active")
//     })
    
// }

// const cards = document.querySelectorAll(".card")
// for (let index = 0; index < cards.length; index++) {
//     const card = cards[index]

//     card.addEventListener("click", function(){
//         card.classList.toggle("active")
//     })
    
// }
// const cards = document.querySelector("cards")
// for (let index = 0; index < array.length; index++) {
//     const cardDiv = document.createElement("div");
//     cardDiv.innerText = index
//     cardDiv.classList.add("card")
//     cardDiv.addEventListener("click", function(){
//         cardDiv.classList.toggle("active")
//     })
//   cardDiv.append(cardDiv)
// }

let word = [
    {en: "cat", ru: "кошка"},
    {en: "dog", ru: "собака"},
    {en: "bird", ru: "птица"},
    {en: "tree", ru: "дерево"},
    {en: "flower", ru: "цветок"},
]
let cards = document.querySelector("#cards")
const buttonEN = document.querySelectorAll(".en")
const buttonRU = document.querySelectorAll(".ru")

for (let index = 0; index < word.length; index++) {
    const {en , ru} = word[index];
   const russian = document.createElement("p")
    russian.innerText = ru
    russian.classList.add(".ru")
    const english = document.createElement("p")
    english.innerText = en
    english.classList.add("hidden", ".en")
      const card = document.createElement("div")
    card.classList.add("card")
        card.append(russian, english)
    //  card.addEventListener("click", function(){
    //      russian.classList.toggle("hidden")
    //      english.classList.toggle("hidden")
     }
    cards.append(card)    


 const ruParagraphs = document.querySelectorAll(".ru")
 const enParagraphs = document.querySelectorAll(".en")

buttonEN.addEventListener("click", function(){
for (let index = 0; index < enParagraphs.length; index++) {
    enParagraphs[index].classList.remove("hidden")
    ruParagraphs[index].classList.add("hidden")
}
})

buttonRU.addEventListener("click", function(){
    for (let index = 0; index < ruParagraphs.length; index++) {
        ruParagraphs[index].classList.remove("hidden")
        enParagraphs[index].classList.add("hidden")
    }
})

