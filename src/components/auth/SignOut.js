import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { signOut } from '../../actions'
import { connect } from 'react-redux'
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
        this.props.signOut()
        this.context.router.history.push('/')
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signOut }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut)
