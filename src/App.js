import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css'
import {auth} from './firebase'
import NavBar from './components/shared/NavBar'
import EditLeftSidebar from './containers/EditLeftSidebar'
import EditRightSidebar from './containers/EditRightSidebar'
import EditCenterMain from './containers/EditCenterMain'
import EditCenterCarousel from './containers/EditCenterCarousel'
import AddCardModal from './components/modals/AddCardModal'
import DeleteCardsModal from './components/modals/DeleteCardsModal'
import PrintPrep from './containers/PrintPrep.js'
import PrintSidebar from './containers/PrintSidebar'
import NewProjectScreen from './containers/NewProjectScreen';
import AssignFields from './components/newproject/AssignFields';
import Print from './containers/Print.js'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
// import AuthContainer from './containers/AuthContainer'
import { signIn } from './actions'

// async function getUid(uid, signIn) {
//   console.log(uid)
//   if (!uid) {
//     let user = await auth.getUser()
//     if (!user) {
//       console.log('no user')
//       return new Promise(function(resolve, reject) {
//         resolve(null)
//       })
//     } else {
//       console.log(user)
//       signIn(user.uid)
//       return user.uid
//     }
//   } else {
//     return uid
//   }
// }
//
const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
     localStorage.getItem('uid') ? (
        <Component {...props} {...rest}/>
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
          }}
        />
      )
  )} />
)

class App extends Component {

  render() {
    return(
      <Router>
      <div className="height100">

        <PrivateRoute exact path='/' component={ props =>
            <div className="route-wrapper">

              <DeleteCardsModal />
              <AddCardModal />
              <NavBar />
              <div className="edit-cards-view-container">
                <EditLeftSidebar />
                <div className="edit-center-container">
                  <EditCenterMain />
                  <EditCenterCarousel />
                </div>
                <EditRightSidebar />
              </div>

            </div>
        }/>

        <Route exact path='/print-prep' component={ props =>
          <div className="print-route">
            <NavBar />
            <div className="print-preview-container">
              <PrintSidebar />
              <PrintPrep />
            </div>
          </div>
        }/>

        <Route exact path='/newproject' component={ props =>
          <div className="route-wrapper">
            <NewProjectScreen />

          </div>
        }/>
        <Route exact path='/assignfields' component={ props =>
          <div className="route-wrapper">
            <AssignFields />
          </div>
        }/>

        <Route exact path='/print' component={ props =>
          <Print />
        }/>

        <Route exact path='/signup' component={ props =>
          <SignUp />
        }/>

        <Route exact path='/signin' component={ props =>
          <div>
            <NavBar />
            <SignIn />
          </div>
        }/>

      {// <PrivateRoute exact path='/protected' uid={this.props.uid} signIn={this.props.signIn} component={props =>
      //     <NavBar />
      //   }/>
    }


      </div>

    </Router>)
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

)(App)
