import React from 'react';
import './Modal.css';
import ContactForm from '../ContactForm/ContactForm';

const Modal = (props) => {
    let windowMouseOvered = false;
    const onOutClick = () => {
        if(!windowMouseOvered){
            props.onClose();
        }
    }
    return (
        <div
            onClick={onOutClick}
            className={`modal_background  ${props.isOpen ? 'showModal' : 'hideModal'}`}>
            <div
                onMouseOver={() => (windowMouseOvered = true)}
                onMouseOut={() => (windowMouseOvered = false)}
                className='modal_window w-50 mx-auto pb-1'>
                <div className='modal_header d-flex justify-content-center pt-3'>

                    <h1 className='mt-1'>Contact with us</h1>
                    <button
                        className='btn close_button '
                        onClick={props.onClose}
                    >
                        &times;
                    </button>

                </div>
                <div className='modal_body pt-3'>
                    <ContactForm
                        closeModal={props.onClose}
                    />
                </div>
                <div className='modal_footer'>
                    <h6>Picsart &#xa9;</h6>
                </div>
            </div>
        </div>
    )
}

export default Modal;