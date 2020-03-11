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
    handleAccount = () => {
      this.props.history.push('/account')
    }

    render() {
        return (
      
                <div path='true'>
            <nav>
                <button id='logout' onClick={this.handleLogout}>Logout</button>
              <button onClick={this.handleAccount} id='account'>Account</button>
                <Link to ='/about'><button id='about'>About</button></Link> 
            </nav>
                <h2 className='signChoose'>
                    Choose your sign.
                    Don't forget to check your sun, moon, and rising!
                </h2>
                <h2 className='signChoose2'>(Don't know your sign(s)? Click the moon below!)
                </h2>
                <div className='moon' >
                <a href='https://astro.cafeastrology.com/natal.php' target="_blank"><img  className='moonBtn' src='https://pngimg.com/uploads/moon/moon_PNG19.png'/></a>
                </div>
                <div className='allButtons'>
                <Link to='/selection/Aries'><h2 >Aries <br/>(3/21-4/20)</h2><img className='choice' src='https://www.iconsdb.com/icons/preview/white/aries-2-xl.png'/></Link>
                <Link to='/selection/Taurus'><h2 >Taurus <br/>(4/21-5/20)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/taurus-2-xl.png'/></Link>
                <Link to='/selection/Gemini'><h2 >Gemini <br/>(5/21-6/21)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/gemini-2-xl.png'/></Link>
                <Link to='/selection/Cancer'><h2 >Cancer <br/>(6/22-7/22)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/cancer-2-xxl.png'/></Link>
                <Link to='/selection/Leo'><h2 >Leo <br/>(7/23-8/23)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/leo-2-xxl.png'/></Link>
                <Link to='/selection/Virgo'><h2 >Virgo <br/>(8/24-9/23)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/virgo-2-xl.png'/></Link>
                <Link to='/selection/Libra'><h2 >Libra <br/>(9/24-10/23)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/libra-2-xl.png'/></Link>
                <Link to='/selection/Scorpio'><h2 >Scorpio <br/>(10/24-11/22)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/scorpio-2-xl.png'/></Link>
                <Link to='/selection/Sagittarius'><h2 >Sagittarius <br/>(11/23-12/21)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/sagittarius-2-xl.png'/></Link>
                <Link to='/selection/Capricorn'><h2 >Capricorn <br/>(12/22-1/20)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/capricorn-2-xl.png'/></Link>
                <Link to='/selection/Aquarius'><h2 >Aquarius <br/>(1/21-2/18)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/aquarius-2-xl.png'/></Link>
                <Link to='/selection/Pisces'><h2 >Pisces <br/>(2/19-3/20)</h2><img className='choice' src= 'https://www.iconsdb.com/icons/preview/white/pisces-2-xxl.png'/></Link>

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