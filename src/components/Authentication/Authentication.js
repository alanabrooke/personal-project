import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {updateState, resetFields, registerUser, loginUser} from '../../redux/authReducer'
import '../Authentication/Authentication.css';

class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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
            console.log(error)
            alert('Incorrect username or password. Please try again.')
        })
    }
    
    handleClickRegister = () => {
        this.props.registerUser(this.props.username, this.props.password, this.props.zodiac_id, this.props.email).then(() => {
            this.props.loginUser(this.props.username, this.props.password)
        }).catch(error => {
            console.log(error)
        })
        console.log(this.props.email, this.props.username, this.props.password, this.props.zodiac_id)
        alert('You have been registered! Please log in to proceed.')
        window.location.reload();
    }
    

    render() {
        return(
            <div>
                    <h1>Zodigames</h1>
                    <h3>Login</h3>
                    <div  id='loginRegister'>
                <section>
                        <h4>Username</h4>
                        <input type="text" name="username" onChange={this.handleChange}/>
                        <h4>Password</h4>
                        <input type="password" name='password' onChange={this.handleChange}/>
                        </section>
                        </div>
                        <div  id='authButton' >
                        <button onClick={this.handleClickLogin}>Submit</button>
                        </div>
                            <h3>Don't have an account yet? Register here!</h3>
                            <div id='loginRegister'>
                        <section>
                        <h4>Email</h4>
                    <input type='text' name='email' onChange={this.handleChange}/>
                            <h4>Username</h4>
                            <input type="text" name="username" onChange={this.handleChange}/>
                        <h4>Password</h4>
                        <input type="password" name='password' onChange={this.handleChange}/>
                        <div></div>
                        <h4>Zodiac Sign</h4>
                        <div  id='signs' >
                        <select onChange={this.handleChange} name="zodiac_id">
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
                        </div>
                        </section>
                        </div>

                        <div  id='authButton' >
                        <button onClick={this.handleClickRegister}>Register</button>
                        </div>
                        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        zodiac_id: state.authReducer.zodiac_id
    }
}

export default withRouter(connect(mapStateToProps, {
    updateState,
    registerUser,
    resetFields,
    loginUser
})(Authentication));