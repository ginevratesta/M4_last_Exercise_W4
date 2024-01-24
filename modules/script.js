import { getObj } from "./api.js";

const dolls = await getObj();
const marketPlace = document.getElementById("market-place")
const navBar = document.createElement("div");
marketPlace.prepend(navBar);
let row = document.createElement("div");
row.classList.add("row", "py-5", "px-5", "justify-content-center" );
marketPlace.append(row);

const displayCards = () => {
   dolls.forEach( doll => {
    row.innerHTML += `
    <div class="col-lg-3">
    <div id="${doll.id}" class="card mb-5">
  <img src="${doll.imageUrl}" class="card-img-top" alt="Toy cover">
  <div class="card-body">
    <h5 class="card-title">${doll.name}</h5>
    <p class="card-text text-truncate">${doll.description}</p>
    <p>Brand: ${doll.brand}</p>
    <p>${doll.price}</p>
    <a href="./details.html" class="btn btn-primary">Details</a>
  </div>
</div>
</div>`
   });
};

displayCards();