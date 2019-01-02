//Variables
const qwerty = document.getElementById("qwerty");
const letters = document.getElementsByClassName("letter");
const shownLetters = document.getElementsByClassName("show");
const overlay = document.getElementById("overlay");
const ul = document.getElementsByTagName("ul")[0];
const h3 = document.getElementsByTagName("h3")[0];
const heart = document.getElementsByTagName("img");
const buttons = document.getElementsByTagName("button");
const buttonReset = document.querySelector(".btn__reset");
const overlayTitle = document.querySelector("h2");
let missed = 0;
let score = 0;
let reset = false;

//Score default settings
h3.style.position = "absolute";
h3.style.left = "25px";
h3.style.top = "10px";
h3.textContent = `Score : ${score}`;

//Phrases
const phrases = [
   "A fish out of water",
   "A nest of vipers",
   "Abracadabra",
   "All Greek to me",
   "As white as snow",
   "Back to basics",
   "Battle royal",
   "Below the belt",
   "Bells and whistles",
   "Bite the bullet",
   "Bite the dust",
   "Bitter end",
   "Blue moon",
   "Break a leg",
   "Bucket list",
   "Carpe diem",
   "Charmed life",
   "Cold feet",
   "Cut to the chase",
   "Close quarters",
   "Doom and gloom",
   "Enough is enough",
   "Easy as pie",
   "End of story",
   "Fair and square",
   "Fall from grace",
   "Fall on your sword",
   "Fashion victim",
   "Feeding frenzy",
   "Fellow traveller",
   "Fiddlesticks",
   "Finders Keepers",
   "Go berserk",
   "Hands down",
   "Harvest moon",
   "Hat trick",
   "Hem and haw",
   "Hocus pocus",
   "Hold your horses",
   "Household words",
   "Inside out",
   "Keep at bay",
   "Know your onions",
   "La dolce vita",
   "Last but not least",
   "Less is more",
   "Lie low",
   "Loose cannon",
   "Love is blind",
   "Make my day",
   "Mend fences",
   "Night owl",
   "On the bubble",
   "On your tod",
   "One for the road",
   "Out of sight",
   "Pass the buck",
   "Pennies from heaven",
   "Pie in the sky",
   "Pig in a poke",
   "Pitch black",
   "Point to point",
   "Prime time",
   "Pull up stakes",
   "Road less travelled",
   "Rise and shine",
   "Run of the mill",
   "Shake a leg",
   "Shiver my timbers",
   "Shoot through",
   "Silence is golden",
   "Silver bullet",
   "Silver lining",
   "Sleep tight",
   "Sleeveless errand",
   "Smart casual",
   "Speak of the Devil",
   "Stick in the mud",
   "Such is life",
   "Surf and turf",
   "Swing for you",
   "Take a back seat",
   "Take the upper hand",
   "Talk to the hand",
   "Tell me about it",
   "The bitter end",
   "The camera cannot lie",
   "The last straw",
   "The more the merrier",
   "Thorn in the flesh",
   "Thumbs up",
   "Tie the knot",
   "Tit for tat",
   "Tooth and nail",
   "Top notch",
   "Touch and go",
   "Trick or treat",
   "Tuckered out",
   "Turn a blind eye",
   "Under the thumb",
   "Upside down",
   "Vice versa",
   "Weasel words",
   "When pigs fly",
   "Whistle and flute",
   "White as snow"
];

//Get a random phrase and split that phrase into array of letters
function getRandomPhraseAsArray(arr) {
   let randomPhrase = Math.floor(Math.random() * arr.length);
   return arr[randomPhrase].split("");
}

/*loop through the array of letters and create a new li,
change class names depending on if the li has a letter or a space*/
function addPhraseToDisplay(arr) {
   for (let i = 0; i < arr.length; i += 1) {
      const createLi = document.createElement("li");
      createLi.textContent = arr[i];
      ul.appendChild(createLi);
      if (arr[i].match(/^[A-Za-z]+$/)) {
         createLi.className = "letter";
      } else {
         createLi.className = "space";
      }
   }
}

//Call the two functions
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

/*Check if the button clicked match the letter, if yes show
and add to the score*/
function checkLetter(btn) {
   let guessed = false;
   for (let i = 0; i < letters.length; i += 1) {
      if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
         letters[i].className += " show";
         guessed = true;
         score += 50;
         h3.textContent = `Score : ${score}`;
      }
   }
   return guessed;
}

//Show the respective overlay of win or lose
function checkWin() {
   if (letters.length === shownLetters.length) {
      overlay.style.display = "";
      overlay.className = "win";
      overlayTitle.innerHTML = "Awesome You Earned 1000 Points!!!";
      buttonReset.textContent = "I Want More";
      reset = true;
      score += 1000;
      h3.className = "scoreOverlay";
      h3.textContent = `Score : ${score}`;
   } else if (missed === 5) {
      overlay.style.display = "";
      overlay.className = "lose";
      overlayTitle.innerHTML = "Game Over";
      buttonReset.textContent = "Start Again!";
      reset = true;
      h3.className = "scoreOverlay";
      h3.textContent = `Highest Score : ${score}`;
   }
}


function resetGame() {
   if (reset === true) {
      missed = 0;
      for (let i = 0; i < heart.length; i += 1) {
         heart[i].src = "images/liveHeart.png";
      }
      for (let i = 0; i < letters.length; i += 1) {
         letters[i].className = "letter";
      }
      for (let i = 0; i < buttons.length; i += 1) {
         buttons[i].className = "";
         buttons[i].disabled = false;
      }
      const li = document.querySelectorAll(".letter, .space");
      for (let i = 0; i < li.length; i += 1) {
         ul.removeChild(li[i]);
      }
      const newPhraseArray = getRandomPhraseAsArray(phrases);
      addPhraseToDisplay(newPhraseArray);
   }
}

/*Hide the overlay by clicking Start Game, 
if won or lost the game overlay appears again,
and can reset by clicking the button*/
buttonReset.addEventListener("click", () => {
   overlay.style.display = "none";
   if (reset === true && missed === 5) {
      resetGame();
      score = 0;
      h3.className = "score";
      h3.textContent = `Score : ${score}`;
   } else {
      resetGame();
      h3.className = "score";
   }
});

/*This listens to button events and evaluates the info by checkLetter
and checkWin functions, then decides if to remove a heart*/
qwerty.addEventListener("click", event => {
  const letterFound = checkLetter(event);
   if (event.target.tagName === "BUTTON") {
      event.target.className = "chosen";
      event.target.disabled = true;
      if (letterFound === false && missed < 5) {
         missed += 1;
         if (missed === 1) {
            heart[0].src = "images/lostHeart.png";
            event.target.disabled = true;
         } else if (missed === 2) {
            heart[1].src = "images/lostHeart.png";
            event.target.disabled = true;
         } else if (missed === 3) {
            heart[2].src = "images/lostHeart.png";
            event.target.disabled = true;
         } else if (missed === 4) {
            heart[3].src = "images/lostHeart.png";
            event.target.disabled = true;
         } else if (missed === 5) {
            heart[4].src = "images/lostHeart.png";
            event.target.disabled = true;
         }
      }
   }
   checkWin();
});
