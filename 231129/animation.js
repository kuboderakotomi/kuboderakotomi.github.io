function startAnimation(){
  var animation = anime({
    targets: "#animation-box",
    translateX: 250,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  document.querySelector('.restart-demo .restart').onclick = animation.restart;
}




