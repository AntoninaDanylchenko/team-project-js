
//функція рендера сторінки My Library.
function drawMyFilm(e) {
  e.preventDefault();
    someEl(".card").innerHTML = "";
    
  const filmInLocal = JSON.parse(localStorage.getItem("array"));
  const draw = filmInLocal.map((item) =>`<div class="container">
    <h4><b>${item.title}</b></h4>
    <p>${item.vote_count}</p>
  </div>`
    ).join()
  console.log(draw);
  someEl(".card").innerHTML = draw;
  }

// функція додавання фільму до localStoreg.
async function locSetOne() {
  // дістаємо фільми з LocalStoreg
  const filmInLocal = JSON.parse(localStorage.getItem("array"));
  if (filmInLocal === null) {
    console.log("Пусто");
  }
  else {
    console.log(filmInLocal, "фільми що містяться у локал стореджі");
    filmInLocal.map(i => i.title ? console.log(i.title) : console.log(i.name));
  }
  // фільм який при натискані хочемо додати до localStoreg catchFilmId()
  const filmToAdd = await myFilm(catchFilmId()).then(results => results);
  console.log(filmToAdd, "фільм що хочемо додати до локал сторедж");
  console.log(filmToAdd.title);
  // масив що будемо додавати до localStorage
  let filmArr = [];
  // логіка додавання фільмів до localStoreg
  if (filmInLocal === null) {
    if (filmToAdd.title === undefined) {
      console.log('стався збій, спробуйте ще раз');
      return
    }
    filmArr.push(filmToAdd);
    localStorage.setItem("array", JSON.stringify(filmArr))
    console.log("localStoreg була пуста, фільм додано");
    return
  }
  else if (filmInLocal.find(item => item.id === filmToAdd.id) || filmToAdd.title === undefined)
  { 
    console.log("вже є");
    return
  }
  console.log("фільму ще не маю, добавляємо");
  filmArr = [...filmInLocal, filmToAdd];
  filmArr.map(i => i.title ? console.log(i.title) : console.log(i.name));
  localStorage.setItem("array", JSON.stringify(filmArr));
  return
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const APIKEY = "f68134e3023166cb9cb0f095aa9e1cfe";

// функція отримання фільму по id, ПОТРІБНО БУДЕ ПЕРЕВИКОРИСТАТИ ФЦНКЦІЮ ЮРІЯ
function myFilm(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f68134e3023166cb9cb0f095aa9e1cfe`)
  .then((r) => r.json());
}

// функція вибору елементу дом
const someEl = (el) => document.querySelector(el);

// СЛУХАЧ ЯКИЙ ПРИ НАТИСКАННІ НА КНОПКУ ДОБАВЛЯЄ ФІЛЬМ В LocalStoreg
someEl(".BtnTestAdd").addEventListener("click", locSetOne)



// функція рандомного id фільма для тесту, потрібно буде використовувати айді фільма
function catchFilmId() {
  const filmIdArr = [436270, 505642, 90669, 119051, 668461, 632856, 338958]
  const filmId =filmIdArr[Math.floor(Math.random() * (filmIdArr.length - 0))];
  console.log(filmId);
  return filmId
}
// Малювання сторінки на основі данних з LocalStorage
someEl(".BtnTestShow").addEventListener("click", drawMyFilm);

//функція рендера сторінки My Library
