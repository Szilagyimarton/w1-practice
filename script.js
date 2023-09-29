

let x = 10                      //Primitives
let y = "text"
let z = true

let arr = ["one", "two", "three", "four"]   //Array
let arr2 = [1,2,3,4]
let arr3 = [ "text", 67, false , null ]

let newArray = [arr, arr2, arr3]

/* console.log(newArray[0][0])  */ // Two-dimension array


let obj = {                          //Object
  key: "value",
  key2: 20,
  key3: false,
  key4: ["egy", "ketto", "harom"],
  key5: {
    nestedKey: "nested value"
  }
}     

/* console.log(obj["key"])
console.log(obj.key)
console.log(obj.key4[1]) */

let jsonExample = [
  {
    name: "Gipsz Jakab",
    age: 40,
    "hair-count": 10,
    "zokni-count": 20
  },
  {
    name : "Példa Péter",
    age: 28,
    "hair-count": 100000,
    "zokni-count": 12
  },
  {
    name: "John Doe",
    age: 6,
    "hair-count": 0,
    "zokni-count": 37

  }



]
//console.log(jsonExample[0].name)

/* for(let i = 0; i < jsonExample.length; i++){
  let user = jsonExample[i]
  if ( user.age > 18  && user["hair-count"] > 11){
    console.log(user.name)
  } else {
    console.log(`${user.name} nem használhatja a sampont`)
  }

} */
for(let i = 0; i < jsonExample.length; i++){
let user = jsonExample[i]

if(user["zokni-count"] % 2 === 1){
  console.log(`Sell ${user.name} a single sock`)
} else {
  console.log( `${user.name} sadly has exact pair of socks`)
}
}