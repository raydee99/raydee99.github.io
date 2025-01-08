import 'bootstrap';

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded");

  if( window.sessionStorage.getItem('had_first_visit') ) {
    const nav = document.querySelector('nav')
    nav.classList.add('no-animations');
    nav.classList.remove('drop-in');

    const footer = document.querySelector('footer');
    footer.classList.add('no-animations');
    footer.classList.remove('fade-in');
  }
  else {
    window.sessionStorage.setItem('had_first_visit', 'true');
  }

})

document.addEventListener('DOMContentLoaded', function() {
  let yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

