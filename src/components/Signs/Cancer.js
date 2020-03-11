import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Cancer extends Component {



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
            <h1 className='zodiac'>Cancer</h1>
            {mappedSuggs[3]}
            <h4 className='signDsc'>
            Cancer is recognized as a very intelligent sign, making Educational games a great genre for you! Trying out games that use math or strategy would be great for you. Try checking out games like The Oregon Trail, Portal 2, or LittleBIGPlanet! 
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Arthur Morgan - Red Dead Redemption II <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/c/c2/ArthurMorgan.png/revision/latest/top-crop/width/360/height/360?cb=20190804092849'/> 
            <br/>
            <br/>
            <br/>
            Claire Redfield - Resident Evil II <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/capcomdatabase/images/f/f2/Resident_Evil_Revelations_2_Claire_Redfield_render_01_alpha.png/revision/latest/top-crop/width/360/height/450?cb=20191223081655'/>
            <br/>
            <br/>
            <br/>
            MacCready - Fallout 3 & 4 <br/>
            <img id = 'pic' src= 'https://www.stickpng.com/assets/images/58a1f830c8dd3432c6fa81f1.png'/>
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
    })(Cancer);