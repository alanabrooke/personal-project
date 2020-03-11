import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Pisces extends Component {



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
            <h1 className='zodiac'>Pisces</h1>
            {mappedSuggs[11]}
            <h4 className='signDsc'>
            Pisces tend to be quite competitive, along with being fairly popular socially. Online sports games such as FIFA, NBA 2K, Madden, and Rocket League would be suitable for your personality! 
            </h4>    
            <h2>
            <br/>
            Video game characters that embody your sign: <br/><br/>
            Tali'Zorah - Mass Effect 
            <br/>
            <br/>
            <img id = 'pic' src= 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Tali%27Zorah.png/150px-Tali%27Zorah.png'/>
            <br/>
            <br/>
            <br/>
            Elizabeth - Bioshock <br/>
            <img id = 'pic' src= 'https://i.redd.it/v4pzukj5ejj21.png'/>
            <br/>
            <br/>
            <br/>
            Ana - Overwatch <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/overwatch/images/0/0b/Ana_portrait2.png/revision/latest?cb=20181108050042'/>
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
    })(Pisces);