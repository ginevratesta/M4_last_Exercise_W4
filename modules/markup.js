import { getObj } from "./api.js";
export { dolls, marketPlace, navBar, row, formattedHTMLCard };

const dolls = await getObj();

const marketPlace = document.getElementById("market-place");

const navBar = document.createElement("div");
navBar.style.background = "#E53D7A";
navBar.innerHTML = `<h2 class="text-white text-center py-4">Fabulous Marketplace</h2>`;
marketPlace.prepend(navBar);

const row = document.createElement("div");
row.classList.add("row", "py-5", "px-5");
marketPlace.append(row);

const footer = document.createElement("footer");
footer.style.background = "#E53D7A";
footer.innerHTML = `<h2 class="text-white text-center py-4 mb-0">Thank you for your visit!</h2>`;
marketPlace.append(footer);

const formattedHTMLCard = (doll) => {
  return `
    <div class="col-lg-3">
    <div id="${doll._id}" class="card mb-5 border-0">
  <img src="${doll.imageUrl}" class="card-img-top" alt="Toy cover">
  <div class="card-body">
    <h5 class="card-title">${doll.name}</h5>
    <p class="card-text text-truncate">${doll.description}</p>
    <p>Brand: ${doll.brand}</p>
    <p>${doll.price}</p>
    <a href="./details.html?=${doll._id}" class="btn btn-primary">Details</a>
  </div>
</div>
</div>`;
};




