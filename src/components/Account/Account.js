import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {logout, deleteUser, editUser} from '../../redux/accountReducer'
import {getUser} from '../../redux/accountReducer';
import './Account.css'
import axios from 'axios';

//cloudinary
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/personal-proj/upload';
const CLOUDINARY_UPLOAD_PRESET = 'mmrnyq2q';

const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(e) {
const file = e.target.files[0];
const formData = new FormData();
formData.append('file', file);
formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    console.log(res);
  }).catch(function(err) {
    console.log(err);
  });

});


class Account extends Component {
        // constructor() {
    //     super();
    //     this.state = {
    //         email,
    //         username,
    //         zodiac_id: null
    //     }
    // }


    componentDidMount() {
        this.props.getUser()
    }

    handleDelete = () => {
    this.props.deleteUser()
    }


    render() {

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
                <input type='file' id='fileupload'></input>
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