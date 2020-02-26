import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Pisces extends Component {



    render() {
        return(
            <div>
            <h2>Pisces</h2>
                <div id='back'>
            <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
            </div>
        )
    }
}

