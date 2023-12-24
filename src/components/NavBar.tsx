import "../styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
                <Link to="/" className="nav-link active nav-link-custom">
                  Asosiy
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link
                  to="/MaishiyXizmatlar"
                  className="nav-link active nav-link-custom"
                >
                  Maishiy xizmatlar
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link
                  to="/DavlatXizmatlari"
                  className="nav-link active nav-link-custom"
                >
                  Davlat xizmatlari
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link
                  to="/IjaraMashinalar"
                  className="nav-link active nav-link-custom"
                >
                  Ijara mashinalar
                </Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link
                  to="/IjaraUylar"
                  className="nav-link active nav-link-custom"
                >
                  Ijara uylar
                </Link>
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
