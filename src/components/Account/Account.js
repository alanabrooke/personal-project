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
                <h1 name='test'>testing!!</h1>
                <p>{this.props.username}</p>

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