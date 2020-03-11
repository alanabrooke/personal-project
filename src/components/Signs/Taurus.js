import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Taurus extends Component {



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
            <h1 className='zodiac'>Taurus</h1>
            {mappedSuggs[1]}
            <h4 className='signDsc'>
                Us Taureans have a persistent attitude, which also means we can be rather stubborn. Survival games may suit you best due to the fact that consistency is key.
                Some recommended games would be ARK: Survival, We Happy Few, or the Outlast series (if you like a little horror in your entertainment!).
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/><br/>
            Dante - Devil May Cry <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/deadliestfiction/images/e/ec/Dante_most_recent_render.png/revision/latest?cb=20140914154938'/>
            <br/>
            <br/>
            <br/>
            Big Daddy - Bioshock <br/>
            <img id = 'pic' src= 'https://static1.comicvine.com/uploads/original/11128/111284393/5191584-render_big_daddy.png'/>
            <br/>
            <br/>
            <br/>
            Link - The Legend of Zelda <br/>
            <img id = 'pic' src= 'https://pluspng.com/img-png/link-zelda-png-file-link-ssb-3ds-wii-u-png-443.png'/>
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
    })(Taurus);