import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCards } from '../../actions'

class DeleteCardsModal extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  closeModal = () => {
    const modalDeleteCards = document.querySelector('.modal-delete-cards')
    modalDeleteCards.classList.add('hide')
  }

  confirmDeleteCards = (e) => {
    e.preventDefault()

    const selectedCards =
    this.props.projectCards.all.filter(el => {
      return el.is_selected === true
    })

    this.props.deleteCards(selectedCards)
    this.closeModal()
  }

  render () {
    const cardsToDelete =
    this.props.projectCards.all.filter(el => {
      return el.is_selected === true
    })

    return (
      <div className="modal-wrapper modal-delete-cards hide">

        <div className="dark-overlay" onClick={ this.closeModal }>
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Delete</span>
            <i className="material-icons close-icon" onClick={ this.closeModal }>close</i>
          </div>

          <div className="mtb-2 txt-ctr">
            Are you sure that you want to delete these cards?
          </div>
          <div className="mtb-2 txt-ctr">{ cardsToDelete.length ? cardsToDelete.map(el => {
            return el.workingTitle ? el.workingTitle : 'untitled'
          }).join(', ') : <span><i>No cards selected</i></span>}</div>

          <button onClick={ this.confirmDeleteCards } className="red-bg">Yes, Delete</button>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteCards }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCardsModal)
