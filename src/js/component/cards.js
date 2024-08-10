import React from "react";
function Cards() {
    return (
    <div class="card border-info mb-3" style={{maxWidth: '18rem'}}>
  <img src="https://picsum.photos/500/325" class="card-img-top" alt="..."/>
  <div class="card-body p-0
  ">
    <div class="d-flex flex-row justify-content-center">
    <h5 class="card-title d-flex align-items-center my-2">Card title</h5>
    </div>
    <p class="card-text mx-3
    ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="py-2 border-top border-info w-100 d-flex flex-row justify-content-center">
      <a href="#" class="d-flex card-footer btn border-info">Go somewhere</a>
    </div>
  </div>
</div>
)
}
export default Cards;