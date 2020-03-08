import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {updateState, resetFields, registerUser, loginUser} from '../../redux/authReducer'
import '../Authentication/Authentication.css';

class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            zodiac_id: null
        }
    }


    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value})
        // console.log(e.target.value)
    }
    
    handleClickLogin = () => {
        this.props.loginUser(this.props.username, this.props.password).then(() => {
            this.props.history.push('/selection')
        }).catch(error => {
            alert('Incorrect username or password. Please try again.')
        })
    }
    
    handleClickRegister = () => {
        this.props.registerUser(this.props.email, this.props.username, this.props.password, this.props.zodiac_id).then(() => {
            this.props.loginUser(this.props.username, this.props.password)
        }).catch(error => {
            console.log(error)
            console.log(this.props.email, this.props.username, this.props.password, this.props.zodiac_id, this.props.email)
            alert('You have been registered! Please log in to proceed.')
            window.location.reload();
        })
    }
    

    render() {
        return(
            <div class='authentication'>
                    <h1 class="title">ZODIGAMES</h1>
                <section class='reg'>
                    <h3 class='text'>Login</h3>
                    <div  class='loginRegister'>
                        {/* <h4>Username</h4> */}
                        <input type="text" name="username" placeholder='Username' onChange={this.handleChange}/>
                        {/* <h4>Password</h4> */}
                        <input type="password" name='password' placeholder='Password' onChange={this.handleChange}/>
                        <div  class='authDiv' >
                        <Link to='/selection'><button class='authBtn'>Submit</button></Link>
                        </div>
                        </div>
                        </section>
                        <section class='reg2'>
                            <h3 class='text'>Don't have an account yet? Register here!</h3>
                            <div class='loginRegister2'>
                        {/* <h4>Email</h4> */}
                    <input type='text' name='email' placeholder='E-mail' onChange={this.handleChange}/>
                            {/* <h4>Username</h4> */}
                            <input type="text" name="username" placeholder='Username' onChange={this.handleChange}/>
                        {/* <h4>Password</h4> */}
                        <input type="password" name='password' placeholder='Password' onChange={this.handleChange}/>
                        <div></div>
                        <div  class='signs'>
                        <h4>Zodiac Sign</h4>
                        <select onChange={this.handleChange}name="zodiac_class">
                            <option>Please select your sign</option>
                            <option value={1}>Aries</option>
                            <option value={2}>Taurus</option>
                            <option value={3}>Gemini</option>
                            <option value={4}>Cancer</option>
                            <option value={5}>Leo</option>
                            <option value={6}>Virgo</option>
                            <option value={7}>Libra</option>
                            <option value={8}>Scorpio</option>
                            <option value={9}>Sagittarius</option>
                            <option value={10}>Capricorn</option>
                            <option value={11}>Aquarius</option>
                            <option value={12}>Pisces</option>
                        </select>
                        <div  class='authDiv2' >
                        <button class='authBtn2' onClick={this.handleClickRegister}>Register</button>
                        </div>
                        </div>
                        </div>
                        </section>
                        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.authReducer.email,
        username: state.authReducer.username,
        password: state.authReducer.password,
        zodiac_id: state.authReducer.zodiac_id
    }
}

export default withRouter(connect(mapStateToProps, {
    updateState,
    resetFields,
    registerUser,
    loginUser
})(Authentication));