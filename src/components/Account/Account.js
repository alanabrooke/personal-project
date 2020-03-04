import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
// import {logout, deleteUser, editUser} from '../../redux/accountReducer'
import './Account.css'
import {getUser} from '../../redux/accountReducer';



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

    render() {

        return(
            <div>
                <h1 name='test'>Account</h1>
                <p>E-mail</p>
                <input/>
                <p>Username</p>
                <input/>
                <p>Password</p>
                <input/>
                <button>Edit Account</button>
                <button>Delete Account</button>
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
    getUser
    })(Account));