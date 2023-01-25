export const Post = ({title, content, date}) => {
    const $post = document.createElement('section')
    $post.classList.add('post-page')
    $post.innerHTML = `
        <aside>
        <h2>${title.rendered}</h2>
        <time date='${date}'>${new Date(date).toLocaleString()}</time>
        </aside>
        <hr>
        <article>${content.rendered}</article>
    `
    return $post
}