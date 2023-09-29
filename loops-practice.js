let countries = ["Hungary", "croatia", "Romania","Bulgaria"]

/* for( let index = 0; index < countries.length; index++){
  if(countries[index].length % 2 === 0){
    console.log(countries[index], "Ez egy páros szám")
  } else {
    console.log(countries[index], "ez egy páratlan szám")
  }
} */
let var1 = "kuTYa";

/* for(let index = 0; index < var1.length; index++){
  console.log(var1[index])
}

for(let i=0; i < countries.length; i++){
 if(countries[i].includes("u")){
    console.log( countries[i] + "  Van benne u betu")
 } else{
  console.log(countries[i] + "  nincs benne u betu")
 }
}
  */
for(let index=0; index < var1.length; index++){
  if(var1[index]){
    console.log(var1[index].toUpperCase())
  } else {
    console.log(var1[index].toLowerCase())
  }
}