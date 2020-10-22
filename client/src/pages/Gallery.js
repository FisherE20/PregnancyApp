import React from "react";


function Gallery() {
    return (
      <div class="orbit" role="region" aria-label="Ultrasound" data-orbit>
      <div class="orbit-wrapper">
        <div class="orbit-controls">
          <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
        </div>
        <ul class="orbit-container">
          <li class="is-active orbit-slide">
            <figure class="orbit-figure">
              <img class="orbit-image" src="./public/Images/View1.jpg" alt="ultrasound"></img>
              <figcaption class="orbit-caption">View 1 of baby</figcaption>
            </figure>
          </li>
          <li class="orbit-slide">
            <figure class="orbit-figure">
              <img class="orbit-image" src="./public/Images/View2.jpg" alt="ultrasound"></img>
              <figcaption class="orbit-caption">View 2 of baby</figcaption>
            </figure>
          </li>
          <li class="orbit-slide">
            <figure class="orbit-figure">
              <img class="orbit-image" src="./public/Images/View3.jpg" alt="ultrasound"></img>
              <figcaption class="orbit-caption">View 3 of baby</figcaption>
            </figure>
          </li>
          <li class="orbit-slide">
            <figure class="orbit-figure">
              <img class="orbit-image" src="./public/Images/HeartBeat.jpg" alt="ultrasound"></img>
              <figcaption class="orbit-caption">Baby's Heart Beat</figcaption>
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
  )
};


export default Gallery;