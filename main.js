var hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', navToggle);

function navToggle() {
  var navLinks = document.querySelector('ul');
  var style = getComputedStyle(navLinks);

    if (navLinks.classList.contains('expanded')) {
      navLinks.classList.remove('expanded');
    } else {
      navLinks.classList.add('expanded');
    }
  }