import React from "react";


function Gallery() {
    return (
        <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div class="orbit-wrapper">
    <div class="orbit-controls">
      <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
      <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
    </div>

    <ul class="photo-container">
      <li class="is-active orbit-slide">
        <figure class="ultrasound-photo">
          <img class="ultrasound-image" src="./public/Images/View1.jpg" alt="Baby"></img>
          <figcaption class="orbit-caption">Baby</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="ultrasound-photo">
          <img class="ultrasound-image" src="./public/Images/View2.jpg" alt="Baby"></img>
          <figcaption class="orbit-caption">Baby's Heart Beat</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="ultrasound-photo">
          <img class="ultrasound-image" src="./public/Images/View3.jpg" alt="Baby"></img>
          <figcaption class="orbit-caption">Baby's 2nd picture</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="ultrasound-photo">
          <img class="ultrasound-image" src="./public/Images/HeartBeat.jpg" alt="Baby"></img>
          <figcaption class="orbit-caption">Baby's 3rd picture</figcaption>
        </figure>
      </li>
    </ul>

  </div>
  <nav class="orbit-bullets">
    <button class="is-active" data-slide="0">
      <span class="show-for-sr">First slide details.</span>
      <span class="show-for-sr" data-slide-active-label>Current Slide</span>
    </button>
    <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
  </nav>
</div>

    );
}


export default Gallery;