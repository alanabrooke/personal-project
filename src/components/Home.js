import React, {Component} from 'react';
import { connect } from 'react-redux';
import Authentication from './Authentication';

export default class Home extends Component {
    componentDidMount() {
    }
 
 
    render() {      
        return(
        <div>
        <Authentication />
        </div>
    )

}
}