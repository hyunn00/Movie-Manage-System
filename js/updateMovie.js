const updateForm = document.querySelector('#updateForm')
const formElemets = document.querySelectorAll('#updateForm > div')

const queryIndex = location.search.split('=')[1]
const movies = JSON.parse(localStorage.getItem('movies'))