import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {logout, deleteUser, editUser} from '../../redux/accountReducer'
import {getUser} from '../../redux/accountReducer';
import './Account.css'
require('dotenv').config()


//cloudinary


class Account extends Component {
    checkUploadResult = (error, result) => {
        let { event, info } = result;
        if(event === 'success'){
             this.setState({ profile_image: info.url });
        }
   }
   
        // constructor() {
    //     super();
    //     this.state = {
    //         email: '',
    //         username: '',
    //         zodiac_id: null,
    //         profile_img: ''
    //     }
    // }


    componentDidMount() {
        this.props.getUser()
    }

    handleDelete() {
    this.props.deleteUser()
    }

    handleBack = () => {
        this.props.history.push('/selection')
    }

    render() {
        const { REACT_APP_cloudName, REACT_APP_cloudinary_unsigned } = process.env;
        let widget;
if( window.cloudinary ) {
     widget = window.cloudinary.createUploadWidget(
          {
               cloudName: `${REACT_APP_cloudName}`,
               uploadPreset: `${REACT_APP_cloudinary_unsigned}`,
               sources: ['local', 'url'],
               Default: false
          },
          ( error, result ) => {
               this.checkUploadResult(error, result);
          }
     );
}
return(
            <div>
                <h1 id='test'> Edit Account Info </h1>
                <div id= 'accountSet'>
                <input id='editInput' placeholder='E-mail'></input>
                <input id='editInput' placeholder='Username'></input>
                <input id='editInput' placeholder='New Password'></input>
                <input id='editInput' placeholder='Confirm New Password'></input>

                {/* <div id='acctBtns'> */}
                <button id='profileImg' onClick={ () => widget.open() }>Upload/Add Profile Image</button>
                <button id= 'deleteAcct' onClick={this.handleDelete}>DELETE ACCOUNT</button>
                </div>
                <div id='backDiv'>
                <button onClick={this.handleBack} id='backBtn'>Back to Selection</button>
            </div>
            </div>
            // </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        account: state.accountReducer.account
    }
    }
    
    export default withRouter(connect(mapStateToProps, {
    getUser,
    editUser,
    logout,
    deleteUser
    })(Account));