const addMovieForm = document.querySelector('#addMovieForm')

function Movie(idx) {
    this.idx = idx
    this.title = ''
    this.summary = ''
    this.movieImg = ''
    this.movieTime = ''
    this.date = ''
    this.views = 0
}

Movie.prototype.setTitle = function(value) {
    if(value.length === 0) {
        throw new Error('제목을 입력하시오.')
    }
    this.title = value
    return value;
}

Movie.prototype.setSummary = function(value) {
    if(value.length === 0) {
        throw new Error('줄거리를 입력하시오.')
    }
    this.summary = value
    return value;
}

Movie.prototype.setMovieTime = function(value) {
    if(value.length === 0) {
        throw new Error('상영 시간을 입력하시오.')
    }
    this.movieTime = value
    return value;
}

Movie.prototype.setDate = function(value) {
    if(value.length === 0) {
        throw new Error('개봉일을 입력하시오.')
    }
    this.date = value
    return value
}

const submitHandler = (e) => {
    e.preventDefault()

    try {
        const movieObj = JSON.parse(localStorage.getItem('movies')) || [];
        const idx = movieObj.length > 0 ? movieObj[movieObj.length-1].idx + 1 : 0

        const instance = new Movie(idx)
        instance.setTitle(e.target.title.value)
        instance.setSummary(e.target.summary.value)
        // instance.setMovieTime(e.target.movieTime.value)

        movieObj.push(instance)
        localStorage.setItem('movies', JSON.stringify(movieObj))

        location.href=`viewMovie.html?index=${idx}`
    } catch(e) {
        console.log(e)
        alert(e)
    }
}

addMovieForm.addEventListener('submit', submitHandler)

const backBtn = document.querySelector('#back')

const backBtnHandler = (e) => {
    e.preventDefault()
    location.href = '../movieList.html'
}

backBtn.addEventListener('click', backBtnHandler)