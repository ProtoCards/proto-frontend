import React, { Component } from 'react';
import { auth } from '../../firebase';
import PropTypes from 'prop-types'

class SignOut extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit = (event) => {
    event.preventDefault()
    auth.doSignOut()
      .then((stuff) => {
        localStorage.removeItem('uid')
        localStorage.removeItem('token')
        this.context.router.history.push('/signin')
      })
  }

  render () {
    if (localStorage.getItem('uid')) {
      return (
        <button className="account" onClick={this.onSubmit}>Logout</button>
      )
    } else {
      return(null)
    }
  }
}

export default SignOut
