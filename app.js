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

//Function to get a random phrase and split it to arrays
function getRandomPhraseAsArray(arr){
  let randomPhrase = Math.floor(Math.random() * (arr.length));
  return arr[randomPhrase].split("");
   }
//document.body.innerHTML = getRandomPhraseAsArray(phrases);


//Function to display a phrase
function addPhraseToDisplay(arr){
   let ul = document.getElementsByTagName('ul')[0];
   let li = document.createElement('li');
  // let text = phrase.value;
 for(let i = 0; i < li.length; i +=1){
    li[i].textContent = arr;
    ul.appendChild(li);
   
    // if (i == this) {//DOES NOT WORK
    //   li.classList.add('letter');
    li.className = 'letter';
    
    // }
 }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
