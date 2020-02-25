import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Cancer extends Component {



    render() {
        return(
            <div>
                <h1>Cancer</h1>
                <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
        )
    }
}

