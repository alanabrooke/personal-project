import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Selection/Selection.css'




export default class Aquarius extends Component {



    render() {
        return(
            <div>
                <h2>Aquarius</h2>
            <Link to='/selection'><button id='backButton'>Back to Selection</button></Link>
  
            </div>

            
        
        )
    }
}

