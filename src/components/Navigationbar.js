import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../style/Styles.css'
        
function Navigationbar() {
    return (
            <Navbar className='navigation navbar-dark'>
                <Container>
                    <Navbar.Brand className='brands'>FERDIAN</Navbar.Brand>
                        <Nav>
                            <Nav.Link href='https://www.instagram.com/broggrammer/?hl=id'>Instagram</Nav.Link>
                            <Nav.Link href='https://github.com/ferdianbaguspr'>Github</Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/ferdian-bagus-68238b25a'>Linkedin</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        );
        }
        
        export default Navigationbar;
