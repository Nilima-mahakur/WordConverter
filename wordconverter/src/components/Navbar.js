import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li> */}

          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />

          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue mode</label>
            <input className="form-check-input" onClick={props.blueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green mode</label>
          <input className="form-check-input" onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red mode</label>
         <input className="form-check-input" onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>

        </div>
      </div>
    </nav>

  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about text here'
};