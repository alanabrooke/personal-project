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
              <div className='full'>
              <h1 className='zodiac'>Aries</h1>
            {mappedSuggs[0]}
            <h4 className='signDsc'>
            Aries are known for being very free-spirited, but also having a bit of a temper. Fighting games like Mortal Kombat, Tekken, and Street Fighter would help release stress build-up. 
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            D-va - Overwatch <br/>
            <img id = 'pic' src= 'https://d1u1mce87gyfbn.cloudfront.net/hero/dva/full-portrait.png'/>
            <br/>
            <br/>
            Lilith - Borderlands <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/all-worlds-alliance/images/d/d4/Lilithrender.png/revision/latest/scale-to-width-down/340?cb=20190704122447'/>
            <br/>
            <br/>
            Undyne - Undertale  <br/>
            <img id = 'pic' src= 'https://vignette.wikia.nocookie.net/p__/images/2/20/Undyne_%28Transparent_ver.%29/revision/latest/top-crop/width/360/height/450?cb=20170712012228&path-prefix=protagonist'/>
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



