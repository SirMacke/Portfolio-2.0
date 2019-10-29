
function donate(option) {
  var reset = document.getElementsByClassName('option');

  for (let i = 0; i < reset.length; i++) {
    reset[i].style.backgroundColor = 'gainsboro';
  }

  var newGreen = document.getElementById(option)
  newGreen.style.backgroundColor = '#83B845';
}
