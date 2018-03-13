import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import CardQuantity from '../components/sidebars/CardQuantity'
import CardType from '../components/sidebars/CardType'
import FieldContent from '../components/sidebars/FieldContent'
import SymbolList from '../components/sidebars/SymbolList'

const EditRightSidebar = () => {
  return (
    <div className="edit-right-sidebar-container">
      <CardQuantity />
      <CardType />
      <FieldContent />
      <div className="divider"></div>
      <SymbolList />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRightSidebar)
