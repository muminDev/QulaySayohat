import "../styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Qulaylik.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-item-custom">
                <Link to="/">
                  <a
                    className="nav-link active nav-link-custom"
                    aria-current="page"
                    href="#"
                  >
                    Asosiy
                  </a>
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link to="/Blogs">
                  <a
                    className="nav-link active nav-link-custom"
                    aria-current="page"
                    href="#"
                  >
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <a
                  className="nav-link active nav-link-custom"
                  aria-current="page"
                  href="#"
                >
                  Davlat xizmatlari
                </a>
              </li>
              <li className="nav-item nav-item-custom">
                <a
                  className="nav-link active nav-link-custom"
                  aria-current="page"
                  href="#"
                >
                  Ijara mashinalar
                </a>
              </li>
              <li className="nav-item nav-item-custom">
                <a
                  className="nav-link active nav-link-custom"
                  aria-current="page"
                  href="#"
                >
                  Ijara uylar
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
