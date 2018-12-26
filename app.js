//Variables
const QWERTY = document.getElementById('qwerty');
const PHRASE = document.getElementById('phrase');
const BUTTON_RESET = document.querySelector('.btn__reset');
const OVERLAY = document.getElementById('overlay');
const LETTERS = document.getElementsByClassName('letter');
const MISSED = 0;

//Hide the overlay by pressing Strat Game 
BUTTON_RESET.addEventListener('click', () => {
 OVERLAY.style.display = 'none';
});

//All phrases in an Array
const PHRASES = [
'A fool and his money are soon parted',
'A friend in need is a friend indeed',
'Beauty is only skin deep',
'Caught redhanded',
'Close quarters',
'Doom and gloom',
'Enough is enough'
];

//Get a random phrase and split that phrase into array of letters
function getRandomPhraseAsArray (arr) {
   let randomPhrase = Math.floor(Math.random() * (arr.length));
   return arr[randomPhrase].split('');
   }

/*loop through the array of letters and, 
create a new li if matches a letter and not a space */
 function addPhraseToDisplay (arr) {
      for (let i = 0; i < arr.length; i += 1) {
         let li = document.createElement('li');
         let ul = document.getElementsByTagName('ul')[0];
         li.textContent = arr[i];
         ul.appendChild(li); 
           if (arr[i].match(/^[A-Za-z]+$/))   {
            li.className = 'letter';
         }
         else {
            li.className = 'space';
         }
      }
   };

//Call the two functions
const PHRASE_ARRAY = getRandomPhraseAsArray(PHRASES);
addPhraseToDisplay(PHRASE_ARRAY);


//Function to check if the button clicked match the letter
 function checkLetter (btn)  {
   let guessed = null;
   for(let i = 0; i < LETTERS.length; i += 1){
      if (btn.target.textContent === LETTERS[i].textContent.toLowerCase()) {
         guessed = true;
         LETTERS[i].className += ' show, chosen';
         btn.target.disabled = true;
      }
   }return guessed;
 }

 QWERTY.addEventListener('click', (event) => {
   letterFound = checkLetter(event);
 });



 