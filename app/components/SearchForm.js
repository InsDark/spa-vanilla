export const SearchForm = ( ) => {
    
    const $form = document.createElement('form');
    $form.classList.add('search-form');
    const $input = document.createElement('input');
    $input.name = 'search'
    $input.type ='search'
    $input.autocomplete = 'off'
    $input.placeholder = 'Search....'
    $form.appendChild( $input );

    if(location.hash.includes('#/search')) {
        $input.value = localStorage.getItem('search-word')
    }

    document.addEventListener('search', (e) => {
        if(!e.target.matches("input[type='search']")) return false
        if(!e.target.value) localStorage.removeItem('search-word') 
    } )

    document.addEventListener('submit', (e) => {
        if(!e.target.matches('.search-form')) return false;

        e.preventDefault()
        localStorage.setItem('search-word', e.target.search.value)
        location.hash = `#/search?query=${e.target.search.value}`
    })
    return $form
}