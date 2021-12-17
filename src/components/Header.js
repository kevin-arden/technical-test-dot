import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  const { loginState, setLoginState } = props;
  const history = useNavigate();
  const logOut = () => {
    return setLoginState(false);
  };

  return (
    <Navbar className="mb-4">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="logoTag_Nav">
          <Link to="/">CekOngkir</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              exact
              activeClassName="actived"
              className="nav_link me-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              activeClassName="actived"
              className="nav_link me-2"
            >
              Profile
            </NavLink>
          </Nav>
          {/* {auth.user === "belum login" ? ( */}
          {loginState === false ? (
            <Button onClick={() => history("/login")} variant="primary">
              Login
            </Button>
          ) : (
            <Button onClick={() => logOut()} variant="danger">
              Log Out
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
