export const ajax = async (props) => {
    const {url, cbSuccess} = props;
    await fetch(url)
        .then(res => res.ok? res.json() : Promise.reject(res))
        .then(data => cbSuccess(data))
        .catch(err => {
            let message = err.statusText || 'An error has occurred'
            document.getElementById('posts').innerHTML = `
                <div class='error'> 
                    <p>Error ${err.status} : ${message}</p>
                </div>
            `
            document.querySelector('.loader').style.display = 'none'
            console.log(err)
        })
} 