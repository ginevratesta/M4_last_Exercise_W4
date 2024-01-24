import { getObjId } from "./api-details.js";
export {id, dollDetail, rowDetail, formattedHTMLDetail};
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const dollDetail = await getObjId();

const detailsContainer = document.getElementById("details");
const rowDetail = document.createElement("div");
rowDetail.classList.add("row", "justify-content-center", "pt-5");
detailsContainer.append(rowDetail);

const formattedHTMLDetail = (dollDetail) => {
    return `
    <div class="col-10">
    <div class="card mb-3 ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${dollDetail.imageUrl}" class="img-fluid rounded-start" alt="Barbie cover">
    </div>
    <div id="card" class="col-md-8">
      <div class="card-body pe-5 pt-5">
        <h5 class="card-title">${dollDetail.name}</h5>
        <p class="card-text">${dollDetail.description}</p>
        <p class="card-text"><small class="text-body-secondary">Brand: ${dollDetail.brand}</small></p>
        <p class="card-text">Price: ${dollDetail.price}$</p>
      </div>
    </div>
  </div>
</div>
</div>`
}