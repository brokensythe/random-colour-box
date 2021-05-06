let square = document.createElement("div")
square.setAttribute("class", "square")
square.innerText = "Please work"
document.body.append(square)
square.addEventListener("click", function (event) {
    square.style.backgroundColor = `#${Math.round(Math.random() * 999999)}`
})