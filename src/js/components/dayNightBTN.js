import { refs } from "../references/references";


refs.nightBtn.addEventListener("click", () => {
    const bodyFilm = document.querySelector('body');
    console.log(bodyFilm);
    return  bodyFilm.classList.add("night_layout")
}
)

refs.dayBtn.addEventListener("click", () => {
    const bodyFilm = document.querySelector('body');
    console.log(bodyFilm);
    return  bodyFilm.classList.remove("night_layout")
}
)
