// initialize global variables
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
var winMessage = document.createElement('h2')
var instructions = document.querySelector('.instructions')
var winCount = 0
var lossCount = 0

function clearBoard () {
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
  while (instructions.hasChildNodes()) {
    instructions.removeChild(instructions.firstChild)
  }
  document.querySelector('.head').innerHTML = ''
}

function checkInput () {
  if (!captureWord.value) {
    alert('please enter a word')
  } else {
    document.querySelector('.startanewgame').classList.remove('blinking')
    return true
  }
}

function setBoard () {
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
  for (var j = 0; j < wordArray.length; j++) {
    guessedRightArray.push('')
  }
  document.querySelector('.submission').classList.add('blinking')
}

function startNewGame () {
  if (checkInput()) {
  // clear the current game board
  // Used W3 schools to help with this
  // https://www.w3schools.com/jsref/met_node_removechild.asp
    clearBoard()
  // capture the word to be guessed in an input
    setBoard()
  // create an array with empty spots for the same length as the input word
  }
}

function checkWin () {
  if (guessedRightArray.toString() === wordArray.toString()) {
    winMessage.className = 'winning'
    winMessage.innerHTML = 'You Win!! Start a new game above'
    document.querySelector('.endmessage').appendChild(winMessage)
    document.querySelector('.submission').classList.remove('blinking')
    document.querySelector('.startanewgame').classList.add('blinking')
    winCount++
    document.getElementById('wins').innerHTML = winCount
  }
}

function checkLoss () {
  if (guessedWrongArray.length === 6) {
    winMessage.className = 'losing'
    winMessage.innerHTML = `You Lose! Answer is '${wordArray.join('').toUpperCase()}.' Start a new game above`
    document.querySelector('.endmessage').appendChild(winMessage)
    document.querySelector('.submission').classList.remove('blinking')
    document.querySelector('.startanewgame').classList.add('blinking')
    document.querySelector('.head').innerHTML = 'X  X'
    lossCount++
    document.getElementById('losses').innerHTML = lossCount
  }
}

// define function to check the letter in the input box
function checkLetter () {
  if (!endMessage.hasChildNodes()) {
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
        checkWin()
      }
    }

  // if checker length = zero, it means no match was found.
    if (checker.length === 0 && wordArray.length > 0) {
    // add a box for a wrong guess and put the incorrectly guessed letter inside
      var box = document.createElement('div')
      box.className = 'box'
      var guessedLetters = document.querySelector('.guessedletters')
      box.innerHTML = form.value
      guessedLetters.appendChild(box)
      guessedWrongArray.push(form.value)
      var indexSelector = document.querySelector(`.index${guessedWrongArray.length}`)
      indexSelector.classList.remove('hidden')
      checkLoss()
    }
    form.value = ''
  }
}

// event listener on the submit button
submit.addEventListener('click', (e) => {
  checkLetter()
})

// event listener for enter key on form to guess letters
form.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    checkLetter()
  }
})
// event listener for new game button
startGameButton.addEventListener('click', (e) => {
  startNewGame()
})
// event listener for enter key on new game
captureWord.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    startNewGame()
  }
})
