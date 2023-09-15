import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Accueil extends React.Component{

    render(){
        return(
        <Container>
            <Row className="justify-content-md-center">
                <Col className="col-lg-10 col">
                    <h1>Accueil</h1>
                    <p>Bienvenue dans votre TP1 !!!</p>
                </Col>
            </Row>
            
        </Container>
        )
    }
}

export default Accueil;