import React from 'react'
import { Link } from 'react-router-dom'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardPreview from '../components/CardPreview'

const PrintPrep = ({ projectCards }) => {

  //make local state that stores printgroups
  //have to recalculate every time state changes

  const printCards = projectCards.all.filter(el => {
    console.log(el, "el");
    return el.is_selected === true
  })

  // const printGroups = (printCards) => {
  //   let result = []
  //   let triplet = []
  //
  //   for(let i = 0; i < printCards.length; i++){
  //     triplet.push(printCards[i])
  //     if((i + 1) % 3 === 0){
  //       result.push(triplet)
  //       triplet = []
  //     } else if (i >= printCards.length - 2){
  //       result.push(triplet)
  //     } else if (i === printCards.length - 1 && printCards.length){
  //       result.push(triplet)
  //     }
  //   }
  //
  //   return result
  // }
  //
  // const triples = printGroups(printCards)

  return (
    <div className="print-preview">

      <Link to="/print">
        <button
          className="txt-center print-button">
          Print Preview
        </button>
      </Link>

      <div className="print-preview-page" id="printarea">
        {printCards.map((el, i) => {
          return <CardPreview key={el._id} title={el.properties[0].content} />
        })}



        {/* { triples ? triples.map((el, i) => {
          return <div key={i} className="card-row">
            {el.map(el => {
              return <CardPreview key={el._id} title={el.properties[0].content}/>
            })}
          </div>
        }) : ''} */}

        {/* <div className="card-row">
          <CardPreview />
          <CardPreview />
          <CardPreview />
        </div>
        <div className="card-row">
          <CardPreview />
          <CardPreview />
          <CardPreview />
        </div>
        <div className="card-row">
          <CardPreview />
          <CardPreview />
          <CardPreview />
        </div> */}
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
)(PrintPrep)
