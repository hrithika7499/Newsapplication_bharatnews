import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#">INFO BUZZ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
