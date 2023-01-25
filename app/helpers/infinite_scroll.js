import { PostCard } from '../components/PostCard.js'
import { ajax } from './ajax.js'
import API from './wp-api.js'
export const InfiniteScroll = async() => {
    const d = document
    const w = window
    
    let query = localStorage.getItem('search-word'), 
    apiUrl,
    Component

    w.addEventListener('scroll', async(e) => {
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement,
        {hash} = w.location;

        if(!(scrollTop + clientHeight >= scrollHeight)) {
            return false
        }
        
        API.page++;
        if(location.hash.includes('#/') || location.hash == '') {
            apiUrl = `${API.POSTS}&page=${API.page}`
            Component = PostCard
        } else if (hash.includes('#/search')) {
            apiUrl = `${API.SEARCH}/${query}&page=${API.page}`,
            Component = PostCard

        } else {
            return false
        }
        await ajax({
            url : apiUrl,
            cbSuccess: (posts) => {
                const $main = d.querySelector('#posts')
                posts.forEach(post => {
                    $main.appendChild(Component(post))
                })
                
            }
        })
            
    })
    
}