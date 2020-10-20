import React from "react";


function Gallery() {
    return (
        <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div className="orbit-wrapper">
    <div className="orbit-controls">
      <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
      <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
    </div>

    <ul className="photo-container">
      <li className="is-active orbit-slide">
        <figure className="ultrasound-photo">
          <img className="ultrasound-image" src="./public/Images/View1.jpg" alt="Baby"></img>
          <figcaption className="orbit-caption">Baby</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="ultrasound-photo">
          <img className="ultrasound-image" src="./public/Images/View2.jpg" alt="Baby"></img>
          <figcaption className="orbit-caption">Baby's Heart Beat</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="ultrasound-photo">
          <img className="ultrasound-image" src="./public/Images/View3.jpg" alt="Baby"></img>
          <figcaption className="orbit-caption">Baby's 2nd picture</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="ultrasound-photo">
          <img className="ultrasound-image" src="./public/Images/HeartBeat.jpg" alt="Baby"></img>
          <figcaption className="orbit-caption">Baby's 3rd picture</figcaption>
        </figure>
      </li>
    </ul>

  </div>
  <nav className="orbit-bullets">
    <button className="is-active" data-slide="0">
      <span className="show-for-sr">First slide details.</span>
      <span className="show-for-sr" data-slide-active-label>Current Slide</span>
    </button>
    <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
  </nav>
</div>

    );
}


export default Gallery;