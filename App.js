import { Loader } from './app/components/Loader.js'
import { Header } from './app/components/Header.js'
import {Posts} from './app/components/Posts.js'
import { Router } from './app/components/Router.js'
import { InfiniteScroll } from './app/helpers/infinite_scroll.js'
export const App = () => {
    const $root = document.querySelector('#root')
    $root.innerHTML = null
    $root.appendChild(Header())
    $root.appendChild(Posts())
    $root.appendChild(Loader())
    Router()
    InfiniteScroll()
}