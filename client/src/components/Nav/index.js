import React from "react";
import "./style.css";


function Nav() {
    return(
    <ul class="menu">
        <li><a href="#"><i class="fi-list"></i> <span>Home</span></a></li>
        <li><a href="#"><i class="fi-list"></i> <span>Journal</span></a></li>
        <li><a href="#"><i class="fi-list"></i> <span>Gallery</span></a></li>
        <li><a href="#"><i class="fi-list"></i> <span>Registeries</span></a></li>
    </ul>
    );
}

export default Nav;
