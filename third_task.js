const TARGET_NUMBER = 3
const ARRAY_SIZE = Math.round(Math.random()*100)


// Generate random array with length = ARRAY_SIZE.
function arrayGeneration(){
    let array = Array.from({length: ARRAY_SIZE}, () => Math.floor(Math.random() * ARRAY_SIZE))
    return array
}


// New array with needed values.
function arrayFilter(){
    let newArray = arrayGeneration().filter(x => x % TARGET_NUMBER === 0 && x !== 0)
    return newArray
}


// Only unique numbers in array.
function makeUniqueNumbers(){
    let uniqueSet = new Set(arrayFilter())
    let uniqueArray = [...uniqueSet]
    return uniqueArray
    
}


function textOutput(){
    let finalArray = makeUniqueNumbers()
    if (finalArray.length === 0){
        console.log('В массиве нет чисел, кратных 3')
    } else {
        console.log(finalArray)
        }
}


textOutput()
