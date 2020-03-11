import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Capricorn extends Component {



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
            <h1 className='zodiac'>Capricorn</h1>
            {mappedSuggs[9]}
            <h4 className='signDsc'>
            Capricorns have a personality that is greatly defined by being realistic in terms of logic, but enjoying creative visuals. Because of this, Virtual Reality games would be great for you! Video games like this include Beat Saber, VR Chat, Virtual Rabbids, and Tetris Effect.
            </h4> 
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Altair - Assassin's Creed <br/>
            <img id = 'pic' src= 'https://lh3.googleusercontent.com/proxy/wfNPI9EOrcBsukl4LQrim3W5KpN5N5nVT4j4v6cPfp2AvNa5kMPAQlaVsWUtx8bsrjeS-FQTvuB2y6s-KnZsCRotamMBoLFcXzeGKPAYGGQlBC96EP0CQYyx-B58'/>
            <br/>
            <br/>
            <br/>
            Claptrap - Borderlands <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/lawl-of-thrones/images/9/9f/Claptrap.png/revision/latest?cb=20160727145341'/>
            <br/>
            <br/>
            <br/>
            Kratos - God of War <br/>
            <img id = 'pic' src= 'https://i.pinimg.com/originals/95/2c/15/952c1581222e4c045bef3be0d2955d27.png'/>
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
    })(Capricorn);