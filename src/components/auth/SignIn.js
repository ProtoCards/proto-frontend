import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit = (event) => {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        localStorage.setItem('uid', authUser.uid)
        localStorage.setItem('token', authUser.refreshToken)
        let redirectPath
        if (this.context.router.route.location.state) {
          redirectPath = this.context.router.route.location.state.referrer.pathname
        } else {
          redirectPath = '/'
        }
        this.context.router.history.push(redirectPath)
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

        <div className="dark-overlay">
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Sign In</span>
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

export default SignIn
