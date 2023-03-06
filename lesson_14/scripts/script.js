const urlToPost = prompt("Give url to post")
const imgUrl = prompt("Give url to img")

const img = document.createElement("img")
img.setAttribute("src", imgUrl)

const a = document.createElement("a")
a.innerText = "Url to post"
a.setAttribute("href, urlToPost")

const div = document.querySelector("div.main")
div.append(newA, newImg)