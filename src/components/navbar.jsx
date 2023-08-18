import React from 'react';

function Navbar() {
  return (
    <>
        <nav className ="navbar navbar-expand-lg ps-5 pe-5">
            <div className ="container-fluid">
                <a className ="navbar-brand" href="#">
                    <img className ="w-75 h-75" src="logo.svg"/>
                </a>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className ="navbar-nav">
                        <a className ="nav-link" href="#">About Us</a>
                        <a className ="nav-link" href="#">Achievement</a>
                        <a className ="nav-link" href="#">Gallery</a>
                        <a className ="nav-link" href="#">Media Release</a>
                        <a className ="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
    </nav>
    </>
  );
}

export default Navbar;
