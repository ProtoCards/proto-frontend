import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { auth } from '../../firebase';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUp extends Component {

  state = { ...INITIAL_STATE }

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit = (event) => {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#passwordOne').value

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        localStorage.setItem('uid', authUser.uid)
        localStorage.setItem('token', authUser.refreshToken)
        this.context.router.history.push('/')
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  }

  render () {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === ''

    return (
      <div className="modal-wrapper modal-signup">

        <div className="dark-overlay">
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Sign Up</span>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Email</h3>
              <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" name="email" id="email" className="modal-input"></input>
            </div>
          </div>

          <div className="mtb-2">
            <h3>Password</h3>
            <input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} type="password" name="passwordOne" id="passwordOne" className="modal-input"></input>
          </div>

          <div className="mtb-2">
            <h3>Confirm Password</h3>
            <input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} type="password" name="passwordOne" id="passwordwo" className="modal-input"></input>
          </div>

          <button disabled={isInvalid} onClick={this.onSubmit}>Create Your Account</button>

          { error && <p>{error.message}</p> }
        </div>

      </div>

    )
  }
}


export default SignUp
