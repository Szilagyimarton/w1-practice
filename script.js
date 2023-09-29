

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

console.log(obj["key"])
console.log(obj.key)
console.log(obj.key4[1])

let jsonExample = [
  {
    name: "Gipsz Jakab",
    age: 40
  },
  {
    name : "Példa Péter",
    age: 28
  },
  {
    name: "John Doe",
    age: 6
  }



]
console.log(jsonExample[0].name)