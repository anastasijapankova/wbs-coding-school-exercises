const text = '{"name" : "Dupont", "first_name" : "Jean"}';

const textNew = JSON.parse(text)
console.log(textNew)
console.log(textNew.first_name)