import React from "react";
import "./style.css";

function RegistryCard(props) {
  return (
    <div class="grid-container">
  <div class="grid-x grid-margin-x small-up-2 medium-up-3">
    <div class="cell">
      <div class="card">
        <img  alt={props.name} src={props.image}>
        <div class="card-section">
        <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} class="button">View</a>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="card">
        <img {props.name} src={props.image}>
        <div class="card-section">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} class="button">View</a>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="card">
        <img alt={props.name} src={props.image}>
        <div class="card-section">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href= {props.url} class="button">View</a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default RegistryCard;

