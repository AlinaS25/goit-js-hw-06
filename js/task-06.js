const input = document.querySelector("#validation-input");

const borderInputValid = document.querySelector('#validation-input.valid');

let inputLength = 0;

const handleMakeInput = (event) => {

  if (inputLength === Number(inputData.getAttribute('data-length'))){
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');

  } else {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  }

}
inputData.addEventListener('input', (event) => {
  inputLength = event.currentTarget.value.length;
})
inputData.addEventListener('blur', handleMakeInput);




