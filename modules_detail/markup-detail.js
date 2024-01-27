import { getObjId } from "./api-details.js";
export {id, dollDetail, rowDetail, formattedHTMLDetail};
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const dollDetail = await getObjId(id);

const detailsContainer = document.getElementById("details");
const header = document.createElement("header");
header.classList.add("pt-4", "pb-2");
header.style.background = "#E53D7A"
detailsContainer.append(header);
const detailTitle = document.createElement("h2");
detailTitle.classList.add("text-white", "text-center", "mb-0");
detailTitle.textContent = `${dollDetail.name}`;
header.append(detailTitle);
const backHomeBtn = document.createElement("a");
backHomeBtn.href = "./index.html";
backHomeBtn.classList.add("text-white", "ps-3")
backHomeBtn.textContent = "Go Back";
header.appendChild(backHomeBtn);



const rowDetail = document.createElement("div");
rowDetail.classList.add("row", "justify-content-center", "py-5");
detailsContainer.append(rowDetail);

const formattedHTMLDetail = (dollDetail) => {
    return `
    <div class="col-10">
    <div class="card">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${dollDetail.imageUrl}" class="img-fluid rounded-start" alt="Barbie cover">
    </div>
    <div class="col-md-8">
      <div class="d-flex flex-column justify-content-center h-100 align-items-center card-body text-white p-5 pt-5">
        <h3 class="card-title mb-5">${dollDetail.name}</h3>
        <p class="card-text text-center">${dollDetail.description}</p>
        <p class="card-text"><small class="text-body-secondary">Brand: ${dollDetail.brand}</small></p>
        <p class="card-text">Price: ${dollDetail.price} $</p>
      </div>
    </div>
  </div>
</div>
</div>`
};

const footer = document.createElement("footer");
footer.textContent = "THE PRETTIEST BARBIES IN THE WORLD!";
footer.classList.add("text-white", "text-center", "py-4", "mb-0");
footer.style.background = "#E53D7A";
detailsContainer.append(footer);