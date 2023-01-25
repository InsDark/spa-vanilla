export const PostCard = (props) => {
    let {title, id, slug, date, _embedded} = props;
    let urlPost =  _embedded['wp:featuredmedia']
    if(_embedded.self) {
        title = _embedded.self[0].title
        urlPost = _embedded.self[0].jetpack_featured_media_url
        slug = _embedded.self[0].slug
        date = _embedded.self[0].date
    } else {
        urlPost = _embedded['wp:featuredmedia'][0].source_url
    }
    if(urlPost === false || urlPost === undefined) {
        urlPost = 'http://placeimg.com/200/200/animals'
    }
    const dateFormat = new Date(date).toLocaleString()
    const $post = document.createElement('article');
    $post.classList.add('post-card')
    $post.innerHTML = `
        <img src='${urlPost}' alt='${title.rendered}'>
        <h2>${title.rendered}</h2>
        <p>
            <time datetime='${date}'>${dateFormat}</time>
            <a href='#/${slug}' data-id='${id}'>Read Post</a>
        </p>
        `

    document.addEventListener('click', (e) => {
        if(!e.target.matches('.post-card a')) return false;
        localStorage.setItem('post-id', e.target.dataset.id);
    })
    return $post
}