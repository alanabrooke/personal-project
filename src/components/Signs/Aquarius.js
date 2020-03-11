import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Aquarius extends Component {



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
            <h1 className='zodiac'>Aquarius</h1>
            {mappedSuggs[10]}
            <h4 className='signDsc'>
            Aquarians are frequently represented as having a very spontaneous personality. If you enjoy games that can be playing using strategy OR played on a whim, games like Elder Scrolls Online, Runescape, and Diablo would be great for you.
            </h4> 
            <h2 classId='picDiv'>
            Video game characters that embody your sign: <br/>
            <br/>
            Lara Croft - Tomb Raider<br/>
            <img id = 'pic' src= 'https://purepng.com/public/uploads/medium/purepng.com-lara-croft-tomb-raider-with-gunslara-croftlaracroftfictionaltomb-ridervideo-gametombraiderhighly-intelligentathletic-1701528614626fzclf.png'/> <br/>
            <br/>
            <br/>
        
            Tiny Tina - Borderlands <br/>
            <img id = 'pic' src= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f445d94-8ef8-40aa-b68d-9da60b012052/d8f7uxq-c684d5e2-f2cd-4144-9621-ad3271d6f51e.png/v1/fill/w_1600,h_3333,strp/tiny_tina_by_xenoxeon_d8f7uxq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzMzMyIsInBhdGgiOiJcL2ZcLzRmNDQ1ZDk0LThlZjgtNDBhYS1iNjhkLTlkYTYwYjAxMjA1MlwvZDhmN3V4cS1jNjg0ZDVlMi1mMmNkLTQxNDQtOTYyMS1hZDMyNzFkNmY1MWUucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5o7dw7SimCJjRrh20VeLIDAY0jqUVPmDZZC94WUN4SU'/> <br/>
            <br/>
            <br/>
            Geralt of Rivia - The Witcher <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/p__/images/4/43/Geralt_of_Rivia.png/revision/latest?cb=20180213180539&path-prefix=protagonist'/>
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
    })(Aquarius);
