import { dolls, row, formattedHTMLCard, deleteBtn } from "./markup.js";

const displayCards = () => {
  dolls.forEach((doll) => {
    row.innerHTML += formattedHTMLCard(doll);
  });
};

displayCards();


for (const button of deleteBtn) {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const cardId = event.target.closest(".card").id;
    console.log(cardId);
    try {
      const url =
        "https://striveschool-api.herokuapp.com/api/product/" + cardId;
      const key =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMDk4NjkxM2Y2NTAwMThkMDkwMmQiLCJpYXQiOjE3MDYxMDExMjYsImV4cCI6MTcwNzMxMDcyNn0.ik6-rJhrbYbiuuXY6PgO5zxqEtjxW2BA10T0rY4dk9k";

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      };
      await fetch(url, options);
      window.location.reload()
    } catch (error) {
      console.error("Error:" + error);
      alert(error);
    }
  });
}
