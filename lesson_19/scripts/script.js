const form = document.querySelector ("form")
const cardsSection = document.querySelector(".cards-section")
const addCardButton = document.querySelector("#add_card")
const removeCardsButton = document.querySelector("#remove_cards")


//объявить переменную flashCards который пустой массив
//добавить обработчик события submit для form и предотвратить перезагрузку страницы
let flashCards = []
form.addEventListener("submit", function(event){
    event.preventDefault()
})


//получить доступ к етим двум input из javascript (questionInput, answerInput)
//добавить обработчик событий click для addCardButton и сохранить значение из input
// вопроса в переменную questionText, значение из интупа ответа в переменную answerText
const questionInput = document.querySelector("#question")
const answerInput = document.querySelector("#answer")
addCardButton.addEventListener("click", function (){
    const questionText = questionInput.value
    const answerText = answerInput.value
    form.reset()
//создать объект который называется flashcards и у которого есть два свойства:
//1 - question = хранит в себе вопрос
//2 - answer = хранит в себе ответ
// потом добавить его в массив flashCards
const flashCard = {
    question: questionText,
    answer: answerText
}
flashCards.push(flashCard)
updateFlashCards()
})

removeCardsButton.addEventListener("click", function(){
    flashCards = []
    updateFlashCards()
})

function updateFlashCards() {
    cardsSection.innerHTML = ""
    for (let index = 0; index <flashCards.length; index++) {
        const {question, answer} = flashCards[index];

        // <div class="card">
        //     <div class="card-front">
        //         <p>Questions</p>
        //     </div>
        //     <div class="card-back">
        //         <p>Answer</p>
        //     </div>
        // </div>
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        const cardFront = document.createElement("div")
        cardFront.classList.add("card-front")
        const cardFrontParagraph = document.createElement("p")
        cardFrontParagraph.innerText = question
        cardFront.append(cardFrontParagraph)
        const cardBack = document.createElement("div")
        cardBack.classList.add("card-back")
        const cardBackParagraph = document.createElement("p")
        cardBackParagraph.innerText = answer
        cardBack.append(cardBackParagraph)
        cardDiv.append(cardFront, cardBack)
        cardsSection.append(cardDiv)   
    }
}