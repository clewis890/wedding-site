import React from 'react';
import styles from '../styles/Home.module.css'

export default class MyForm extends React.Component {
  constructor(props) {
      super();
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mzbkgogw"
          method="POST"
          className={styles.form}>
              <div>
            <label className={styles.label}>Nome: *</label>
            <input type="text" name="name" className={styles.input} maxlength="20" required />
            </div>
            <div>
            <label className={styles.label}>Sobrenome: *</label>
            <input type="text" name="lastname" className={styles.input} maxlength="40" required />
            </div>
            <div>
          <label className={styles.label}>Email: *</label>
          <input type="email" name="email" className={styles.input} required />
          </div>
           <div className={styles.label}>
              <label htnmlFor="plusone">Acompanhante(s)?</label>
              <select className={styles.input} id="plusone" name="plusone" required>
                <option className={styles.option} value="" selected disabled hidden>Escolha aqui</option>
                <option className={styles.option} value="no">Nao</option>
                <option className={styles.option} value="yes">Sim</option>
               </select>
               <div>
              </div>
               <label className={styles.label}>Nome: </label>
               <input type="text" name="name" className={styles.input} />
           </div>
           <div className={styles.label}>
                 <label htnmlFor="plusone">Acompanhante?</label>
                  <select className={styles.input} id="plusone" name="plusone">
                    <option className={styles.option} value="" selected disabled hidden>Escolha aqui</option>
                    <option className={styles.option} value="no">Nao</option>
                    <option className={styles.option} value="yes">Sim</option>
                  </select>
                  </div>
          <div>
            <div className={styles.messagebox}>
          <label className={styles.label}>Mensagem: *</label>
          <textarea type="text" name="message" className={styles.textbox} rows="8" cols="10" wrap="hard" required>
          </textarea>
          </div>
          </div>
          {status === "SUCCESS" ? <p>Obrigado! Ficamos feliz de te ter no nosso dia especial :)</p> : <button className={styles.rsvpbutton}>Submit</button>}
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