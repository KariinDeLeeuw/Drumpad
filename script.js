function closeMenu() {
  console.log("menu sluiten");
}

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

//Hier komen alle keycodes gekoppeld aan een drumpad in een array
var drumpadSounds = [
  {
      key:"103",
      naam:allSounds[0].naam,
      soundLink: allSounds[0].soundLink,
      color:allSounds[0].color,
      icon: allSounds[0].icon
  },
  {
      key:"104",
      naam:allSounds[1].naam,
      soundLink: allSounds[1].soundLink,
      color:allSounds[1].color,
      icon: allSounds[1].icon
  },
  {
      key:"105",
      naam:allSounds[2].naam,
      soundLink: allSounds[2].soundLink,
      color:allSounds[2].color,
      icon: allSounds[2].icon
  },
  {
      key:"100",
      naam:allSounds[3].naam,
      soundLink: allSounds[3].soundLink,
      color:allSounds[3].color,
      icon: allSounds[3].icon
  },
  {
      key:"101",
      naam:allSounds[4].naam,
      soundLink: allSounds[4].soundLink,
      color:allSounds[4].color,
      icon: allSounds[4].icon
  },
  {
      key:"102",
      naam:allSounds[5].naam,
      soundLink: allSounds[5].soundLink,
      color:allSounds[5].color,
      icon: allSounds[5].icon
  },
  {
      key:"97",
      naam:allSounds[6].naam,
      soundLink: allSounds[6].soundLink,
      color:allSounds[6].color,
      icon: allSounds[6].icon
  },
  {
      key:"98",
      naam:allSounds[7].naam,
      soundLink: allSounds[7].soundLink,
      color:allSounds[7].color,
      icon: allSounds[7].icon
  },
  {
      key:"99",
      naam:allSounds[8].naam,
      soundLink: allSounds[8].soundLink,
      color:allSounds[8].color,
      icon: allSounds[8].icon
  }
]