import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Container>
                <Row>
                    <Col xs={4} sm={3}>
                        <SideMenu />
                    </Col>
                    <Col xs={8} sm={9}>
                        <Routes>
                            <Route path="/" element={<h2>Home</h2>}/>
                            <Route path="/data" element={<h2>Data</h2>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
