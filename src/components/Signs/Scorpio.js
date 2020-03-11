import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Scorpio extends Component {



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
            <h1 className='zodiac'>Scorpio</h1>
            {mappedSuggs[7]}
            <h4 className='signDsc'>
            Although they may not show it, Scorpios are competitive deep within. Besides that, they are often similar to Cancer when it comes to intuition, and similar to Virgo with a strategic mindset. Games that would be best for you are mobile games, such as Supreme Commander, Total War, Command & Conquer, or even Candy Crush! 
            </h4>    
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Duke Nukem <br/>
            <img id = 'pic' src= 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Duke_Nukem.png/220px-Duke_Nukem.png'/>
            <br/>
            <br/>
            <br/>
            Riku - Kingdom Hearts <br/>
            <img id = 'pic' src= 'https://www.khwiki.com/images/7/75/Riku_KHIII.png'/>
            <br/>
            <br/>
            <br/>
            Ada Wong - Resident Evil II <br/>
            <img id = 'pic' src= 'https://i.pinimg.com/originals/b2/50/81/b250811215f5bfb9b80feee48555769e.png'/>
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
    })(Scorpio);