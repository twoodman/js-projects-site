// iife to protect global scope
(() => {
  // strict
  'use strict'

  // initialize output text
  let outputText = ''

  // get main output div
  const outputMain = document.getElementById('main__output')

  // add event listener to form submit event
  document.getElementById('form__fibseq').addEventListener('submit', (event) => {
    // prevent browser default when clicked
    event.preventDefault()
    // call checkInput function
    checkInput()
  })

  // clear input
  function clearInput () {
    // just clears form submit value
    document.getElementById('form__submit').value = ''
  }

  // check input
  function checkInput () {
    // get form submit element
    let value = document.getElementById('form__submit').value
    // get form output element
    const formOutput = document.getElementById('form__output')
    // if form submit value is not a number
    if (isNaN(value)) {
      // output error msg
      formOutput.innerHTML = '<span class="error">Numbers only, please.</span>'
      // and clear input
      clearInput()
    } else {
      // else clear error msg
      formOutput.innerHTML = ''
      // call submitForm with the value submitted in form
      submitForm(value)
      // and clear input
      clearInput()
    }
  }

  // form submit to generate fibonacci sequence
  function submitForm (num) {
    // while there are still children of outputMain element
    while (outputMain.firstChild) {
      // remove them
      outputMain.removeChild(outputMain.firstChild)
      /* note:
      + this is the quickest way I've found
      + to remove all children of a parent element
      */
    }
    // call THE BIG BOY
    getFibSequence(num)
  }

  /*
  + GET YOU SOME FIBONACCI GOODNESS
  + AKA: THE BIG BOY
  */
  function getFibSequence (num) {
    // MAKE A NICE ARRAY
    let arrFib = []

    /*
    + set first two index to 0 and 1
    + first two numbers of fib seq
    */
    arrFib[0] = 0
    arrFib[1] = 1

    // OUTPUT EM BOTH BEFORE LOOP
    outputToDiv(arrFib[0], 'output')
    outputToDiv(arrFib[1], 'output')

    // loop through from 2 to given num
    for (var i = 2; i <= num; i++) {
      // push i to array THIS IS VERY IMPORTANT
      arrFib.push(i)

      /*
      + DECLARE a new variable to store
      + the SUM of the previous two
      + index values.
      + The first time this function runs,
      + this will be the number 1.
      + Because (2 - 1 = 1) + (2 - 2 = 0) = 1
      */
      let numAt = arrFib[i - 1] + arrFib[i - 2]

      /*
      + In the following, we are assigning to the CURRENT index:
      + the value gripped* in numAt
      + *(Yes, I read Eloquent JavaScript 2nd ed. recently)
      + The first time this function runs,
      + this number will be 1, which is, again,
      + the number assigned to numAt in the latter assignment.
      */
      arrFib[i] = numAt

      /*
      + then call outputToDiv
      + which outputs a span to the mainOutput
      + with a passed in class, in this case 'output'
      */
      outputToDiv(arrFib[i], 'output')
    }

    /*
    + output the original given number to div
    + just to show what was passed in
    */
    outputToDiv(' | FibSeq Position: ' + num, 'output__alt')
  }

  // output span function
  function outputToDiv (text, type) {
    // set output text to given arg
    outputText = text
    // create span for i
    var spanOutput = document.createElement('span')
    // create text node for i
    var outputContent = document.createTextNode(outputText)
    // set span class to given arg
    spanOutput.className = type
    // append outputcontent (outputtext node) to span
    spanOutput.appendChild(outputContent)
    // append span to main output div
    outputMain.appendChild(spanOutput)
  }
})()
