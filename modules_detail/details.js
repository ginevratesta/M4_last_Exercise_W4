  import { dollDetail, formattedHTMLDetail, rowDetail } from "./markup-detail.js";

  const displayDollDetail = () => {
    rowDetail.innerHTML += formattedHTMLDetail(dollDetail)
  };

  displayDollDetail();
  
  