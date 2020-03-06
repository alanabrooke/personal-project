import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';
import '../Signs/signStyles.css'

 class Aries extends Component {



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
              <h1>Aries</h1>
            {mappedSuggs[0]}
            <h4 id='signDsc'>
            Aries are known for being very free-spirited, but also having a bit of a temper. Fighting games like Mortal Kombat, Tekken, and Street Fighter would help release stress build-up. 
            </h4>
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
    })(Aries);



    //     constructor() {
    //       super();
      
    //       this.state = {
    //         item: {}
    //       };
    //     }
      
    //     componentDidMount() {
    //       axios
    //         .get(
    //           `/api/zodiac/${
    //             this.props.match.params.id
    //           }`
    //         )
    //         .then(response => {
    //           this.setState({ item: response.data });
    //         });
    //     }
      
    //     render() {
    //       return (
    //         <div>
    //           <h2>{`${this.state.user}`}</h2>
    //           <h4>{`${this.state.zodiac_name}`}</h4>
    //         </div>
    //       );
    //     }
    //   }



