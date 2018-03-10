import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCard, selectAllCards, unselectAllCards } from '../../actions'

const CardActions = ( { projectCards, selectCard, selectAllCards, unselectAllCards } ) => {

  const openAddCardModal = () => {
    const modalAddCard = document.querySelector('.modal-add-card')
    modalAddCard.classList.remove('hide')
    let clearTitle = document.querySelector('#card-title')
    let clearQuantity = document.querySelector('#card-quantity')
    clearTitle.value = ''
    clearQuantity.value = ''
  }

  const selectAll = () => {
    const allCardsSelected = projectCards.all.map(el => {
      el.is_selected = true
      return el
    })
    selectAllCards(allCardsSelected)
  }

  const unselectAll = () => {
    const allCardsUnselected = projectCards.all.map(el => {
      el.is_selected = false
      return el
    })
    unselectAllCards(allCardsUnselected)
  }

  const openDeleteModal = () => {
    const selectedCards = projectCards.all.filter(el => {
      return el.is_selected === true
    })

    const modalDeleteCards = document.querySelector('.modal-delete-cards')
    modalDeleteCards.classList.remove('hide')
  }

  return (
    <div className="mtb-1 card-actions">
      <div onClick={ openAddCardModal } className="local-action">
        <i className="material-icons">add</i>
        <span>Add Card</span>
      </div>
      <div onClick={ selectAll } className="local-action">
        <i className="material-icons">check_box</i>
        <span>Select All</span>
      </div>
      <div onClick={ unselectAll } className="local-action">
        <i className="material-icons">check_box_outline_blank</i>
        <span>Unselect All</span>
      </div>
      <div onClick={ openDeleteModal }
        className="local-action hover-red">
        <i className="material-icons">delete</i>
        <span>Delete Selected</span>
      </div>
      <Link to="/print-prep">
        <div className="local-action">
          <i className="material-icons">print</i>
          <span>Print Prep</span>
        </div>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { selectCard, selectAllCards, unselectAllCards }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardActions)
