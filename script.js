
window.onload = () => {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    percentPosition: true
  });
};