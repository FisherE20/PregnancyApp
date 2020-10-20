import React from 'react';

function Journal() {
    return (
        <div class="container">
          <h1 class="mb-4">Journal Entries</h1>
          <a class="button primary" href="/journal/new">New Entry</a>  
        
        
        <div class="card">   
        <div class="card-divider"> 
             <h3>First Ultrasound</h3>
        </div>   
        <div class="card-section">
            <h4>Oct 2, 2020</h4>
            <p>Baby is healthy measuring at 7 weeks 6days. Heart Beat is 156 bpm. The doctor's estimated due date is correct at May 13.</p>
            <a class="button primary" href="#">Read More</a>
            <a class="button success" href="#">Edit</a>
            <a class="button alert" href="#">Delete</a>
        </div>
        </div>  
    </div> 
    );
}

export default Journal;

