//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const missed = 0;

//Hide the overlay with a click
buttonReset.addEventListener('click', () => {
 overlay.style.display = 'none';
});

//All phrases in an Array
let phrases = [
'A fool and his money are soon parted',
'A friend in need is a friend indeed',
'Beauty is only skin deep',
'Caught red-handed',
'Close quarters',
'Doom and gloom',
'Enough is enough'
];

// Function to get a random phrase and split it to arrays
function getRandomPhraseAsArray (arr) {
   let randomPhrase = Math.floor(Math.random() * (arr.length));
   return arr[randomPhrase].split("");
   }

//Function to display a phrase
 function addPhraseToDisplay (arr) {
      for (i = 0; i < arr.length; i += 1) {
         let letters = /^[A-Za-z]+$/;
         let match = arr[i].match(letters);
         let li = document.createElement('li');
         let ul = document.getElementsByTagName('ul')[0];
         li.textContent = arr[i];
         ul.appendChild(li); 
           if (match)   {
            li.className = 'letter';
         }
      }
   };

   //Call the functions
   const phraseArray = getRandomPhraseAsArray(phrases);
   addPhraseToDisplay(phraseArray);

