import { Navbar, Nav, Container } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='./'>Mern app</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
					<Nav className='ms-auto'>
						<Nav.Link href='./login'>
							<FaSignInAlt />
							Sign In
						</Nav.Link>
						<Nav.Link href='./login'>
							<FaSignOutAlt />
							Sign Out
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
