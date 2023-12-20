const loadBtn = document.querySelector(".loadBtn");
const sec2Boxs = document.getElementById('sec2Boxs');
let page = 1;
const arr = [];
function getDataJson() {
  fetch(`http://localhost:3000/services?_page=${page}&_limit=4`)
    .then(response => { return response.json() })
    .then(data => {
      arr.push(data)
      data.forEach(element => {
        sec2Boxs.innerHTML += `
        <div class="sec2-box">
        <i onclick="addFavorite(${element.id})" class="fa-regular fa-heart"></i>
        <img src="${element.icon}" alt="Image">
        <div class="sec2-box-p1">${element.title}</div>
        <div class="sec2-box-p2">${element.description}</div>
        <div class = "sec2-box-btns">
        <button class = "sec2-box-btn"><a href = "./details.html?id=${element.id}">View Details</a></button>
        <button class="sec2-box-btn" onclick="boxsDelete(${element.id})")>Delete</button>
        <button class = "sec2-box-btn"><a href = "./update.html?id=${element.id}" target = "_blank">Update</a></button>
        </div>
    </div>
        `
      });
      return arr.flat()
    })
}
function boxsDelete(id) {
  axios.delete(`http://localhost:3000/services/${id}`);
  window.location.reload();
}
loadBtn.addEventListener("click", () => {
  page++
  getDataJson();
})
getDataJson();
function addFavorite(id) {
  axios.get("http://localhost:3000/services/" + id)
    .then(res => {
      axios.post("http://localhost:3000/favorites", res.data)
      
    })
}
let toggleNav = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
};

let closeModal = () => {
  document.getElementById("myModal").style.display = "none";
};
