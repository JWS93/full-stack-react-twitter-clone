import React from 'react';


const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-primary bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Twitter</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">My Profile</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm btn-primary rounded logout-btn">Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="container">
          <span className="me-3 text-secondary">Twitter Clone</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;