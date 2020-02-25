import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Gemini extends Component {



    render() {
        return(
            <div>
                <h1>Gemini</h1>
                <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
        )
    }
}

