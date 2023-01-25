export const Menu = ( ) => {
    const $menu = document.createElement('nav')
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Search</a>
    <span>-</span>
    <a href="https://aprendejavasript.org" target='_blank' rel='noopener'>Learn JS</a>
    <span>-</span>
    <a href="#/contact">Contacto</a>
    `
    $menu.classList.add('menu')
    return $menu
}