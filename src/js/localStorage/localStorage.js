// //функція рендера сторінки My Library.
// function drawMyFilm(e) {
//   e.preventDefault();
//   someEl('.card').innerHTML = '';

//   // функція додавання фільму до localStoreg.
//   async function locSetOne() {
//     // дістаємо фільми з LocalStoreg
//     const filmInLocal = JSON.parse(localStorage.getItem('array'));
//     if (!filmInLocal) {
//       console.log('Пусто');
//     } else {
//       console.log(filmInLocal, 'фільми що містяться у локал стореджі');
//       filmInLocal.map(i =>
//         i.title ? console.log(i.title) : console.log(i.name)
//       );
//     }
//     // фільм який при натискані хочемо додати до localStoreg catchFilmId()
//     const filmToAdd = await myFilm(catchFilmId()).then(results => results);
//     console.log(filmToAdd, 'фільм що хочемо додати до локал сторедж');
//     console.log(filmToAdd.title);
//     // масив що будемо додавати до localStorage
//     let filmArr = [];
//     // логіка додавання фільмів до localStoreg
//     if (!filmInLocal) {
//       if (!filmToAdd.title) {
//         console.log('стався збій, спробуйте ще раз');
//         return;
//       }
//       filmArr.push(filmToAdd);
//       localStorage.setItem('array', JSON.stringify(filmArr));
//       console.log('localStoreg була пуста, фільм додано');
//       return;
//     } else if (
//       filmInLocal.find(item => item.id === filmToAdd.id) ||
//       filmToAdd.title === undefined
//     ) {
//       console.log('вже є');
//       return;
//     }
//     console.log('фільму ще не маю, добавляємо');
//     filmArr = [...filmInLocal, filmToAdd];
//     filmArr.map(i => (i.title ? console.log(i.title) : console.log(i.name)));
//     localStorage.setItem('array', JSON.stringify(filmArr));
//     return;
//   }
// }
