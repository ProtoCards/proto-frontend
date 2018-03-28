import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProjectCard } from '../../actions'

class AddCardModal extends Component {
  state = {}

  closeModal = () => {
    const modalAddCard = document.querySelector('.modal-add-card')
    modalAddCard.classList.add('hide')
  }

  addCard = (e) => {
    e.preventDefault()

    let newCardTitle = document.querySelector('#card-title').value
    let newCardQuantity = parseInt(document.querySelector('#card-quantity').value, 10)

    // temporary hard code for development
    let newCard = {
      "projectId": "5a861f6ef36d2873fccf8312",
      "printQuantity": newCardQuantity,
      "properties": [
        {
          "name": "Title",
          "fieldId": "A",
          "content": newCardTitle
        }
      ]
    }
    console.log(newCard, "newCard");
    this.props.addProjectCard(newCard)
    this.closeModal()
  }

  render () {
    return (
      <div className="modal-wrapper modal-add-card hide">

        <div className="dark-overlay" onClick={ this.closeModal }>
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Add New Card</span>
            <i className="material-icons close-icon" onClick={ this.closeModal }>close</i>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Title</h3>
              <input type="text" name="cardTitle" id="card-title" className="modal-input"></input>
            </div>
            {/* <div className="checkbox-option mtb-05">
              <i className="material-icons small-icon mr-05">check_box</i>
              <span>Display Title on card</span>
            </div> */}
          </div>

          <div className="mtb-2">
            <h3>Type</h3>
            <select className="modal-input">
              <option value="SomeType">Some Type</option>
              <option value="SomeOtherType">Some Other Type</option>
              <option value="CustomType">Create New Type</option>
            </select>
          </div>


          <div className="mtb-2">
            <h3>Print Quantity</h3>
            <input type="text" name="cardQuantity" id="card-quantity" className="modal-input"></input>
          </div>

          <button onClick={ this.addCard }>Add New Card</button>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addProjectCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal)
