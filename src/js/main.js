import { findMovies } from './fetch/find-movies';
import {createResultMarkup} from "./components/createMarkupGalleryCards"
import {refs} from "./references/references"
import { log } from 'handlebars';
// import { parseInt } from 'lodash';

 
                       

async function searchingMorePopularity(page = 1) {
    findMovies.page = page;
    findMovies.query = '';
    findMovies.queryType = 'popular';
     const request = await findMovies.find()
      .then(function(answer) {
        console.log('searching by popularity, page #:', page);
        createResultMarkup(answer.results)
        console.log(answer);// у відповідь отримуємо об'єкт, який для прикладу консолимо.
      });
  }
  searchingMorePopularity();

// createResultMarkup();




let pageLinks = document.querySelectorAll('a');
let activePageNumber;
let clickedLink;
let nextPage;
let leftArrow;
let rightArrow;
let url = "";

function getUrl(start = 0) {
  return `https://api.themoviedb.org/3/?start=' + start + '&page=total_pages`;
   
}

function getData() {
 return searchingMorePopularity();
   }

// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick);

// function onClick(e) {
//   if (e.target.nodeName !== 'A') {
//     return;
//   }
// }

// const addBtn = document.querySelector('.arrow-right');
// let labelCounter = 10;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const link = document.createElement('li');
//   link.classList = "waves-effect";
//   container.appendChild(link);
//   labelCounter += 1;
// }


function addPaginationEl() {
  let paginationEl = [];
for (let i = 0; i < results.length; i++){
  console.log(results[i]);
  const li = document.createElement(li);
  li.classList = "waves-effect";
  paginationEl.push(li);
  console.log(paginationEl);
  paginationContainer.insertAdjacentElement('beforeend', paginationEl);
  
}
}


function handleNumberClick(clickedLink, leftArrow, rightArrow) {
  clickedLink.parentElement.classList = "active";
  let clickedLinkPageNumber = parseInt(clickedLink.innerText);
  const url = getUrl((clickedLinkPageNumber * 10) - 10);
  getData(url);

  switch (clickedLinkPageNumber) {
    case 1:
      disableLeftArrow(leftArrow);
      if (rightArrow.className.indexOf('disabled') !== -1) {
        enableRightArrow(rightArrow);
}
      break;
    case 10:
      disableRightArrow(rightArrow);
      if (leftArrow.className.indexOf('disabled') !== -1) {
        enableLeftArrow(leftArrow);
       }
      break;
    default:
      if (leftArrow.className.indexOf('disabled') !== -1) {
        enableLeftArrow(leftArrow);
      }
      if (rightArrow.className.indexOf('disabled') !== -1) {
        enableRightArrow(rightArrow);
      }
      break;
}

}

function handleLeftArrowClick(activePageNumber, leftArrow, rightArrow) {
  let previousPage = document.querySelectorAll('li')[activePageNumber-1];
  previousPage.classList = "active";
  url = getUrl(((activePageNumber-1) * 10) - 10);
  getData(url);

  if (activePageNumber === 10) {
    enableRightArrow(rightArrow);
}

  if (activePageNumber - 1 === 1) {
    disableLeftArrow(leftArrow);
}
  

}

function handleRightArrowClick(activePageNumber, leftArrow, rightArrow) {
  // move to next page
  let nextPage = document.querySelectorAll('li')[activePageNumber+1];
  nextPage.classList = "active";




  url = getUrl(((activePageNumber+1) * 10) - 10);
  getData(url);
  if (activePageNumber === 1) {
    enableLeftArrow(leftArrow);
}
  if (activePageNumber + 1 === 10) {
    disableRightArrow(rightArrow);
}


}

function disableLeftArrow(leftArrow) {
  leftArrow.classList = "disabled arrow-left";
  leftArrow.classList.remove('waves-effect');
}

function enableLeftArrow(leftArrow) {
  leftArrow.classList.remove('disabled');
  leftArrow.classList = "waves-effect arrow-left";
}

function disableRightArrow(rightArrow) {
   rightArrow.classList = "disabled arrow-right";
  rightArrow.classList.remove('waves-effect');
}

function enableRightArrow(rightArrow) {
   rightArrow.classList.remove('disabled');
  rightArrow.classList = "waves-effect arrow-right";
}

function init() {
  const url = getUrl();
  getData(url);
}

init()




let paginationContainer = document.querySelector('.pagination');
let selectedTag = new Set;

paginationContainer.addEventListener('click', onPaginationContainerClick);

function onPaginationContainerClick(e) {
  if (e.target.nodeName !== 'A') {
     return;
  }
  e.curentTarget.classList.add('active');
  const btn = e.curentTarget;
  isActive = btn.classList.contains('active');
  if (isActive) {
    btn.classList.delete('active');
  } else {
    btn.classList.add('active');
}

//   if (activeLink) {
//     activeLink.classList.remove('active');
// }
//   const nextActiveLink = e.curentTarget;
//   nextActiveLink.classList.add('active');
//   selectedTag = nextActiveLink.dataset.value;
  e.curentTarget.classList.toggle('active');
  console.log(selectedTag);
}




pageLinks.forEach((element) => {
  element.addEventListener('click', function () {
   
    leftArrow = document.querySelector('.arrow-left');
    rightArrow = document.querySelector('.arrow-right');
    activeLink = document.querySelector('.active');

// get active page number
    activePageNumber = parseInt(activeLink.innerText);
    if ((this.innerText === '&laquo;' && activePageNumber === 1) || (this.innerText === '&raquo;' && activePageNumber === 10)) {
      
      return;
    }

// update active class
    
    activeLink.classList = "waves-effect";
    activeLink.classList.remove('active');

    if (this.innerText === '&laquo;') {
      handleLeftArrowClick(activePageNumber, leftArrow, rightArrow);
    } else if (this.innerText === '&raquo;') {
      handleRightArrowClick(activePageNumber, leftArrow, rightArrow);
      page++;
      addPaginationEl();
    } else {
      handleNumberClick(this, leftArrow, rightArrow);
}

  });
});


