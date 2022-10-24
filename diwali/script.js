
anime.timeline({loop: true})
.add({
  targets: '.ml15 .word',
  scale: [14,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 800,
  delay: (el, i) => 800 * i
}).add({
  targets: '.ml15',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }