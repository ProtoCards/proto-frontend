import React from 'react'
import { Link } from 'react-router-dom'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardPreview from '../components/CardPreview'

const PrintPrep = ({ projectCards }) => {

  //make local state that stores printgroups
  //have to recalculate every time state changes

  const printCards = projectCards.all.filter(el => {
    return el.is_selected === true
  })
  console.log(printCards, "printCards");

  const printGroups = (printCards) => {
    let result = []
    let nine = []

    let remainder = printCards.slice(printCards.length - (printCards.length % 9))

    for(let i = 0; i < printCards.length; i++){
      nine.push(printCards[i])
      if((i + 1) % 9 === 0){
        result.push(nine)
        nine = []
      }
    }

    if(remainder.length) result.push(remainder)
    return result
  }
  console.log("printGroups", printGroups(printCards))

  const cardsByNine = printGroups(printCards)

  return (
    <div className="print-preview">

      <Link to="/print">
        <button
          className="txt-center print-button">
          Print Preview
        </button>
      </Link>

      { cardsByNine ? cardsByNine.map((el, i) => {
        return <div key={i} className="print-preview-page" id="printarea">
          {el.map(el => {
            return <CardPreview key={el._id} title={el.properties[0].content}/>
          })}
        </div>
      }) : ''}


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
)(PrintPrep)
