
export function cssLoader(visibility, loaderRef) {
  if (visibility === 'show') {
    loaderRef.classList.add('loader-film')
  }
  if (visibility === 'hide') {
    loaderRef.classList.remove('loader-film')
  }
}