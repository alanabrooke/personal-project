import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Aries extends Component {

    render() {
        return(
            <div>
                <h2>Aries</h2>
                <Link to='/selection'><button id='backButton'> Back to Selection</button></Link>
                </div>
        
        )
    }
}

