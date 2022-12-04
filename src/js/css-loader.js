export function cssLoader(visibility, loaderRef) {
  if (visibility === 'show') {
    loaderRef.classList.add('loader-kolo');
  }
  if (visibility === 'hide') {
    loaderRef.classList.remove('loader-kolo');
  }
}
