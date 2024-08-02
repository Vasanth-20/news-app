/* contains: top section, navbar */

import { Nav, NavDropdown, Navbar } from "react-bootstrap"

const Header = ({setCategory}) => {
    console.log('start');
  return (
    <>
        {/* top section */}
        <div className="d-flex justify-content-between px-2 py-2">
            <p className="h1">My News App</p>
            <button className="btn btn-outline-warning p-0 ">Read epaper</button>
        </div>

        {/* navbar */}
        <Navbar expand='lg' data-bs-theme='dark'>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mx-auto">
                    <Nav.Link onClick={() => setCategory('general')}>General</Nav.Link>
                    <Nav.Link onClick={() => setCategory('business')} >Business</Nav.Link>
                    <Nav.Link onClick={() => setCategory('entertainment')} >Entertainment</Nav.Link>
                    <Nav.Link onClick={() => setCategory('science')} >Science</Nav.Link>
                    <Nav.Link onClick={() => setCategory('sport')} >Sport</Nav.Link>
                    <Nav.Link onClick={() => setCategory('health')} >Health</Nav.Link>
                    <Nav.Link onClick={() => setCategory('technology')} >Technology</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default Header