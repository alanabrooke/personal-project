import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Sagittarius extends Component {



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
            <h1 className='zodiac'>Sagittarius</h1>
            {mappedSuggs[8]}
            <h4 className='signDsc'>
            Most people with Sagittarius in their chart are realists. Because of this trait, Sags tend to be a tad picky about video games, which is why mobile games are great for you. They are usually free to download. Meaning if you don't like them, deleting them is no big deal! Try starting with games like Stardew Valley, Minecraft, or Sims.
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Trevor Philips - Grand Theft Auto V <br/>
            <img id = 'pic' src= 'https://www.freepngimg.com/thumb/gta/20494-7-grand-theft-auto-v-transparent-background.png'/>
            <br/>
            <br/>
            <br/>
            Roxas - Kingdom Hearts <br/>
            <img id = 'pic' src= 'https://www.khwiki.com/images/thumb/9/9d/Roxas_KHIII.png/350px-Roxas_KHIII.png'/>
            <br/>
            <br/>
            <br/>
            Junkrat - Overwatch <br/>
            <img id = 'pic' src= 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/99/Junkrat-Portrait.png/286px-Junkrat-Portrait.png?version=c23334dae852756b575df8a32ea34708'/>
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
    })(Sagittarius);