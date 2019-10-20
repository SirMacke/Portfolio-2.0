const sides = ['home', 'about', 'project', 'design', 'skill', 'contact', 'social-media'];

var pageNumber = 0;

function page(num, page) {
  if (num == +1 && pageNumber != 6) {
    pageNumber++
  } else if (num == -1 && pageNumber != 0) {
    pageNumber--
  } else if (num == 0) {
    pageNumber = page
  }

  window.location.href = `#${sides[pageNumber]}`;
}

function page2(num) {
  window.location.href = `#${sides[num]}`;
}

function showPopUp() {
  setTimeout(function(){
    document.getElementById('pop-up').style.display = 'flex';
  }, 1000)
}
