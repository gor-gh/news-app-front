import React from 'react';
import './LoginForm.css';
import PropTypes from 'prop-types';
import FormField from '../FormField/FormField';

class LoginForm extends React.Component{
    static propTypes = {
        longInputs: PropTypes.bool,
        login: PropTypes.func.isRequired,
        loginFailed: PropTypes.bool.isRequired
    }
    state = {
        fields: {
            username: '',
            password: ''
        },
        rememberMe: false,
        fieldErrors: {}
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const loginData = this.state.fields;

        if(this.validate()) return;

        this.props.login(loginData, this.state.rememberMe);
        this.setState()

    }
    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    }
    toggleRememberMe = (e) => {
        this.setState((prevState) => {
            return {rememberMe: !prevState.rememberMe}
        })
    }
    validate = () => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(fieldErrors).filter(key => fieldErrors[key]);

        return !fields.username || !fields.password || errorMessages.length;
    }
    render(){
        return (
            <div className={`login_form_cont ${this.props.longInputs ? 'longInputs' : ''}`}>
                <h2 className='pb-3 login_header'>Login to get access</h2>
                <form 
                    onSubmit={this.onFormSubmit}
                >
                    <FormField 
                        name='username'
                        type='text'
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                        placeholder='Username'
                        validate={(val) => val ? false : "Username is required"}
                    />
                    <FormField
                        name='password'
                        onChange={this.onInputChange}
                        value={this.state.fields.password}
                        type='password'
                        placeholder='Password'
                        validate={(val) => val ? false : "Password is required"}
                    />
                    <div className='d-flex justify-content-center pb-2'>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            className='d-flex'
                            value={this.state.rememberMe}
                            onChange={this.toggleRememberMe}
                        />
                        <span>Remember me</span>
                    </div>
                    {
                        (this.props.loginFailed) ? (
                            <div className='d-flex justify-content-center pb-2' style={{color: 'red'}}>
                                Failed to login. Please try again
                            </div>
                        ) : (
                            null
                        )
                    }
                    <input
                        type="submit"
                        value="Login"
                        className='login_btn'
                        disabled={this.validate()}
                    />
                </form>
            </div>
        )
    }
}

export default LoginForm;