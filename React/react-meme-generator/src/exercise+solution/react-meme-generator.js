// React Meme Factory

// Memes were once just thought to be the weird pictures that parts of the internet made to entertain themselves. Today, you can see them in everyday social media interaction, used and shared and consumed every minute.

// Memes have emerged as one of the primary methods of communication on the internet, and have permeated pop culture in an almost meta fashion.  

// Anything can become a meme, and now you too can help facilitate that trend with a Meme Factory of your own!

// Your Mission

// Build a Meme Factory! You can use the imgflip API to get some meme images to work on (https://api.imgflip.com/).

// There’s an option to provide quote text directly with the API; but we want to build our own UI around the concept, so we’re not going to use that 

// Of course, you’re free to use another API if you find this one to be too limiting to your taste!

// Other meme APIs: https://www.programmableweb.com/category/meme/api

// How do I do that?

// Level 1:

// Get some meme pictures from imgflip. Select the first one to be the current meme picture
// Allow the user to write some meme text at the top and bottom of that picture, in a meme style 
// Position that text over the current picture. Hint: use the Impact font or something similar to make your text look meme-like (hint: https://www.w3schools.com/css/css_positioning.asp)
// Allow the user to change the current picture (randomly or with back/next buttons)

// Level 2:

// Allow the user to upload their own picture to create a meme (hints:https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications, https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
// Make sure the text does not overflow from the picture

// Level 3:

// Find a way to export that meme as a real picture (hint: https://www.npmjs.com/package/dom-to-image), the useRef hook might come in handy here (hint: https://reactjs.org/docs/hooks-reference.html#useref) 
// Implement a reset button to remove the generated picture from the DOM (if you injected it in the DOM) and/or clean the user input