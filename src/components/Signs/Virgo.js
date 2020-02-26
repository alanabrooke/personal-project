import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Virgo extends Component {



    render() {
        return(
            <div>
                <h1>Virgo</h1>
                <Link to='/selection'><button id='backButton'>Back to Selection</button></Link>
            </div>
        )
    }
}

