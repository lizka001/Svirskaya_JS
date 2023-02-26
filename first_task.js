const TARGET_NUMBER = 7
const SUCCESS_TEXT_OUTPUT = 'Привет'
const ERROR_TEXT_OUTPUT = 'Ваше число недостаточно большое для приветствия'
const TEXT_INPUT_HELPER = "Введите число: "


// Reading number from user. Function returns inputed value.
function valueReading(){
    let value = prompt(TEXT_INPUT_HELPER)
    return value
}


// Function checks inputed number. If value > TARGET_NUMBER function returns true.
function valueCheck(){
    let inputValue = valueReading()

    if(inputValue && inputValue > TARGET_NUMBER){
        return true
    } else{
        return false
    }
}


// Function outputs SUCCESS_TEXT_OUTPUT if valueCheck returned true.
function textOutput(){
    let comparasingResult = valueCheck()
    if(comparasingResult){
        console.log(SUCCESS_TEXT_OUTPUT)
    } else {
        console.log(ERROR_TEXT_OUTPUT)
    }

}


textOutput()
