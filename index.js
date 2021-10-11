function addMovie(event){
    event.preventDefault()
    const inputField= document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")

    list.appendChild(movie)

    inputField.value = " "
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted`
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked") === true) {
        message.textContent = ` ${event.target.textContent} Watched`
    } else {
        message.textContent = `${event.target.textContent} Added back`
    }
    revealMessage()
}
function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => {
        message.className = 'hide'
    }, 1000);
    
}

const nameForm = document.querySelector("form")
nameForm.addEventListener("submit", addMovie)