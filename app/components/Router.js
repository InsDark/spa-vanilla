import { ajax } from '../helpers/ajax.js'
import API from './../helpers/wp-api.js'
import { Post } from './Post.js'
import { PostCard } from './PostCard.js'

export const Router = async () => {
    const d = document
    const w = window
    const {hash} = location
    const $PostsContainer = d.querySelector('#posts')
    if(!hash || hash == '#/') {
        await ajax({
    
            url: API.POSTS,
            cbSuccess: (posts) => {
                posts.forEach(post => {
                    
                    $PostsContainer.appendChild(PostCard(post))
                })
                
            } 
        })  

    } else if (hash == '#/contact') {

    } else if (hash.includes('#/search')) {
        await ajax({
            url: `${API.SEARCH}${localStorage.getItem('search-word')}`,
            _cbSuccess: (posts) => {
                if (posts.length == 0) { $PostsContainer.innerHTML = 'No posts found with the search word ' + localStorage.getItem('search-word')} 
                posts.forEach(post => {
                    $PostsContainer.appendChild(PostCard(post))
                })
            },
            get cbSuccess() {
                return this._cbSuccess
            },
            set cbSuccess(value) {
                this._cbSuccess = value
            },
        })
    } else {
        const postId = localStorage.getItem('post-id')
        await ajax({
            url: `${API.POST}/${postId}`,
            cbSuccess: (post) => {
                console.log(post)
                $PostsContainer.appendChild(Post(post))
                
            }
        })
    }
    d.querySelector('.loader').style.display = 'none'

}