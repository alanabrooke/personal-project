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
                <h1 class='editAcct'> Edit Account Info </h1>
                <div class= 'accountSet'>
                <input class='editInput' placeholder='E-mail'></input>
                <input class='editInput' placeholder='Username'></input>
                <input class='editInput' placeholder='New Password'></input>
                <input class='editInput' placeholder='Confirm New Password'></input>

                {/* <div class='acctBtns'> */}
                <button class='profileImg' onClick={ () => widget.open() }>Upload/Add Profile Image</button>
                <button class= 'deleteAcct' onClick={this.handleDelete}>DELETE ACCOUNT</button>
                </div>
                <div class='back'>
                <button onClick={this.handleBack}>Back to Selection</button>
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