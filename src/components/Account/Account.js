import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {logout, deleteUser, editUser} from '../../redux/accountReducer'
import {getUser} from '../../redux/authReducer';
import './Account.css'
require('dotenv').config()


//cloudinary


class Account extends Component {
    constructor() {
     super();
     this.state = {
         email: '',
         username: '',
         password: '',
        //  zodiac_id: null,
         profile_img: ''
     }
 }
 
     componentDidMount() {
         this.props.getUser()
     }

     
    
    //  handleDelete() {
    //      this.props.deleteUser()
    //     }
        
    handleBack = () => {
        this.props.history.push('/selection')
        }

        
        // handleEditUser = () => {
        //     const { email, username, password, profileImg } = this.state;
        //     const { Account } = this.props;
        //     const updated_profile = {
        //         email,
        //         username,
        //         password,
        //         // zodiac_id,
        //         profileImg
                
        //     }
        //     editUser(this.props.user_id, updated_profile)
        // }
checkUpload = (err, result) => {
    let { e, info } = result;
    if(e === 'success'){
         this.setState({ profileImg: info.url });
    }     
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
               this.checkUpload(error, result);
          }
     );
}
return(
            <div>
                <h1 className='editAcct'> Edit Account Info </h1>
                <div className= 'accountSet'>
                <input className='editInput' placeholder='E-mail'></input>
                <input className='editInput' placeholder='Username'></input>
                <input className='editInput' placeholder='New Password'></input>
                <input className='editInput' placeholder='Confirm New Password'></input>
                {/* <button className="profileImg" onClick={() => widget.open()}>Edit/Upload Profile Photo</button> */}
                
                {/* <div className='acctBtns'> */}
                <div className='holder'>

                <button name='profileImg' onClick={ () => widget.open() }>Upload Profile Image</button>
                {/* <input type="file" className="profileImg" name="myfile"/> */}
                <Link to='/auth/user'>
                <button className= 'submitAcct' onClick={this.handleEditUser}>Save Changes</button>
                </Link>
                <button className= 'deleteAcct' onClick={this.handleDelete}>DELETE ACCOUNT</button>
                </div>
                </div>
                <div className='back'>
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