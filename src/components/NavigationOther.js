import { Collapse } from '@material-ui/core'
import React from 'react'

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top navbar-other">
                <a className="navbar-brand" href="#pagetop">
                    <img src="logo_bm.png" alt="logo"/><span className="name">BETSY MANUEL</span>
                </a>
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
          
            <div className="collapse navbar-collapse navbar-dark navbar-other">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link ml-auto about" href="#about"><span className="underline">About</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link projects" href="#projects"><span className="underline">Projects</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link resume" href="#resume"><span className="underline">Resume</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link contact" href="#contact"><span className="underline">Contact</span></a>
                </li>    
              </ul>
            </div>
          </nav>

    </div>
  )
}
