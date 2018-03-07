import React from 'react'
// import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import FilterByTags from '../components/sidebars/FilterByTags'
import PrintActions from '../components/sidebars/PrintActions'
import CardList from '../components/sidebars/CardList'

const PrintSidebar = () => {
  return (
    <div className="edit-left-sidebar-container">
      <Link to="/">
        <div className="go-back">
          <i class="material-icons mr-05">arrow_back</i>
          <span>back to edit view</span>
        </div>
      </Link>

      <FilterByTags />
      <div className="divider"></div>
      <PrintActions />
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
)(PrintSidebar)
