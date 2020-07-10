import React from 'react';
import './ContactForm.css';
import {isValidEmail} from "../../helpers";
import FormField from '../FormField/FormField'
import Loading from '../Loading/Loading';


class ContactForm extends React.Component{
    state = {
        _isLoading: false,
        fields: {
            name: '',
            email: '',
            message: ''
        },
        fieldErrors: {}
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const randTime = Math.floor((Math.random() * 1001)) + 1000;
        this.setState({_isLoading: true},() => {
            setTimeout(() => {
                this.setState({_isLoading: false}, () => {
                    this.props.closeModal();
                })
            },randTime);
        })
    }
    onInputChange = ({name, value, error}) => {
        const data = Object.assign({}, this.state.fields);
        const dataErrors = Object.assign({},this.state.fieldErrors);

        data[name] = value;
        dataErrors[name] = error;

        this.setState({fields: data, fieldErrors: dataErrors});
    }
    validate = () => {
        const data = this.state.fields;
        const dataErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(dataErrors).filter(key => dataErrors[key]);
        return !data.name || !data.email || !data.message || errorMessages.length;
    }
    render(){
        if(this.state._isLoading){
            return (
                <Loading
                    velocity='normal'
                />
            )
        }
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <FormField
                        name='name'
                        type='text'
                        onChange={this.onInputChange}
                        placeholder='Type your name...'
                        validate={(val) => (val ? false : "Name is required")}
                    />
                    <FormField
                        name='email'
                        type='text'
                        onChange={this.onInputChange}
                        placeholder='Type your email...'
                        validate={(val) => (isValidEmail(val) ? false : "Email is invalid")}
                    />
                    <FormField
                        name='message'
                        type='textarea'
                        onChange={this.onInputChange}
                        placeholder='Write a message...'
                        validate={(val) => (val ? false : "Message is required")}
                    />
                    <input
                        type="submit"
                        value="Send"
                        className='btn mx-auto submit_btn'
                        disabled={this.validate() || this.state._isLoading}/>
                </form>
            </div>
        )
    }
}

export default ContactForm;