import React, { Component } from 'react'
import axios from 'axios'

import './contact-form.sass'

const API_PATH = '/server-functions/mail.php'

class ContactForm extends Component {

  state = {
    formName: null,
    formPhone: null,
    error: null,
    mailSent: false,
    pageLocation: document.location.href,
    errorMessage: null
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const { formName, formPhone } = this.state
    if (formName === null || formPhone === null || formName.length < 2 || isNaN(formPhone) || formPhone.length < 6) {
      this.setState({
        errorMessage: 'Введите корректные данные'
      })
      return
    }
    this.setState({ errorMessage: null })
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
        setTimeout(this.props.contactFormToggle, 1000)
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render () {
    return (
      <div className='form-window'>
        <form onSubmit={this.onFormSubmit}>
          <p>Форма обратной связи</p>
          <span 
            className='close'
            onClick={this.props.contactFormToggle}>
            <i className="fa fa-times" />
          </span>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Ваше имя</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Имя"
              onChange={(e) => this.setState({ formName: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Ваш телефон</label>
            <input type="text"
                   className="form-control"
                   id="formGroupExampleInput2"
                   placeholder="8 987 654 32 10"
                   onChange={(e) => this.setState({ formPhone: e.target.value })} />
          </div>
          <button
            type="submit"
            className="btn btn-danger">
            Отправить
          </button>
          <div className='error-message'>
            {
              this.state.errorMessage ? <div className='alert alert-danger'>{this.state.errorMessage}</div> : null
            }
          </div>
          <div>
            {
              this.state.mailSent && <div className='alert alert-success'>Ваша заявка отправлена, скоро наш специалист свяжется с Вами.</div>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm
