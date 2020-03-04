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
              <div>
            <h1>Pisces</h1>
            {mappedSuggs[11]}
            Pisces tend to be quite competitive, along with being fairly popular socially. Online sports games such as FIFA, NBA 2K, Madden, and Rocket League would be suitable for your personality! 
                <div id='back'>
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