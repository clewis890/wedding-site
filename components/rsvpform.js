import React, { useState, useReducer } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
// import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com'
// import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form'
// import { SwapCalls } from '@material-ui/icons';
import Swal from 'sweetalert2';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

  function reducer(state, action) {
    switch (action.type) {
      case 'name':
        return {
          ...state,
          name: action.value
        };
      case 'email':
        return {
          ...state,
          email: action.value
        };
      case 'message':
        return {
          ...state,
          message: action.value
        };
      default:
        throw new Error();
    }
  }

export default function MyForm() {
    const [formState, dispatch] = useReducer(reducer, initialState); 
    const [showFormErr, setShowFormErr] = useState(false); 
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' }); 
    const { register, handleSubmit, watch, errors } = useForm();
  
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('gmail', 
      // process.env.TEMPLATE_ID, 
      'template_6h97ddv',
      e.target, 
      // process.env.USER_ID 
      'user_52DVySDrVoAFY5uEbQliT'
      )
        .then(() => {   
          Swal.fire({
            timer: 10000,
            timerProgressBar: true,
            icon: 'success',
            title: 'Thanks!',
            text: `You successfully RSVP'ed! See you December 4th!`
          });
          }, () => {     
            Swal.fire({
              timer: 10000,
              timerProgressBar: true,
              icon: 'error',
              title: 'Oops!',
              text: 'Something went wrong. Try again in a few minutes.'
            });
          });
        e.target.reset();
    };

    return formSubmitted.title === '' ? (
        <form
          onSubmit={sendEmail}
          className={styles.form}
          >
            <div>
              {/* <input type="hidden" 
              name="_subject" 
              value="New submission!" /> */}
            {/* <label className={styles.label}>Full Name: *</label> */}
              <input 
              type="text"
              placeholder="Full Name"
              name="from_name" 
              className={styles.input} 
              onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
              maxLength="20"
              required 
              />
            </div>
            <div>
          {/* <label className={styles.label}>E-mail: *</label> */}
              <input 
              placeholder="example@gmail.com" 
              type="email" 
              name="reply_to" 
              className={styles.input} 
              onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
              required 
              />
            </div>
            <div className={styles.label}>
              <label htmlfor="plusone" style={{ fontSize: '0.7em', textAlign: 'left', fontStyle: 'normal' }}>Plus one?</label>
              <select className={styles.input} id="plusone" name="plusone" defaultValue="selectplusone" required>
                <option className={styles.option} defaultValue="" selected disabled required>Choose here</option>
                <option className={styles.option} defaultValue="yes">Yes</option>
                <option className={styles.option} defaultValue="no">No</option>
              </select>
               {/* <div>
              </div> */}
               {/* <label className={styles.label}>Name of plus one: </label> */}
               <input placeholder="Additional guest names" type="text" name="additional-name" className={styles.input} />
            </div>
            <div className={styles.label}>
                 {/* <label htmlfor="plus-one">How many guests?</label> */}
                  <select className={styles.input} id="numberofguests" name="number-of-guests" defaultValue="howmanyguests" required>
                    <option className={styles.option} defaultValue="" selected disabled>Choose here</option>
                    <option className={styles.option} defaultValue="1">1</option>
                    <option className={styles.option} defaultValue="2">2</option>
                    <option className={styles.option} defaultValue="3">3</option>
                    <option className={styles.option} defaultValue="4">4</option>
                    <option className={styles.option} defaultValue="5">5</option>
                    <option className={styles.option} defaultValue="6">6</option>
                    <option className={styles.option} defaultValue="7">7</option>
                    <option className={styles.option} defaultValue="8">8</option>
                    <option className={styles.option} defaultValue="9">9</option>
                    <option className={styles.option} defaultValue="10">10</option>
                    <option className={styles.option} defaultValue="100">100</option>
                  </select>
                  </div>
          <div>
            <div className={styles.messagebox}>
          {/* <label className={styles.label} >Message: </label> */}
          <textarea 
            // fullwidth="true"
            placeholder="Send a message to the couple!" 
            type="text" name="message" 
            minlength="5" 
            name="message"
            className={styles.textarea} 
            // rows="15" col="30" 
            // wrap="soft" 
            onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
            required
          >
          </textarea>
          </div>
          </div>
          {showFormErr ? <p>Please fill in all sections to send a message</p> : null }
          <button type="submit" className={styles.rsvpbutton} value="Send message">Confirm</button>
          {/* {status === "SUCCESS" ? <p className={styles.success}>Obrigado por confirmar sua presença! <FontAwesomeIcon icon={faGlassCheers} /></p> : <button className={styles.rsvpbutton}>Confirmar</button>}
          {status === "ERROR" && <p>Ops! Alguma coisa deu errado</p>} */}
        </form>
         ) : (
          <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', color: 'black', zIndex: '999', padding: '30px' }}>
            <h3>
              {formSubmitted.title}
            </h3>
            <p>
              {formSubmitted.paragraph}
            </p>
          </div>
      )
    }

        

  
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'name':
  //       return {
  //         ...state,
  //         name: action.value
  //       };
  //     case 'email':
  //       return {
  //         ...state,
  //         email: action.value
  //       };
  //     case 'message':
  //       return {
  //         ...state,
  //         message: action.value
  //       };
  //     default:
  //       throw new Error();
  //   }
  // }

 
  //   return formSubmitted.title === '' ? (
  
  //       <div className={classes.root}>
  //         <Header/>
  //         <div className={classes.container}>
  //           <h3 className={classes.formtitle}>
  //             We'd love to hear from you!<br/>
  //             Please fill out the form, include a brief message, and we will respond as fast
  //             as humanly possible.
  //           </h3>
  //           <form 
  //           // classes={classes.form} 
  //           onSubmit={sendEmail}
  //           >
  //             <div className="row">
  //               <div className={classes.input}>
  //                 <input type="text"
  //                   className={classes.formfield}
  //                   placeholder="Name"
  //                   name="from_name"
  //                   onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
  //                   // ref={register({
  //                   // required: "Please enter your name",
  //                   // maxLength: {
  //                   //   value: 30,
  //                   //   message: "Please enter a name with fewer than 30 characters"
  //                   // }
  //                   // })
  //                   // }
  //                   required/><br/>
  //                   {/* {errors.name && errors.name.message} */}
  //                   <br/>
  //               </div>
  //               <div className={classes.input}>
  //                 <input
  //                   type="email"
  //                   className={classes.formfield}
  //                   placeholder="Email address"
  //                   name="reply_to"
  //                 //   ref={register({
  //                 //   required: "Please enter an email",
  //                 //   pattern: {
  //                 //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}$/i,
  //                 //     message: "invalid email address"
  //                 //   }
  //                 // })}
  //                 onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
  //                   required/>
  //                 <br/>
  //                  {/* {errors.email && errors.email.message} */}
  //                  <br/>
  //               </div>
  //               <div className={classes.inputsubject}>
  //                 {/* <h3 className={classes.subject}>Subject:</h3> */}
  //                 <input
  //                   className={classes.formfield}
  //                   type="textarea"
  //                   name="subject"
  //                   placeholder="Subject"
  //                   styles={{
  //                   [
  //                     theme
  //                       .breakpoints
  //                       .down('xs')
  //                   ]: {
  //                     width: '60%'
  //                   }
  //                 }}
  //                   required />
  //               </div>
  //               <div className={classes.input}>
  //                 <textarea // id="standard-multiline-flexible"
  //                   className={classes.formfield} 
  //                   cols="30" rows="6" 
  //                   fullwidth="true"
  //                   multiline="true"
  //                   placeholder="Write your message here" 
  //                   name="message_html" 
  //                   // ref={register({required: true})} 
  //                   onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
  //                   required
  //                   >
  //                   </textarea>
  //                 <br/> 
  //                 {/* {errors.comment && "oops, you forgot your message!"} */}
  //                 <br/>
  
  //               </div>
  //               <div className={classes.input}>
  //                 {showFormErr ? <p>Please fill in all sections to send a message</p> : null }
  //                 <button type="submit" className={classes.submit} value="Send message">
  //                   Submit
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //        </div>
  //       </div>
  //   ) : (
  //     <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', color: 'black', zIndex: '999', padding: '30px' }}>
  //       <h3>
  //         {formSubmitted.title}
  //       </h3>
  //       <p>
  //         {formSubmitted.paragraph}
  //       </p>
  //     </div>
  //   );
  // }