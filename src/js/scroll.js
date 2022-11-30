const scrollBtn = document.getElementById('scrollUpLink');

window.onscroll = () => {
  if (window.scrollY < 700) {
      scrollBtn.classList.remove('isShowBtn');
      scrollBtn.classList.add('isShowBtn_hide');
  } else if (window.scrollY > 700) {
      scrollBtn.classList.add('isShowBtn');
    scrollBtn.classList.remove('isShowBtn_hide');
  }
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};

window.onLoad = () => {
  window.onscroll = function (e) {
    let winY = window.scrollY;
    if (winY > 300) {
      winY = null;
    }
  };
};
    




