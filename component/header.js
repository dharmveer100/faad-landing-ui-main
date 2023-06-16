
export default function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="row w-100 align-items-center justify-content-between">
      <div className="col-xl-4 col-lg-4 nav-brand-column">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
      </div>
      <div className="col-xl-8  col-lg-8">
        <div className="nav-container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Startups
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Investors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Faad Accelerator
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center " role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#">
                    About Us
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>

              

                </li>

                <li className="nav-item d-block d-md-none">
                <button className="btn btn-danger" type="submit">
                Login <i className="fa fa-arrow-right"></i>
              </button>
              </li>


              </ul>
           
            </div>
          </div>

          <div className="btn-column-right d-none d-lg-block ">
      <button className="btn btn-danger" type="submit">
                Login <i className="fa fa-arrow-right"></i>
              </button>
        </div>


        </div>
      </div>
    
    </div>
  </div>
</nav>



     
    </>
  )
}
