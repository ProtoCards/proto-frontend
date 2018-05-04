import React from 'react'
import SignOutButton from '../auth/SignOut'

const NavBar = () => {

  function toggleProjectDropdown(e){
    const projectDropdown = document.querySelector('.project-menu')

    projectDropdown.classList.contains('hide') ? projectDropdown.classList.remove('hide') : projectDropdown.classList.add('hide')
  }

  function toggleAccountDropdown(e){
    const accountDropdown = document.querySelector('.account-dropdown')

    accountDropdown.classList.contains('hide') ? accountDropdown.classList.remove('hide') : accountDropdown.classList.add('hide')
  }

  return (
    <div>
      <nav>
        <p className="brand">ProtoCard</p>
        <div className="project-name-wrapper" onClick={toggleProjectDropdown}>
          <h2 className="project-name">PROJECT NAME</h2>
          <i className="project-drop-down material-icons">arrow_drop_down</i>
        </div>

        <i className="account material-icons" id="user-account" onClick={toggleAccountDropdown}>account_box</i>
      </nav>

      <div className="account-dropdown hide">
        <SignOutButton />
      </div>

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
