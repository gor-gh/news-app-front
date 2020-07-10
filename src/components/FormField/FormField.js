import React from 'react';
import './FormField.css';
import PropTypes from 'prop-types';


class FormField extends React.Component{
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    }
    state = {
        value: this.props.value,
        error: false
    }
    onChange = (e) => {
        const name = this.props.name;
        const value = e.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.setState({value, error});

        this.props.onChange({name, value, error});
    }
    render(){
        if(this.props.name !== 'message'){
            return (
                <div className='d-flex pt-2 pb-2 align-items-center justify-content-center flex-direction-column'>
                    <input
                        type={this.props.type}
                        className='form_inp'
                        placeholder={this.props.placeholder}
                        onChange={this.onChange}
                    />
                    <span className='err_msg pl-2 pt-2'>
                    {this.state.error}
                    </span>
                </div>
            )
        }
        return (
            <div className='d-flex pt-2 pb-2 align-items-center justify-content-center flex-direction-column'>
                <textarea
                    placeholder={this.props.placeholder}
                    className='d-block'
                    onChange={this.onChange}
                    cols="30"
                    rows="10"
                ></textarea>
                <span className='err_msg pl-2 pt-2'>
                    {this.state.error}
                </span>
            </div>

        )

    }
}

export default FormField;
