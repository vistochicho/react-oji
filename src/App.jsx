//import component Bootstrap React
import { Navbar, Container, Nav } from 'react-bootstrap'

//import react router dom
import { Route, Routes, Link } from "react-router-dom";

//import component Home
import IndexIdentity from './pages/identity/Index';

//import component Post Index
// import PostIndex from './pages/posts/Index'

//import component Post Create
import CreateIdentity from './pages/identity/Create'

//import component Post Edit
import EditIdentity from './pages/identity/Edit'

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Oji</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
                  <Nav.Link as={Link} to="/identity" className="nav-link">POSTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Routes>
        <Route path="/identity" element={<IndexIdentity/>} />
        {/* <Route exact path="/posts" element={PostIndex} /> */}
        <Route path="/identity/create" element={<CreateIdentity/>} />
        <Route path="/identity/edit/:id" element={<EditIdentity/>} />
      </Routes>
    </div>
  );
}

export default App;