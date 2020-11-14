import React from 'react';
import { useForm } from '@formspree/react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

export default class MyForm extends React.Component {
  constructor(props) {
      super();
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }

    /*
    function MyForm() {
    const [state, handleSubmit] = useForm('myybjojo');
    if (state.succeeded) {
      return <div><p className={styles.success}>Obrigado!  <FontAwesomeIcon icon={faGlassCheers} /></p></div>
    }
    return
      <form onSubmit={handleSubmit}>
        // input rest of form info here


         
        <button type="submit" disabled={state.submitting} className={styles.rsvpbutton}>Confirmar</button>
      </form>
  }
    
    */
  
    render() {
      const { status } = this.state;
      return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/myybjojo"
          method="POST"
          className={styles.form}>
              <div>
              <input type="hidden" name="_subject" value="New submission!" />
            <label className={styles.label}>Nome completo: *</label>
            <input placeholder="Insere seu nome e sobrenome" type="text" name="name" className={styles.input} maxLength="20" required />
            </div>
            <div>
          <label className={styles.label}>E-mail: *</label>
          <input placeholder="Insere seu e-mail aqui" type="text" name="_replyto" className={styles.input} required />
          </div>
           <div className={styles.label}>
              <label htnmlfor="plusone">Acompanhante(s)?</label>
              <select className={styles.input} id="plusone" name="plusone" defaultValue="selectplusone" required>
                <option className={styles.option} defaultValue="" selected disabled hidden>Escolha aqui</option>
                <option className={styles.option} defaultValue="no">Nao</option>
                <option className={styles.option} defaultValue="yes">Sim</option>
               </select>
               <div>
              </div>
               <label className={styles.label}>Nome(s) do(s) acompanhante(s): </label>
               <input placeholder="Esposo/a, Namorado/a, Filho/a" type="text" name="name" className={styles.input} />
           </div>
           <div className={styles.label}>
                 <label htmlfor="plus-one">Quantas pessoas?</label>
                  <select className={styles.input} id="plusone" name="number-of-guests" value="selectplusone" required>
                    <option className={styles.option} defaultValue="" selected disabled hidden>Escolha aqui</option>
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
          <label className={styles.label}>Mensagem: </label>
          <textarea placeholder="Pode mandar uma mensagem direto para o casal aqui" type="text" name="message" className={styles.textbox} rows="8" cols="10" wrap="hard">
          </textarea>
          </div>
          </div>
          {status === "SUCCESS" ? <p className={styles.success}>Obrigado!  <FontAwesomeIcon icon={faGlassCheers} /></p> : <button className={styles.rsvpbutton}>Confirmar</button>}
          {status === "ERROR" && <p>Ops! Certifique-se de completar o formulario</p>}
        </form>
      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }
  