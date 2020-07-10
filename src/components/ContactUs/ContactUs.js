import React from 'react';
import './ContactUs.css';
import Modal from '../Modal/Modal';

class ContactUs extends React.Component{
    state = {
        _modalOpen: false
    }
    openModal = () => {
        this.setState({
            _modalOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            _modalOpen: false
        });
    }
    render(){
        return (
            <div className='contact_cont'>
                <button
                    onClick={this.openModal}

                    className='btn btn-white'>
                    CONTACT US
                </button>
                <Modal
                    onClose={this.closeModal}
                    isOpen={this.state._modalOpen}/>
            </div>
        )
    }
}

export default ContactUs;