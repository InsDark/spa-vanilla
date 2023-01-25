import API from './../helpers/wp-api.js'

export const Title = () => {
    const $h1 = document.createElement('h1');
    $h1.innerHTML = `
        <a href='${API.DOMAIN}' target='_blank'>${API.NAME.toUpperCase()}</a>
    `

    return $h1
}