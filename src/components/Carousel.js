import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide mt-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="./images/1.jpg" className="d-block w-100" alt="..." style={{height:'400px'}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./images/2.jpg" className="d-block w-100" alt="..." style={{height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img src="./images/3.jpg" className="d-block w-100" alt="..." style={{height:'400px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel
