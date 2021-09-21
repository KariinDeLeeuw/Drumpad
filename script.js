//Voeg een keydown functie toe, waarbij je het geluid met de toetsenbord kan besturen. En voeg een keyCOde toe, elke toets op het toetenbord heeft een nummer. https://keycode.info/
window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
});

function playsound () {
  var geluid = new Audio('sounds/boom.wav');
  geluid.play();
}

//Hier komen alle geluiden in een array
var allSounds = [
  {   
      naam:"boom",
      soundLink: new Audio('sounds/boom.wav'),
      color: "#0C87FA",
      icon: "img/base.svg"
  },
  {
      naam:"clap",
      soundLink: new Audio('sounds/clap.wav'),
      color: "#6CC223",
      icon: "img/clap.svg"
  },
  {
      naam:"hihat",
      soundLink: new Audio('sounds/hihat.wav'),
      color: "#0C87FA",
      icon: "img/hihat.svg"
  },
  {
      naam:"kick",
      soundLink: new Audio('sounds/kick.wav'),
      color: "#6CC223",
      icon: "img/kick.svg"
  },
  {
      naam:"openhat",
      soundLink: new Audio('sounds/openhat.wav'),
      color: "#0C87FA",
      icon: "img/openhat.svg"
  },
  {
      naam:"ride",
      soundLink: new Audio('sounds/ride.wav'),
      color: "#6CC223",
      icon: "img/ride.svg"
  },
  {
      naam:"snare",
      soundLink: new Audio('sounds/snare.wav'),
      color: "#6CC223",
      icon: "img/snare.svg"
  },
  {
      naam:"tink",
      soundLink: new Audio('sounds/tink.wav'),
      color: "#6CC223",
      icon: "img/tink.svg"
  },
  {
      naam:"tom",
      soundLink: new Audio('sounds/tom.wav'),
      color: "#6CC223",
      icon: "img/tom.svg"
  },
  {
      naam:"vocals1",
      soundLink: new Audio('sounds/vocals1.wav'),
      color: "#6CC223",
      icon: "img/vocals.png"
  },
  {
      naam:"chicken",
      soundLink: new Audio('sounds/chicken.wav'),
      color: "#FEEC66",
      icon: "img/chicken.svg"
  },
  {
      naam:"cat",
      soundLink: new Audio('sounds/cat.wav'),
      color: "#FEEC66",
      icon: "img/cat.svg"
  },
  {
      naam:"bird",
      soundLink: new Audio('sounds/bird.wav'),
      color: "#FEEC66",
      icon: "img/bird.svg"
  },
  {
    naam:"cow",
    soundLink: new Audio('sounds/cow.wav'),
    color: "#FEEC66",
    icon: "img/cow.svg"
  }
];