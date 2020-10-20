import React from 'react';

function Journal() {
    return (
        <div className="container">
          <h1 className="mb-4">Journal Entries</h1>
          <a className="button primary" href="/journal/new">New Entry</a>  
        
        
        <div className="card">   
        <div className="card-divider"> 
             <h3>First Ultrasound</h3>
        </div>   
        <div className="card-section">
            <h4>Oct 2, 2020</h4>
            <p>Baby is healthy measuring at 7 weeks 6days. Heart Beat is 156 bpm. The doctor's estimated due date is correct at May 13.</p>
            <a className="button primary" href="#">Read More</a>
            <a className="button success" href="#">Edit</a>
            <a className="button alert" href="#">Delete</a>
        </div>
        </div>  
    </div> 
    );
}

export default Journal;

