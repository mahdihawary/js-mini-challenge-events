/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("#header")

header.addEventListener('click', function(e){
  toggleColor(e.target)
})

/***** Deliverable 2 *****/

const playerForm = document.querySelector("#new-player-form")

playerForm.addEventListener('submit', function(e){
  e.preventDefault()
  const form = e.trget
  
  const player = {
    number: "",
    name: "Mo Salah",
    nickname: "The Egyptian King",
    photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg",
    likes: 1000
  }
  debugger
  player.number = e.target.number.value
  player.name = e.target.name.value
  player.nickname = e.target.nickname.value
  player.photo = e.target.photo.value

  renderPlayer(player)

})

/***** Deliverable 3 *****/

function clickHandler() {
  document.addEventListener('click', function (e) {
    if (e.target.matches('.like-button')) {
     const  likes = e.target.parentElement.querySelector(".likes")
      const numberLikes = parseInt(likes.innerText, 10) +1
      likes.innerText = `${numberLikes} Likes`
    }
  })
}

clickHandler()
