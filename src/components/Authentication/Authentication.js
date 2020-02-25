import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateState, resetFields, registerUser, loginUser} from '../../redux/authReducer'
// import '../Authentication/Authentication.css';

class Authentication extends Component {
    
    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value})
    }

    handleClickRegister = () => {
        this.props.registerUser(this.props.username, this.props.password, this.props.zodiac_id).then(() => {
            this.props.loginUser(this.props.username, this.props.password, this.props.zodiac_id)
        }).catch(error => {
            console.log(error)
        })
    }

    handleClickLogin = () => {
        this.props.loginUser(this.props.username, this.props.password).then(() => {
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <section>
                    <h1>Login</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" name="username" onChange={this.handleChange}/>
                        <p>Password:</p>
                        <input type="password" name='password' onChange={this.handleChange}/>
                        </div>
                        <Link to='/Home'><button onClick={this.handleClickLogin}>Login</button></Link>
                        </section>
                        <section>
                            <h1>Register</h1>
                            <div>
                            <p>Username:</p>
                            <input type="text" name="username" onChange={this.handleChange}/>
                        <p>Password:</p>
                        <input type="password" name='password' onChange={this.handleChange}/>
                        <p>Zodiac Sign</p>
                        <select id='signs'>
                            <option>Aries</option>
                            <option>Taurus</option>
                            <option>Gemini</option>
                            <option>Cancer</option>
                            <option>Leo</option>
                            <option>Virgo</option>
                            <option>Libra</option>
                            <option>Scorpio</option>
                            <option>Sagittarius</option>
                            <option>Capricorn</option>
                            <option>Aquarius</option>
                            <option>Pisces</option>
                        </select>
                        </div>
                        <Link to='/Home'><button onClick={this.handleClickRegister}>Register</button></Link>
                        </section>
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

export default connect(mapStateToProps, {
    updateState,
    resetFields,
    registerUser,
    loginUser
})(Authentication);