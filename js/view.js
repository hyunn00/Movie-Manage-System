const movieStr = localStorage.getItem('movies')
const movieObj = JSON.parse(movieStr) || {}

const index = location.search
const idx = index.split('=')[1]

const queryIndex = movieObj.findIndex((item) => item.idx == idx)
const movie = movieObj[queryIndex] || {}

const viewForm = document.querySelectorAll('#viewForm > div')

viewForm.forEach((element) => {
    const id = element.id
    element.innerHTML += `<span>${movie[id]}</span>`
})

const modifyBtn = document.querySelector('#modifyBtn')

function modifyBtnHandler() {
    location.href =`../updateMovie.html?index=${idx}`
}

modifyBtn.addEventListener('click', modifyBtnHandler)

const deleteBtn = document.querySelector('#delete')

function deleteBtnHandler() {
    const indexRemove = movieObj.findIndex((item) => item.idx == idx)
    if(indexRemove !== -1) {
        movieObj.splice(indexRemove, 1)
    }

    const setMovieStr = JSON.stringify(movieObj)
    localStorage.setItem('movies', setMovieStr)
    location.href = '../movieList.html'
}

deleteBtn.addEventListener('click', deleteBtnHandler)