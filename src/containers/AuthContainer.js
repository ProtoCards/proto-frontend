import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {auth} from '../firebase'
import { signIn } from '../actions'

class AuthContainer extends Component {

  async getUid() {
    if (!this.props.uid) {
      const user = await auth.getUser()
      if (user) {
        console.log(user)
        this.props.signIn(user.uid)
        return user.uid
      } else {
        return null
      }
    } else {
      return this.props.uid
    }
  }

  render() {
    this.getUid().then(uid => {
      if (uid) {
        return(<div>{this.props.children}</div>)
      } else {
        return <Redirect to="/signin" />
      }
    })
  }
}

const mapStateToProps = state => ({
  uid: state.auth.uid
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signIn }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)
