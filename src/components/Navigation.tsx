import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return(
        <aside style={{position:"fixed", left:"0", top:"0", display:"flex"}}>
            <Navbar bg="primary" variant="dark" className="flex-column" style={{height:"500vh", width: "200px"}}>
                <Container className="flex-column" style={{display:"flex", alignItems:"start"}}>
                    <Navbar.Brand>
                    Epicure
                    </Navbar.Brand>
                    <Nav className="flex-column" >
                        <Nav.Link as={Link} to='/dashboard'  >Dashboard</Nav.Link>
                        <Nav.Link as={Link} to='/restaurants'>Restaurants</Nav.Link>
                        <Nav.Link as={Link} to='/dishes'>Dishes</Nav.Link>
                        <Nav.Link as={Link} to='/chefs'>Chefs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </aside>
    )
}

export default Navigation
