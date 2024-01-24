import { dolls, marketPlace, navBar, row, formattedHTMLCard } from "./markup.js";

const displayCards = () => {
   dolls.forEach( doll => {
    row.innerHTML += formattedHTMLCard(doll);
   });
};

displayCards();