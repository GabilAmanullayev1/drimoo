let url = 'http://localhost:3000/api';

function getAllFetch() {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}
function getByIdFetch(id) {
    fetch(url + id)
        .then(res => res.json())
        .then(data => console.log(data))
}
function getAllAxios() {
    axios.get(url)
        .then(res => console.log(res.data))
}

function getByIDAxios(id) {
    axios.get(url +"/"+id)
        .then(res => console.log(res.data))
}
getByIDAxios(6)