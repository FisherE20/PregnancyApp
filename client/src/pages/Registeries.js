import React from 'react';


function Registeries() {
   return (
        <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          <div className="cell">
            <div className="card">
              <img src="./Images/Amazon.jpg"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.amazon.com">View</a>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img src="./Images/BuyBuyBaby.jpg"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.buybuybaby.com">View</a>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img src="./Images/Target.jpg"></img>
              <div className="card-section">
                <p>You'll find our registry by clicking on the button below.</p>
                <a className="button primary" href="HTTPS://www.target.com">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    );

    
}

export default Registeries;
