import React from 'react'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'

const CardList = ({ projectCards }) => {
// see ACTIONS > getProjectCards
console.log("projectCards from CardList", projectCards);
  return (
    <div>
      {/* <div>
        <div className="right-title">Print Quantity</div>
      </div> */}
      <div className="mtb-1 card-list">
        { projectCards.all.map((el, i) => {
          return <CardListItem name={el.workingTitle ? el.workingTitle : 'untitled'}
          cardType={el.cardType}
          printQuantity={el.printQuantity}
          selected={el.is_selected}
          key={i}
          dataid={el._id} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
