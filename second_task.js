const TARGET_NAME = 'вячеслав'
const SUCCESS_TEXT_OUTPUT = 'Привет, Вячеслав'
const ERROR_TEXT_OUTPUT = 'Нет такого имени'
const TEXT_INPUT_HELPER = "Введите имя:"


// Reading name from user. Function returns inputed value.
function valueReading(){
    let value = prompt(TEXT_INPUT_HELPER)
    return value
}


// Function checks inputed value. If value === TARGET_NAME function returns true.
function valueCheck(){
    let inputValue = valueReading()

    if(inputValue && inputValue.toLowerCase() === TARGET_NAME){
        return true
    } else{
        return false
    }
}


// Function outputs SUCCESS_TEXT_OUTPUT if valueCheck returned true.
function textOutput(){
    let name = valueCheck()
    if(name){
        console.log(SUCCESS_TEXT_OUTPUT)
    } else {
        console.log(ERROR_TEXT_OUTPUT)
    }

}

textOutput()
