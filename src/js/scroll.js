 winddow.onLoad = () => {
    window.onscroll = function (e) {
        let winY = window.scrollY;
        if (winY > 300) {
            winY = null;
        }
        };
        
const scrollBtn = document.querySelector('.isShowBtn');

     window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
             scrollBtn.classList.add('isShowBtn_hide');
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    }
}


   




