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
                    Choose your sign.
                    Don't forget to check your sun, moon, and rising!
                </h1>
                <h2>Don't know your sign(s)? Click the moon below! 
                <a href='https://www.astrology.com.tr/birth-chart.asp'></a>
                </h2>
                <div id='moon' >
                <img height='100px' width='50px' src='https://pngimg.com/uploads/moon/moon_PNG19.png'/>
                </div>
                <div id='allButtons'>
                <Link to='/selection/aries'><img src='https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Aries.png&r=102&g=102&b=102'/></Link>
                <Link to='/selection/taurus'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Taurus.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Gemini'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Gemini.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Cancer'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Cancer.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Leo'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Leo.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Virgo'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Virgo.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Libra'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Libra.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Scorpio'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Scorpio.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Sagittarius'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Sagittarius.png&r=105&g=104&b=104'/></Link>
                <Link to='/selection/Capricorn'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Aquarius.png&r=255&g=255&b=255'/></Link>
                <Link to='/selection/Pisces'><img src= 'https://flaticons.net/gd/makefg.php?i=icons/Signs/Astro-Pisces.png&r=105&g=104&b=104'/></Link>

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