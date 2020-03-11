import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Libra extends Component {



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
            <h1 className='zodiac'>Libra</h1>
            {mappedSuggs[6]}
            <h4 className='signDsc'>
            Libras are known for being the most dependable sign. That being said, they also love to socialize (over video games) and play games that they can be recognized in for their efforts and ability to carry a team. Games that suit you, Libra, are Destiny, Borderlands, and Halo!
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Spyro the Dragon - Spyro Series/Skylanders<br/>
            <img id = 'pic' src= 'https://i.pinimg.com/originals/25/4c/50/254c5040ad92f834d02e7381e76931a5.png'/>
            <br/>
            <br/>
            <br/>
            Isabelle - Animal Crossing <br/>
            <img id = 'pic' src= 'https://www.models-resource.com/resources/big_icons/23/22492.png'/>
            <br/>
            <br/>
            <br/>
            Lulu - Final Fantasy X<br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/finalfantasy/images/5/5b/FFX_Lulu_Art.png/revision/latest?cb=20140809031913'/>
            <br/>
            <br/>
            <br/>
            Joel - The Last of Us  <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/thelastofus/images/f/ff/Joel.png/revision/latest?cb=20140419225924'/>
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
    })(Libra);