import React, { Component } from 'react';

class SignUp extends Component {
  closeModal = () => {
    const modalSignup = document.querySelector('.modal-signup')
    modalSignup.classList.add('hide')
  }

  render () {
    return (
      <div className="modal-wrapper modal-signup">

        <div className="dark-overlay" onClick={ this.closeModal }>
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>SignUp</span>
            <i className="material-icons close-icon" onClick={ this.closeModal }>close</i>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Email</h3>
              <input type="email" name="email" id="email" className="modal-input"></input>
            </div>
          </div>

          <div className="mtb-2">
            <h3>Password</h3>
            <input type="password" name="password" id="password" className="modal-input"></input>
          </div>

          <button>Create Your Account</button>

        </div>

      </div>

    )
  }
}
export default SignUp;
