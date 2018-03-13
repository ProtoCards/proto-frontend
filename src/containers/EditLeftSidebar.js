import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CardActions from '../components/sidebars/CardActions'
import CardList from '../components/sidebars/CardList'

const EditLeftSidebar = () => {
  return (
    <div className="edit-left-sidebar-container">
      <div className="m-1">
        <h3>Filter By Type</h3>
        <select>
          <option value="SomeType">Some Type</option>
          <option value="NewType">New Type</option>
        </select>
      </div>
      <div className="divider"></div>
      <CardActions />
      <div className="divider"></div>
      <CardList />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLeftSidebar)
