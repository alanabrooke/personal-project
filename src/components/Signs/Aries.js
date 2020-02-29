import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Aries extends Component {

    // componentDidMount() {
    //     this.props.getSuggestions()
    //   }

      render() {
          
          return(
              <div>
            <h2>Aries</h2>
                <div id='back'>
                    {/* <button onClick={this.handleClick}>Show Suggestions</button> */}
            <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
            </div>
        )
    }
        
}




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



