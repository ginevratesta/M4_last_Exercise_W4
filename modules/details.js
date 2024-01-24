  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const getObjId = async () => {
    try {
        const url = "https://striveschool-api.herokuapp.com/api/product/" + id;
        const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k"; 
  
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:' + error);
        alert(error);
    }
  };
  
  const dollDetail = await getObjId();
  const detailsContainer = document.getElementById("details");
  const rowDetail = document.createElement("div");
  rowDetail.classList.add("row", "justify-content-center", "pt-5");
  detailsContainer.append(rowDetail);

  const displayDollDetail = () => {
    rowDetail.innerHTML += `
    <div class="col-10">
    <div class="card mb-3 ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${dollDetail.imageUrl}" class="img-fluid rounded-start" alt="">
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

  displayDollDetail();
  
  