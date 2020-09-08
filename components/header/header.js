import Head from 'next/head'
import Link from 'next/link'
import Clock from './clock'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header() {



  return (
    <header>



    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <div className="container">

      <Navbar.Brand href="/">IT-Sammlung</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Artikel" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">.tech</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Demos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Analytics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chat</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Web3-JS</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/showcase">Showcase</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>



      <style jsx>{`

      `}</style>

      <style jsx global>{`

      `}</style>
    </header>

  )
}
