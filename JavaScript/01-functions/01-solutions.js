// 01
function removeDuplicates(array){
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) result.push(array[i])
    }

    return result
}

console.log(removeDuplicates([1,2,3,1]))

// 02
const recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

// 03
const books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];
  
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }

// 04
function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));

// 05
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));

// 06
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

// 07
const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    const result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}


for (let multiplier = 0; multiplier <= 10; multiplier++) {
 for (let i = 0; i <= 10; i++) {
   const result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}

// 08
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];

function guessLetter(letter) {
    let goodGuess = false;
    let moreToGuess = false;
    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');

// 09
function countChars(string, letter) {
  let letterCounter = 0;
  
  for (let position = 0; position < string.length; position++) {

    if (string[position] === letter) {
        letterCounter += 1;
    }

  }
  return letterCounter;
}

console.log(countChars("essous.com", "o"));

// 10
function uniqueChars(string) {
  let uniqLetters = "";

  for (let x = 0; x < string.length; x++) {
    if (uniqLetters.indexOf(string[x]) == -1) {
        uniqLetters += string[x];
    }
  }
  return uniqLetters;
}  
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));
console.log(uniqueChars("aabbccdd"));