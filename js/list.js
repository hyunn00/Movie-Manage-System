function JsonMovie(dataUrl) {
    this.dataUrl = dataUrl
}

function readDateFromLocalStorage() {
    return new Promise((resolve, reject) => {
        const data = localStorage.getItem('movies')
        if(data) {
            resolve(data)
        } else {
            reject(new Error('데이터가 없습니다.'))
        }
    })
}

JsonMovie.prototype.getMovieLocalStorage = function (callback) {
    readDateFromLocalStorage()
    .then((data) => {
        data = JSON.parse(data)
        callback(data)
    })
    .catch((error) => {
        console.log('에러발생', error)
    })
}

JsonMovie.prototype.printMovie = function(e) {
    const template = (idx, objvalue) => {
        return `
        <li>
            <a href="viewMovie.html?index=${objvalue.idx}">
                <img src="img/poster1.jpg" alt="">
                <label id="title">${objvalue.title}</label>
            </a>
        </li>
        `
    }
    const movieList = document.querySelector('#movie-list')
    movieList.innerHTML = ''

    e.forEach((objvalue, idx) => {
        const row = template(idx, objvalue)
        movieList.innerHTML += row
    })
}

const movie = new JsonMovie('movies')
;(function() {
    movie.getMovieLocalStorage((e) => {
        movie.printMovie(e)
    })
})()