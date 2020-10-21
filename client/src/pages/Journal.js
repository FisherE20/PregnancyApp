import Axios from 'axios';
import React, {useState} from 'react';

function Journal() {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [entry, setEntry] = useState();

    const post = (e) => {
        e.preventDefault();
        Axios.post(
            "/api/journal",
            {
                title: title,
                entry: entry,
                date: date
            }
        ).then((res) => console.log(res));
    };

    return (
        <div className="container">
          <h1 className="mb-4">Journal Entries</h1>
          <a className="button primary" href="/journal/new">New Entry</a>  
        
        
        <div className="card">   
        <div className="card-divider"> 
             <h3>
             <input className="form-control" type="text" placeholder="title" name="title" onChange={(e) => setTitle(e.target.value)} />
             </h3>
        </div>   
        <div className="card-section">
            <input className="form-control" type="text" placeholder="date" name="date" onChange={(e) => setDate(e.target.value)} />
            <p>
            <input className="form-control" type="text" placeholder="entry" name="entry" onChange={(e) => setEntry(e.target.value)} />
            </p>
            <a className="button primary" href="#" onClick={post}>Post</a>
            <a className="button success" href="#">Edit</a>
            <a className="button alert" href="#">Delete</a>
        </div>
        </div>  
    </div> 
    );
}

export default Journal;

