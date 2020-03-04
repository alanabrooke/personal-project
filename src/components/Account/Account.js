import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {logout, deleteUser, editUser} from '../../redux/accountReducer'
import {getUser} from '../../redux/accountReducer';
import './Account.css'



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
                <button >Edit Account</button>
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