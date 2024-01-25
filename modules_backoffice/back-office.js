import {dollsAdmin, dollsDisplay, formattedHTMLCard, addBtn, deleteBtn, title, description, brand, img, price} from "./markup-backoffice.js";
import {postData} from "../modules/api.js";

const displayDollsOptions = () => {
dollsAdmin.forEach(doll => {
 dollsDisplay.innerHTML += formattedHTMLCard(doll);
});
};

displayDollsOptions();


addBtn.addEventListener("click", async () => {
    let barbie = {
        name: title.value,
        description: description.value,
        brand: brand.value,
        imageUrl: img.value,
        price: price.value,
    }
    await postData(barbie);
    window.location.reload()
})

console.log(dollsAdmin);

const deleteData = async (event) => {
    const card = event.target.closest(".card");
    const cardId = card.id;
    console.log(cardId);

    const confirmDeletion = confirm("Are you sure you want to delete this item?");
    
    if (!confirmDeletion) {
      return; 
    }

    try {
      const url = `https://striveschool-api.herokuapp.com/api/product/${cardId}`;
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k";

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      };

      await fetch(url, options);

     window.location.reload();

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete item. Please try again.");
    }
  };

for (const button of deleteBtn) {
button.addEventListener("click", async (event, cardId) => {
   await deleteData(event, cardId)
    
});
};







// const deleteObj = async () => {
//     try {
//         const url = "https://striveschool-api.herokuapp.com/api/product/" + id;
//         const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k"; 
  
//         const options = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${key}`
//             },
//         };
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data
//     } catch (error) {
//         console.error('Error:' + error);
//         alert(error);
//     }
//   };