// 01
console.clear()
console.log('------------01--------------')

const products = [
    {
      name: "  D3 5000 iu",
      description: "Takes care of your immune system",
      price: 10,
    },
    {
      name: "  C 1000mg ",
      description: "180 tabs of vitamin C with Bioflanoids",
      price: 3,
    },
    {
      name: " B - Complex 50 mg    ",
      description: "Balanced mix of all basic B vitamins",
      price: 13,
    },
]

function cleanSpaces(productsArray){

    productsArray.forEach((element) => {
        element.name = element.name.trim();
    });

    return productsArray
}

console.log(cleanSpaces(products))

// 02
console.log('------------02--------------')

const distances = [
    {
        city: 'Berlin',
        distance: '639mi'
    },
    {
        city: 'Paris',
        distance: '1040mi'
    }
]

function milesToKilometers(array) {

    return array.map(item => {
        
        const text = item.distance.replace('mi', 'km') // replace mi to km

        const distance = (parseInt(text.slice(0, -2)) * 1.6).toFixed() // find the numbers only part of the string, then make it a number then convert to km

        console.log("🚀 ~ distance", distance)

        item.distance = distance + 'km' // add again the km

        return item
    })
}

console.log(milesToKilometers(distances))