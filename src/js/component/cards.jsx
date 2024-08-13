import React from "react";
function Cards(props) {
  return (
    <div className="col-sm-12  card border-info mb-3 p-0 mx-1 " style={{ maxWidth: '18rem' }}>
      <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
      <div className="card-body p-0
  ">
        <div className="d-flex flex-row justify-content-center">
          <h5 className="card-title d-flex align-items-center my-2">{props.titulo}</h5>
        </div>
        <p className="card-text mx-3
    ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="py-2 border-top border-info w-100 d-flex flex-row justify-content-center">
          <a href="#" className=" d-flex card-footer btn border-info">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}
export default Cards;