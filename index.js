import {App} from './App.js'
import API from './app/helpers/wp-api.js'

const d = document

d.addEventListener('DOMContentLoaded', App)
window.addEventListener('hashchange', () => {
    API.page = 1
    App()
})