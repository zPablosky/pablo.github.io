const viewPasswordGenerate = document.getElementById('viewPasswordHCheck');
const lengthCharacter = document.querySelector('.lengthCharacter');
const inputRangeCharacter = document.getElementById('rangeCharacteres');
const includeFeatureButton = document.querySelectorAll('.includeFeatureButton');
const countStrengthPassword = document.querySelectorAll('.countStrength');
const buttonGeneratePassoword = document.querySelector('.btnGeneratePassword');
const rangeStrengthText = document.querySelector('.rangeStrengthText');

const arrayCharacteres = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ',
    'z', 'x', 'c', 'v', 'b', 'n', 'm',
];

const arraySymbold = [
    '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/',
    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*',
    '(', ')', '_', '+', '{', '}', '|', ':', '"', '<',
    '>', '?'
];

const arrayNumbers = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
]

function ramdomCharacters (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        
        [array[random], array[i]] = [array[i], array[random]];
      }
      
      return array;
}

inputRangeCharacter.addEventListener('input', () => {
    let valueRange = inputRangeCharacter.value
    console.log(valueRange)
    lengthCharacter.textContent = valueRange
})

function createPassword (valueRange) {
viewPasswordGenerate.textContent = '';

let valuePassword = [];

arrayCharacteres.forEach((character) => {
    valuePassword.push(character)
})

if(includeFeatureButton[2].className.includes('clickIncludeButton')){
    arrayNumbers.forEach((number) => {
        valuePassword.push(number)
    })
}else{
    console.log('No Existe')
} 

if(includeFeatureButton[3].className.includes('clickIncludeButton')){
    arraySymbold.forEach((symbold) => {
        valuePassword.push(symbold)
    })
}

let limitRange = []

valuePassword.forEach((element) => {
    limitRange.push(element)
})

let newArrayRamdom = ramdomCharacters(limitRange, limitRange.length)

let passwordGenerate = newArrayRamdom
// console.log(passwordGenerate)

passwordGenerate.forEach((range, index) => {
    let rangeCheck = []

    if(index > parseInt(lengthCharacter.textContent)) {
        return
    }else{
        rangeCheck.push(range)
        viewPasswordGenerate.textContent += `${rangeCheck.slice().join('')}`
    }

    if(index < 6){
        rangeStrengthText.textContent = 'DEBIL'
    
        for(let i = 0; i < 2.; i++){
            countStrengthPassword[i].classList.add('clickIncludeButton');
        }
     }

     if(index > 12){
        rangeStrengthText.textContent = 'NORMAL'

        for(let i = 0; i < 3; i++){
            countStrengthPassword[i].classList.add('clickIncludeButton');   
        }
    }

    if(index > 18){
        rangeStrengthText.textContent = 'FUERTE'

        for(let i = 0; i < 4; i++){
            countStrengthPassword[i].classList.add('clickIncludeButton');
        }
    }  
  })
}

function agreeOptionsPassword () {
    for(let i = 0; i < includeFeatureButton.length; i++){
        includeFeatureButton[i].addEventListener('click', () => {
                includeFeatureButton[i].className = 'clickIncludeButton'
            })
    }
}

agreeOptionsPassword ()

buttonGeneratePassoword.addEventListener('click', () => {
    createPassword ()

    if(includeFeatureButton[0].className.includes('clickIncludeButton')){
        viewPasswordGenerate.textContent = `${viewPasswordGenerate.textContent.toLocaleUpperCase()}`
    }else{
        // console.log('Hubo un Error')
    }

    if(includeFeatureButton[1].className.includes('clickIncludeButton')){
        viewPasswordGenerate.textContent = `${viewPasswordGenerate.textContent.toLocaleLowerCase()}`
    }else{
        // console.log('Hubo un Error')
    }

    // console.log(viewPasswordGenerate.textContent)
})
