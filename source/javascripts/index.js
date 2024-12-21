import 'bootstrap';

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded");
})

document.addEventListener('DOMContentLoaded', function() {
  let yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

