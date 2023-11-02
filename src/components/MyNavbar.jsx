import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  console.log("OGGETTO LOCATION", location);

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Navbar.Brand href="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: "100px", height: "55px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link className="font-weight-bold" href="/">
            Home
          </Nav.Link> */}
          <Link
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }
            to="/home"
          >
            Home
          </Link>

          {/* <Link active className="font-weight-bold">
            TV Shows
          </Link> */}
          <Link
            className={
              location.pathname === "/tvshow" ? "nav-link active" : "nav-link"
            }
            to="/tvshow"
          >
            Tv Show
          </Link>

          <Link
            className={
              location.pathname === "/movies" ? "nav-link active" : "nav-link"
            }
            to="/movies"
          >
            Movies
          </Link>
          <Link
            className={
              location.pathname === "/recently_added"
                ? "nav-link active"
                : "nav-link"
            }
            to="/recently_added"
          >
            Recently Added
          </Link>
          <Link
            className={
              location.pathname === "/mylist" ? "nav-link active" : "nav-link"
            }
            to="/mylist"
          >
            My List
          </Link>
          {/* <Nav.Link className="font-weight-bold" href="/">
            Movies
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            Recently Added
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            My List
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
