import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

console.log(currentUser)

const App = () => (

  <Router>
    <div className="height100">

      <Route exact path='/' component={ props =>

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

    </div>

  </Router>

)

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(App)
