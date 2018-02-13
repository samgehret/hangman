// window.onbeforeunload = function () {
//   return 'you can not refresh the page'
// }

// capture the word to be guessed
var wordArray = ''
var submit = document.getElementById('submit')
var form = document.getElementById('form')
var tileBoard = document.querySelector('.tiles')
var guessedSection = document.querySelector('.guessedletters')
var guessedWrongArray = []
var guessedRightArray = []
var startGameButton = document.getElementById('newgame')
var captureWord = document.getElementById('newword')
var endMessage = document.querySelector('.endmessage')

function startNewGame () {
  // clear the current game board
  // Used W3 schools to help with this
  // https://www.w3schools.com/jsref/met_node_removechild.asp
  while (tileBoard.hasChildNodes()) {
    tileBoard.removeChild(tileBoard.firstChild)
  }
  while (guessedSection.hasChildNodes()) {
    guessedSection.removeChild(guessedSection.firstChild)
  }

  var hangMan = document.querySelector('.hangmanboard').children
  for (var k = 0; k < hangMan.length; k++) {
    hangMan[k].classList.add('hidden')
  }

  while (endMessage.hasChildNodes()) {
    endMessage.removeChild(endMessage.firstChild)
  }
  // capture the word to be guessed in an input
  wordArray = captureWord.value.split('')
  captureWord.value = ''
  for (var i = 0; i < wordArray.length; i++) {
    guessedWrongArray = []
    guessedRightArray = []
    var box = document.createElement('div')
    box.className = `box box${i}`
    var letterBoard = document.querySelector('.tiles')
    letterBoard.appendChild(box)
  }
  // create an array with empty spots for the same length as the input word
  for (var j = 0; j < wordArray.length; j++) {
    guessedRightArray.push('')
  }
}

// define function to check the letter in the input box
function checkLetter () {
  var checker = []
// this for loop will take the value input in the box and compare to every word
// in the wordArray. If a match, it will store the letter in an array called checker
  for (var i = 0; i < wordArray.length; i++) {
    if (form.value === wordArray[i]) {
      var compareBox = document.querySelector('.box' + i)
      compareBox.innerHTML = form.value
      checker.push(form.value)
      // when it finds a match, it will push the guessed into the
      // below array. This is to keep track of which letter in the input word
      // was guessed.
      guessedRightArray[i] = form.value
      if (guessedRightArray.toString() === wordArray.toString()) {
        // alert('you win!!!!')
        // startNewGame()
        var winMessage = document.createElement('h2')
        winMessage.className = 'winning'
        winMessage.innerHTML = 'You Win!!'
        document.querySelector('.endmessage').appendChild(winMessage)
      }
    }
  }
  // if checker length = zero, it means no match was found.
  if (checker.length === 0) {
    // add a box for a wrong guess and put the incorrectly guessed letter inside
    var box = document.createElement('div')
    box.className = 'box'
    var guessedLetters = document.querySelector('.guessedletters')
    box.innerHTML = form.value
    guessedLetters.appendChild(box)
    guessedWrongArray.push(form.value)
    var indexSelector = document.querySelector(`.index${guessedWrongArray.length}`)
    indexSelector.classList.remove('hidden')
    form.value = ''
    // console.log(`.index${guessedWrongArray.length}`)
    if (guessedWrongArray.length === 6) {
      alert('you lose')
      startNewGame()
    }
  }
  // clear input box after a guess is made
  form.value = ''
}

startNewGame()

// event listener on the submit button
submit.addEventListener('click', (e) => {
  checkLetter()
})

// event listener for enter key
form.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    checkLetter()
  }
})

startGameButton.addEventListener('click', (e) => {
  startNewGame()
})

captureWord.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    startNewGame()
  }
})
