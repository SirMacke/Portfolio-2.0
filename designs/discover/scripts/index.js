
var menuStatus = 0;

function menu() {
  const contentOpacity = document.getElementById('content-opacity');
  const content = document.getElementById('content');
  const long = document.getElementById('long');
  const short = document.getElementById('short');

  if (menuStatus == 0) {
    contentOpacity.style.display = 'block';
    content.style.display = 'flex';

    long.style.transform = 'rotate(45deg)';
    long.style.width = '35px';
    long.style.top = '20px';
    long.style.left = '6px';

    short.style.transform = 'rotate(-45deg)';
    short.style.width = '35px';
    short.style.top = '20px';
    short.style.left = '6px';

    menuStatus = 1
  } else if (menuStatus == 1) {
    contentOpacity.style.display = 'none';
    content.style.display = 'none';

    long.style.transform = 'rotate(0deg)';
    if (screen.width > 350) {
      long.style.width = '40px';
    } else {
      long.style.width = '35px';
    }
    long.style.top = '12.5px';

    short.style.transform = 'rotate(0deg)';
    if (screen.width > 350) {
      short.style.width = '30px';
    } else {
      short.style.width = '25px';
    }
    short.style.top = '27.5px';

    menuStatus = 0
  }
}
