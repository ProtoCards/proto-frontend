import React, { Component } from 'react';
import { auth } from '../../firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignIn extends Component {

  state = { ...INITIAL_STATE }
  closeModal = () => {
    const modalSignin = document.querySelector('.modal-signin')
    modalSignin.classList.add('hide')
  }


  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;
    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        console.log(authUser)
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  }

  render () {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === ''

    return (
      <div className="modal-wrapper modal-signin">

        <div className="dark-overlay" onClick={ this.closeModal }>
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Sign In</span>
            <i className="material-icons close-icon" onClick={ this.closeModal }>close</i>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Email</h3>
              <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" name="email" id="email" className="modal-input"></input>
            </div>
          </div>

          <div className="mtb-2">
            <h3>Password</h3>
            <input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password" name="password" id="password" className="modal-input"></input>
          </div>

          <button disabled={isInvalid} onClick={this.onSubmit}>Login</button>

          { error && <p>{error.message}</p> }
        </div>

      </div>

    )
  }
}
export default SignIn;
