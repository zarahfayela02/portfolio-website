
console.log("Hello there! Welcome to my Portfolio site!")

const heroText = document.querySelector('.hero-text');
const header = document.querySelector('#navigation');

window.addEventListener('scroll', () => {
  const headerHeight = header.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY > headerHeight) {
    // Fade out as we scroll past the header
    const fadeAmount = 1 - (scrollY - headerHeight) / 200; // 200px fade range
    heroText.style.opacity = fadeAmount < 0 ? 0 : fadeAmount;
  } else {
    heroText.style.opacity = 1; // fully visible above header
  }
});


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}