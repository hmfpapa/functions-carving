const createWoodBlock = () => {
    // Return an object with 4 properties.
const woodObject = {
    type: "wood block",
    length: 10,
    material: "pine",
    purpose: "flute"
}
return woodObject
}

const createBeautifulCarving = (woodObject) => {
    //create and return a string using the key value pairs from the woodObject
const string = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
return string}

//call function created above and assign to a new variable
const woodBlock = createWoodBlock()


//call function that creates a string invoking the variable just created
  const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)