export const Loader  =() => {
    const $loader =document.createElement('img')
    $loader.src = 'https://pluspng.com/img-png/loader-png-load-icon-png-image-7953-500.png'
    $loader.alt = 'Loading...'
    $loader.classList.add('loader')
    return $loader
}   