import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectCard } from '../../actions'

const CardListItem = ({ name, selected, dataid, projectCards, selectCard }) => {

  const toggleSelected = (e) => {
    //get clicked dataid
    const cardId = e.target.id

    //find by id in redux state
    const clickedCard = projectCards.all.filter(el => {
      return el._id === cardId
    })

    //toggle is_selected
    if (clickedCard[0].is_selected === false) {
      clickedCard[0].is_selected = true
    } else {
      clickedCard[0].is_selected = false
    }

    console.log("clickedCard", clickedCard[0])
    console.log("projectCards.all", projectCards.all);

    //send to ACTIONS
    // * right now this is sending the WHOLE card...
    // depending on how editing pans out, may need to only send the is_selected portion

    selectCard(clickedCard)
  }

  return (
    <div onClick={ toggleSelected }
      id={ dataid ? dataid : 'no-id' }
      className={`card-list-item ${ selected ? 'selected-card-item' : ''}`}>
      <i className="material-icons card-list-item-symbol">content_copy</i>
      <span className="card-list-item-name">{ name }</span>
    </div>
  )
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { selectCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListItem)
