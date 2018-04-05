import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { signIn } from '../../actions'
import { connect } from 'react-redux'
import { auth } from '../../firebase';
import PropTypes from 'prop-types'
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

  closeModal = () => {
    const modalSignin = document.querySelector('.modal-signin')
    modalSignin.classList.add('hide')
  }

  onSubmit = (event) => {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.signIn(authUser.uid)
        this.context.router.history.push('/')
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signIn }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
