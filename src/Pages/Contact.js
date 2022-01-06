import React, { useState } from 'react';
import Modal from 'react-modal';
import './PageCSS/Contact.scss'
import GreenCheck from '../Asset/Contact/whitebackgroundGreenCheckmark.svg'
import Exit from '../Asset/Contact/exit.svg'
import BlackExit from '../Asset/Contact/blackExit.svg'
import emailjs from '@emailjs/browser';

const customStyles = {
    overlay:{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(30, 30, 30, 0.72)"
    },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '280px',
      height                : '150px',
      textAlign             : 'center',
      display               : 'flex',
      flexDirection         : 'column',
      justifyContent        : 'center',
      alignItems            : 'center',
      position              : 'relative',
      backgroundColor       : 'background: rgba(30, 30, 30, 0.72)',
      borderRadius          : '5px',
    }
};

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErrorState, setNameErrorState] = useState(false);
    const [emailErrorState, setEmailErrorState] = useState(false);
    const [messageErrorState, setMessageErrorState] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [serverError, setServerError] = useState(true)
    
    const sendEmail = (e) => {
        e.preventDefault();
        reset()

        if(name && !email && !message){
            setEmailErrorState(true)
            setMessageErrorState(true)
        } else if(!name && email && !message ){
            setNameErrorState(true)
            setMessageErrorState(true)
        } else if(!name && !email && message ){
            setNameErrorState(true)
            setEmailErrorState(true)
        } else if(!name && email && message){
            setNameErrorState(true)
        } else if(name && !email && message){
            setEmailErrorState(true)
        } else if(name && email && !message){
            setMessageErrorState(true)
        } else if(!name && !email && !message){
            setNameErrorState(true)
            setMessageErrorState(true)
            setEmailErrorState(true)
        } else if(name && email && message){
            console.log(name,email,message)
            let templateParam = {
                'name': name, 
                'email': email, 
                'message': message, 
            }

            emailjs.send(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, templateParam, `${process.env.REACT_APP_EMAILJS_USERID}`)
            .then((result) => {
                setModalIsOpen(true)
            }, (error) => {
                setServerError(true)
            });
            window.scrollTo(0, 0)
            e.target.reset();
        }        
    }

    const reset = () => {
        setEmailErrorState(false)
        setNameErrorState(false)
        setMessageErrorState(false)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        reset()
        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div className='form'>
            { serverError ? 
            <div className='form__serverError'>
                <p className="margin">Sorry, there was an error in submitting your message. Please refresh this page and try again.</p>
                <img alt='exit icon' className='form__exitImg' src={Exit} onClick={()=>{setServerError(false)}}/>
            </div>
            :
            null}
            
            <div className='form__container'>
                <h1 className='form__header' >Contact</h1>
                <p className='form__title'>If you are curious about my work experience or are interested in reaching out with work opportunities, please feel free to contact me.</p>
            </div>
            <form className="form__contact" onSubmit={sendEmail}>
                <div className='form__details'>
                    <label className='form__label'>Your Name*</label>
                    <input type="text" name="name" className={nameErrorState ? 'form__input-error' : 'form__input'} onChange={(e)=>{setName(e.target.value)}} />
                    { nameErrorState ? <div className='form__error'>*Required</div> : null }
                </div>
                <div className='form__details'>
                    <label className='form__label'>Your Email Address*</label>
                    <input type="text" name="email" className={emailErrorState ? 'form__input-error' : 'form__input'} onChange={(e)=>{setEmail(e.target.value)}} />
                    { emailErrorState ? <div className='form__error'>*Required</div> : null }
                </div>
                <div className='form__details'>
                    <label className='form__label'>Message*</label>
                    <textarea name="message" className={messageErrorState ? 'form__text-error' : 'form__text'} onChange={(e)=>{setMessage(e.target.value)}}/>
                    { messageErrorState ? <div className='form__error'>*Required</div> : null }
                </div>
                <input type="submit" value="Send" className='form__button' />
            </form>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <img className='btn' src={BlackExit} onClick={closeModal}/>
                <img alt='Success icon' className='check' src={GreenCheck}/>
                <p>Message sent to Jodi!</p>
            </Modal>
        </div>
    )

}