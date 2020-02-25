import React, {Component} from 'react';
import { connect } from 'react-redux';
import Authentication from './Authentication/Authentication';
import { Provider } from 'react-redux';

export default class Home extends Component {
 
    render() {      
        return(
        <div>

        <Authentication />

        </div>
    )

}
}
