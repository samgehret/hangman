window.onbeforeunload = function () {
  return 'you can not refresh the page'
}

var wordArray = prompt('please enter the secret word').split('')
var submit = document.getElementById('submit')
var form = document.getElementById('form')
var checker = []
var guessedWrongArray = []

for (var i = 0; i < wordArray.length; i++) {
  var box = document.createElement('div')
  box.className = `box box${i}`
  var letterBoard = document.querySelector('.tiles')
  letterBoard.appendChild(box)
}
var guessedRightArray = []
for (var j = 0; j < wordArray.length; j++) {
  guessedRightArray.push('')
}

submit.addEventListener('click', (e) => {
//   e.preventDefault()
//   window.onbeforeunload = function () {
//     return 'you can not refresh the page'
//   }
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
