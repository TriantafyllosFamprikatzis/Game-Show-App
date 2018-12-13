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

//extra make it show among with each phrase also the meaning of it

//Function to loop through the Array of strings
function getRandomPhrasesAsArray(arr){
 let phrase = '';
 for(let i = 0; i < Math.floor(Math.random() * phrases.length); i +=1){
 phrase = phrases[i];
   }
  return phrase = phrase.split('');
  }


//Function to display a phrase
function addPhraseToDisplay(arr){
 for(let i = 0; i < 1; i +=1){
    const ul = document.getElementsByTagName('ul')[0];
    const li = document.createElement('li');
    li.textContent = getRandomPhrasesAsArray(phrases);
    ul.appendChild(li);
    if (phrases === [a-zA-Z]) {
      element.classList.add('letter');
    }
 }
}
const phraseArray = getRandomPhrasesAsArray(phrases);
addPhraseToDisplay(phraseArray);