"use client"
import React, { useState, useEffect } from "react";

const LearnPage=()=>{
    const [searchTerm, setSearchTerm] = useState("");



    const handleSearch = (event) => {
        event.preventDefault();
        router.push(`/search?query=${searchTerm}`);
      };
    
    return(
        <div>
           <header>
             <div className="search-bar">
             <input
             type="text"
             place="Search for coding videos ..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            </div>
           </header>
        </div>

     

    );
}


export default LearnPage;