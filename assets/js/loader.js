// const loader = document.querySelector('.loader');

$(document).ready(function () {
  // loader.style.display = 'none';

  setTimeout(() => {
    $('body').addClass('loaded');
  }, 500);

});