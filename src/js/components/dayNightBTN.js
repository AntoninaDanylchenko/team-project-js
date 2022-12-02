import { refs } from "../references/references";


refs.nightBtn.addEventListener("click", () => {
    const bodyFilm = document.querySelector('body');
    console.log(bodyFilm);
    refs.nightIcon.classList.add('night_color');
    refs.dayIcon.classList.remove("day_color")
    
refs.bgImg.classList.remove('bg-img-night');
    return  bodyFilm.classList.add("night_layout")
}
)

refs.dayBtn.addEventListener("click", () => {
    const bodyFilm = document.querySelector('body');
    console.log(bodyFilm);
    refs.nightIcon.classList.remove('night_color');
    refs.dayIcon.classList.add("day_color")
    refs.bgImg.classList.add('bg-img-night');
    return  bodyFilm.classList.remove("night_layout")
}
)
