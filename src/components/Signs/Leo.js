import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Leo extends Component {



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
            <h1 className='zodiac'>Leo</h1>
            {mappedSuggs[4]}
            <h4 className='signDsc'>
            Leos are the poster child for optimism and upbeat personalities. Because of this, they can enjoy competitive games, even if they aren't the best, because they thrive on socialization rather than being a top player. Games that would suit Leos are first-person shooters, like the Call of Duty franchise, Battlefield, The Division, and/or Bulletstorm.
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Reinhardt - Overwatch <br/>
            <img id = 'pic' src= 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/07/Reinhardt-portrait.png/350px-Reinhardt-portrait.png?version=68ad85c03ae9debf3ca454a5c7902c0eg'/>
            <br/>
            <br/>
            <br/>
            The King - Fallout: New Vegas<br/>
            <img id = 'pic' src= 'data:image/jpeg;base64,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'/>
            <br/>
            <br/>
            <br/>
            Handsome Jack - Borderlands <br/>
            <img id = 'pic' src= 'https://static.tvtropes.org/pmwiki/pub/images/handsome_jack_smiling_wallpaper_by_ellenrules_d6eean8.png'/>
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
    })(Leo);