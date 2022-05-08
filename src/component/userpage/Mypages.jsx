import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Profile from "./Profile";
import page from "../page"

function Mypages() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/profile" exact component={Profile} />
            
            </Routes>
        
        
        </Router>

    </div>
  )
}

export default Mypages