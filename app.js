//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letters = document.getElementsByClassName('letter');
let missed = 0;


//Hide the overlay by pressing Strat Game 
buttonReset.addEventListener('click', () => {
 overlay.style.display = 'none';
});

//All phrases in an Array
const phrases = [
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
   }
  //let regex = /^[A-Za-z]+$/.value;
  //if (arr[i].textContent === )

  
  //let regex = /^[A-Za-z]+$/;
  //let value = regex.value;
  //if (arr[i].textContent === )


   //let regex =  /^[A-Za-z]+$/;
   //if(! regex)


//Call the two functions
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


//Function to check if the button clicked match the letter
function checkLetter(btn) {
   let guessed = null;
   for (let i = 0; i < letters.length; i += 1) {
      if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
         guessed = true;
         letters[i].className += ' show, chosen';
         btn.target.disabled = true;
      }
   } return guessed;
}

qwerty.addEventListener('click', (event) => {
   letterFound = checkLetter(event);
   if (letterFound === 'null') {
      missed = 1;
   }
   checkWin();
});




 function checkWin () {
  if (document.getElementsByClassName('show').length === document.getElementsByClassName('letter').length){
//If they’re equal, show the overlay screen with the “win” class and appropriate text. 
     overlay.style.display = '';
     overlay.className = 'win';
  }else {
//the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.
  }
 }