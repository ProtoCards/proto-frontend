import React from 'react'
import { Link } from 'react-router-dom'

const Print = () => {

  const print = (e) => {
    window.print()
  }

  return (
    <div className="print-background">

      <Link to="/print-prep">
        <div className="go-back">
          <i class="material-icons mr-05">arrow_back</i>
          <span>back to print preview</span>
        </div>
      </Link>

      <button onClick={ print }
        className="txt-center print-button">
        Print now
      </button>

      <div className="" id="printarea">
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
      </div>

      <div className="" id="printarea">
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
      </div>

    </div>
  )
}

export default Print
