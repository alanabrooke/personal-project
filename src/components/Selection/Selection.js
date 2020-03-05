import React, {Component} from 'react';
import {Link , withRouter } from 'react-router-dom';
import './Selection.css';
import { getSuggestions } from '../../redux/suggestionsReducer';
import {connect} from 'react-redux';
// import galaxy from '../../../src/galaxy.jpg'


class Selection extends Component {

      componentDidMount() {
        this.props.getSuggestions()
      }

      handleLogout = () => {
        this.props.history.push('/')
    }

    // handleUser() {
    //   this.props.history.push('/account')
    // }

    render() {
        return (
      
                <div>
            <nav>
                <button id='logout' onClick={this.handleLogout}>Logout</button>
              <Link to='/account' id='account-link'><button id='account'>Account</button></Link>
            </nav>
                <h1>
                    Choose your sign!
                    (Don't forget to check your sun, moon, and rising!)
                </h1>
                <div id='allButtons'>
           
                <Link to='/selection/aries'><img src='https://image.flaticon.com/icons/svg/2647/2647331.svg'/></Link>
                <Link to='/selection/taurus'><img src= 'https://image.flaticon.com/icons/svg/2647/2647449.svg'/></Link>
                <Link to='/selection/gemini'><img src= 'https://image.flaticon.com/icons/svg/2647/2647386.svg'/></Link>
                <Link to='/selection/cancer'><img src= 'https://image.flaticon.com/icons/svg/2647/2647357.svg'/></Link>
                <Link to='/selection/leo'><img src= 'https://image.flaticon.com/icons/svg/2647/2647393.svg'/></Link>
                <Link to='/selection/virgo'><img src= 'https://image.flaticon.com/icons/svg/2647/2647451.svg'/></Link>
                <Link to='/selection/libra'><img src= 'https://image.flaticon.com/icons/svg/2647/2647398.svg'/></Link>
                <Link to='/selection/scorpio'><img src= 'https://image.flaticon.com/icons/svg/2647/2647427.svg'/></Link>
                <Link to='/selection/sagittarius'><img src= 'https://image.flaticon.com/icons/svg/2647/2647420.svg'/></Link>
                <Link to='/selection/capricorn'><img src= 'https://image.flaticon.com/icons/svg/2647/2647361.svg'/></Link>
                <Link to='/selection/aquarius'><img src= 'https://image.flaticon.com/icons/svg/2647/2647325.svg'/></Link>
                <Link to='/selection/pisces'><img src= 'https://image.flaticon.com/icons/svg/2647/2647411.svg'/></Link>
                </div>
            </div>
      
          )  
        }
}
        

// export { Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces }

const mapStateToProps = state => {
return {
    suggestions: state.suggestionsReducer.suggestions
}
}

export default withRouter(connect(mapStateToProps, {
getSuggestions
})(Selection));