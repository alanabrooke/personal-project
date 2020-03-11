import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Gemini extends Component {



      render() {
        const mappedSuggs = this.props.suggestions.map((val, i) => {
            return (
                <div key={i} style={{ border: '1px solid black', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px 0px', margin: '2%' }}>
                <h4>{val.dates}</h4>
                <h2>Traits: {val.traits}</h2>
                <h2>Genre(s) Recommended: {val.genre_name}</h2>
    
            </div>
            )
        })
          return(
              <div className='full'>
            <h1 className='zodiac'>Gemini</h1>
            {mappedSuggs[2]}
            <h4 className='signDsc'>
            Geminis are known for their defined personality, meaning they are able to enjoy many different types of entertainment, including video games! Any genre of game would suit you, Gemini, but some good recommendations are Grand Theft Auto or the Fallout series!
                </h4>
                <h2>
                <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Benny - Fallout: New Vegas<br/>
            <br/>
            <img id = 'pic' src= 'https://www.realmofdarkness.net/sb/wp-content/uploads/2018/02/benny-01.png'/>
            <br/>
            <br/>
            <br/>
            Flowey - Undertale <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/debatesjungle/images/b/bd/Flowey_the_Flower_%28Transparent_ver.%29.png/revision/latest/scale-to-width-down/340?cb=20181209162454'/>
            <br/>
            <br/>
            <br/>
            Dutch van der Linde - Red Dead Redemption <br/>
            <img id = 'pic' src= 'https://storage.googleapis.com/wzukusers/user-32067506/images/5c1374b871391zs7CZCQ/Dutch_van_der_Linde_RDRII_disegno_d400.png'/> <br/>
            <br/>
            </h2>
                <div className='back'>
                    {/* <button onClick={this.handleClick}>Show Suggestions</button> */}
            <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        suggestions: state.suggestionsReducer.suggestions,
    }
    }
    
    export default connect(mapStateToProps, {
    getSuggestions
    })(Gemini);
