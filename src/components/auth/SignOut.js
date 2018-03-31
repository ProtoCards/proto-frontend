import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { signOut } from '../../actions'
import { connect } from 'react-redux'
import { auth } from '../../firebase';


class SignOut extends Component {

  onSubmit = (event) => {
    event.preventDefault()
    auth.doSignOut()
      .then((stuff) => {
        this.props.signOut()
      })
  }

  render () {
    return (
      <button className="account" onClick={this.onSubmit}>Logout</button>

    )
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
