let variable1 = "kismacska"
let variable2 = 101
let variable3 = true
let variable4 = null

let variableArray = ["alma", "barack", "szilvaa", "vegyes"]
let variableArray2 = [1,2,3,4,5]
let variableArray3 = ["autó", 54, true, undefined, false, "62"]
let variableArray4 = [variable1,variable2,variable3,variable4]

//console.log(variableArray4[2])


/* let counter = 0

while (counter <= 5){
  console.log(counter)
  counter = counter + 1 // shortcut: counter++
} */

/* for(let counter = 0; counter < 5; counter++){
  console.log(counter)
} */

/* for(let index = 0; index < variable1.length; index++){
  console.log(variable1[index])
}
 */
for(let index = 0; index < variableArray.length; index++){
  /* console.log(variableArray[index]) */
  if (variableArray[index].length % 2 === 1) {                
      console.log(variableArray[index],"paratlan")
  }   else {
    console.log(variableArray[index], "paros")
  }
}

for(let index = 0; index < variableArray.length; index++){
  /* console.log(variableArray[index]) */
  if (variableArray[index].includes ('l')) {                
      console.log(variableArray[index],"tartalmaz")
  }   else {
    console.log(variableArray[index], "nem tartalmaz")
  }
}