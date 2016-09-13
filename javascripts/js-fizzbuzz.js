// iife to protect global scope
(() => {
  // strict
  'use strict'
  // initialize output text
  let outputText = ''
  // get main output div
  const outputMain = document.getElementById('main__output')

  // add event listener to form submit event
  document.getElementById('form__fizzbuzz').addEventListener('submit', (event) => {
    event.preventDefault()
    checkInput()
  })

  // clear input
  function clearInput () {
    document.getElementById('form__submit').value = ''
  }

  // check input
  function checkInput () {
    console.log('checked')
    let value = document.getElementById('form__submit').value
    const formOutput = document.getElementById('form__output')
    if (isNaN(value)) {
      formOutput.innerHTML = '<span class="error">Numbers only, please.</span>'
      clearInput()
    } else {
      formOutput.innerHTML = ''
      getFizzBuzz(value)
      clearInput()
    }
  }

  // output span function
  function outputToDiv (text, type) {
    // set output text to given arg
    outputText = text
    // create span for i
    const spanOutput = document.createElement('span')
    // create text node for i
    const outputContent = document.createTextNode(outputText)
    // set span class to given arg
    spanOutput.className = type
    // append outputcontent (outputtext node) to span
    spanOutput.appendChild(outputContent)
    // append span to main output div
    outputMain.appendChild(spanOutput)
  }
  function getFizzBuzz (num) {
    while (outputMain.firstChild) {
      outputMain.removeChild(outputMain.firstChild)
    }
    // initialize i
    let i = 1
    // max count
    const countMax = num
    // while loop to iterate through 1 to countmax
    while (i <= countMax) {
      // if i is a multiple of 3
      if (i % 3 === 0 && i % 5 !== 0) {
        // output fizz and set fizz class on span
        outputToDiv('Fizz', 'output__fizz')
      // else if i is a multiple of 5
      } else if (i % 5 === 0 && i % 3 !== 0) {
        // output buzz and set buzz class on span
        outputToDiv('Buzz', 'output__buzz')
      // else if i is a multiple of both
      } else if (i % 3 === 0 && i % 5 === 0) {
        // output fizzbuzz and set fizzbuzz class on span
        outputToDiv('FizzBuzz', 'output__fizzbuzz')
      // else (if its not divisible by either)
      } else {
        // output the number and do not set a class for span
        outputToDiv(i, '')
      }
      // increment i by 1
      i++
    }
  }
})()
