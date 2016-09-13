// iife to protect global scope
(() => {
  // strict
  'use strict'
  // get main output div
  var outputMain = document.getElementById('main__output')

  // add event listener to form submit event
  document.getElementById('form__reversestring').addEventListener('submit', (event) => {
    event.preventDefault()
    checkInput()
  })

  // clear input
  function clearInput () {
    document.getElementById('form__submit').value = ''
  }

  // check input
  function checkInput () {
    // get form submit value
    var value = document.getElementById('form__submit').value
    // get reverse string
    getReverseString(value)
    // clear input on submit
    clearInput()
  }

  // reverse given string
  function getReverseString (str) {
    // remove previous
    while (outputMain.firstChild) {
      outputMain.removeChild(outputMain.firstChild)
    }
    // get main output
    var formOutput = document.getElementById('main__output')
    // convert given string to array and reverse it
    var arrayString = str.split('').reverse()
    // join reversed array to convert back to string
    var reversedString = arrayString.join('')
    /*
    + append reversed string to main output
    + this also escapes it by creating a text node
    */
    formOutput.appendChild(document.createTextNode(reversedString))
  }
})()
