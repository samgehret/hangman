window.onbeforeunload = function () {
  return 'you can not refresh the page'
}

var wordArray = prompt('please enter the secret word').split('')
var submit = document.getElementById('submit')
var form = document.getElementById('form')

var guessedWrongArray = []
var guessedRightArray = []

for (var i = 0; i < wordArray.length; i++) {
  var box = document.createElement('div')
  box.className = `box box${i}`
  var letterBoard = document.querySelector('.tiles')
  letterBoard.appendChild(box)
}

for (var j = 0; j < wordArray.length; j++) {
  guessedRightArray.push('')
}

// event listener on the submit button
submit.addEventListener('click', (e) => {
    var checker = []
// this for loop will take the value input in the box and compare to every word
// in the wordArray. If a match, it will store the letter in an array called checker
  for (var i = 0; i < wordArray.length; i++) {
    if (form.value === wordArray[i]) {
      var compareBox = document.querySelector('.box' + i)
      compareBox.innerHTML = form.value
      checker.push(form.value)
      guessedRightArray[i] = form.value
      if (guessedRightArray.toString() === wordArray.toString()) {
        alert('you win!!!!')
      }
    }
  }
  // if checker length = zero, it means no match was found.
  if (checker.length === 0) {
    var box = document.createElement('div')
    box.className = 'box'
    var guessedLetters = document.querySelector('.guessedletters')
    box.innerHTML = form.value
    guessedLetters.appendChild(box)
    guessedWrongArray.push(form.value)
    console.log(guessedWrongArray.length)
    var indexSelector = document.querySelector(`.index${guessedWrongArray.length}`)
    indexSelector.classList.remove('hidden')
    // console.log(`.index${guessedWrongArray.length}`)
    if (guessedWrongArray.length === 6) {
      alert('you lose')
    }
  }
})
