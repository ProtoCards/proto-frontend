import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CardActions from '../components/sidebars/CardActions'
import CardList from '../components/sidebars/CardList'

const EditLeftSidebar = () => {
  return (
    <div className="edit-left-sidebar-container">
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
