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

    handleDelete = () => {
    this.props.deleteUser()
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
                <h1 name='test'>Account</h1>
                <h2>Edit Account Info</h2>
                <p>Email</p>
                <input placeholder='email'></input>
                <p>Username</p>
                <input placeholder='username'></input>
                <p>Password</p>
                <input placeholder='password'></input>
                <p>Upload Profile Image</p>
    <button name='profile_image' onClick={ () => widget.open() }>Upload Profile Image</button>

                <button>Edit Account</button>
                <button onClick={this.handleDelete}>Delete Account</button>

                <Link to='/selection'><button>back to selection</button></Link>
            </div>
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