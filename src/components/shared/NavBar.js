import React from 'react'
import SignOutButton from '../auth/SignOut'

const NavBar = () => {

  function toggleHide(e){
    const projectDropDown = document.querySelector('.project-menu')

    projectDropDown.classList.contains('hide') ? projectDropDown.classList.remove('hide') : projectDropDown.classList.add('hide')
  }
  return (
    <div>
      <nav>
        <p className="brand">ProtoCard</p>
        <div className="project-name-wrapper" onClick={toggleHide}>
          <h2 className="project-name">PROJECT NAME</h2>
          <i className="project-drop-down material-icons">arrow_drop_down</i>
        </div>
        <SignOutButton />
        <i className="account material-icons">account_box</i>
      </nav>

      <div className="project-menu hide">
        <div className="project-menu-item">Current CSV file: csfFileName.csv</div>
        <div className="divider"></div>
        <div className="local-action project-menu-item" id="uploadCSV">
          <i className="material-icons">file_upload</i>
          Upload CSV
        </div>
        <div className="divider"></div>
        <div className="local-action project-menu-item" id="downloadCSV">
          <i className="material-icons">file_download</i>
          Download CSV
        </div>
      </div>
    </div>
  )
}

export default NavBar
