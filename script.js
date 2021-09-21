window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
});

function playsound () {
  var geluid = new Audio('sounds/boom.wav');
  geluid.play();
}