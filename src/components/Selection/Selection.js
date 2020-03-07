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
              <button path to='/account' id='account'>Account</button>
            </nav>
                <h2>
                    Choose your sign.
                    Don't forget to check your sun, moon, and rising!
                </h2>
                <h2>Don't know your sign(s)? Click the moon below! 
                </h2>
                <div id='moon' >
                <a href='https://astro.cafeastrology.com/natal.php' target="_blank"><img height='100px' width='50px' src='https://pngimg.com/uploads/moon/moon_PNG19.png'/></a>
                </div>
                <div id='allButtons'>
                <Link to='/selection/Aries'><h2>Aries</h2><img src='https://www.iconsdb.com/icons/preview/white/aries-2-xl.png'/></Link>
                <Link to='/selection/Taurus'><h2>Taurus</h2><img src= 'https://www.iconsdb.com/icons/preview/white/taurus-2-xl.png'/></Link>
                <Link to='/selection/Gemini'><h2>Gemini</h2><img src= 'https://www.iconsdb.com/icons/preview/white/gemini-2-xl.png'/></Link>
                <Link to='/selection/Cancer'><h2>Cancer</h2><img src= 'https://www.iconsdb.com/icons/preview/white/cancer-2-xxl.png'/></Link>
                <Link to='/selection/Leo'><h2>Leo</h2><img src= 'https://www.iconsdb.com/icons/preview/white/leo-2-xxl.png'/></Link>
                <Link to='/selection/Virgo'><h2>Virgo</h2><img src= 'https://www.iconsdb.com/icons/preview/white/virgo-2-xl.png'/></Link>
                <Link to='/selection/Libra'><h2>Libra</h2><img src= 'https://www.iconsdb.com/icons/preview/white/libra-2-xl.png'/></Link>
                <Link to='/selection/Scorpio'><h2>Scorpio</h2><img src= 'https://www.iconsdb.com/icons/preview/white/scorpio-2-xl.png'/></Link>
                <Link to='/selection/Sagittarius'><h2>Sagittarius</h2><img src= 'https://www.iconsdb.com/icons/preview/white/sagittarius-2-xl.png'/></Link>
                <Link to='/selection/Capricorn'><h2>Capricorn</h2><img src= 'https://www.iconsdb.com/icons/preview/white/capricorn-2-xl.png'/></Link>
                <Link to='/selection/Aquarius'><h2>Aquarius</h2><img src= 'https://www.iconsdb.com/icons/preview/white/aquarius-2-xl.png'/></Link>
                <Link to='/selection/Pisces'><h2>Pisces</h2><img src= 'https://www.iconsdb.com/icons/preview/white/pisces-2-xxl.png'/></Link>

                {/* <Link to='/selection/gemini'><img src= 'https://image.flaticon.com/icons/svg/2647/2647386.svg'/></Link>
                <Link to='/selection/cancer'><img src= 'https://image.flaticon.com/icons/svg/2647/2647357.svg'/></Link>
                <Link to='/selection/leo'><img src= 'https://image.flaticon.com/icons/svg/2647/2647393.svg'/></Link>
                <Link to='/selection/virgo'><img src= 'https://image.flaticon.com/icons/svg/2647/2647451.svg'/></Link>
                <Link to='/selection/libra'><img src= 'https://image.flaticon.com/icons/svg/2647/2647398.svg'/></Link>
                <Link to='/selection/scorpio'><img src= 'https://image.flaticon.com/icons/svg/2647/2647427.svg'/></Link>
                <Link to='/selection/sagittarius'><img src= 'https://image.flaticon.com/icons/svg/2647/2647420.svg'/></Link>
                <Link to='/selection/capricorn'><img src= 'https://image.flaticon.com/icons/svg/2647/2647361.svg'/></Link>
                <Link to='/selection/aquarius'><img src= 'https://image.flaticon.com/icons/svg/2647/2647325.svg'/></Link>
                <Link to='/selection/pisces'><img src= 'https://image.flaticon.com/icons/svg/2647/2647411.svg'/></Link> */}
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