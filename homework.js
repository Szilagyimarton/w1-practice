//No.1
function myResult(x){
  console.log(x)
}

function createWord(fristPart,secondPart){
  let word = fristPart+secondPart
  return word
}
myResult(createWord("kis","kacsa"))

//No.2

function showResult(y){
  console.log(y)
}

function multiply(a,b){
  let result  = a*b
  return result
}
showResult(multiply(3,4))

//No.3

function getResult(z){
  console.log(z)
}

function centiToMeters(cm){
  return cm /100 +" m"
}
function metersToCenti(meter){
  return meter * 100 +" cm"
}
getResult(centiToMeters(300))
getResult(metersToCenti(4))