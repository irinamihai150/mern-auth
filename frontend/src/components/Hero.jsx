import { Container, Card, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
// import EntryCard from "../screens/EntryCard"

const Hero = () => {
	return (
		<div className='py-5'>
			<Container className='d-flex justify-content-center'>
				<Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
					<h1 className='text-center mb-4'>Mern auth</h1>
					<p className='text-center mb-4'>
						This is a boiler plate for mern auth
					</p>
					<div className='d-flex'>
						<LinkContainer to='/login'>
							<Button variant='primary'>Sign in</Button>
						</LinkContainer>
						<LinkContainer to='/register'>
							<Button variant='secondary'>Sign Up</Button>
						</LinkContainer>
					</div>
				</Card>
				{/* <EntryCard /> */}
			</Container>
		</div>
	)
}

export default Hero
