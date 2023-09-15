import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LigneTableau from "./LigneTableau";

class Tableau extends React.Component{

    state = {
        modele: "Skidoo"
    }

    listeEvenements = [{marque: "Summit", prix: 14799},{marque: "Freeride", prix: 19699},{marque: "Backcountry", prix: 11849},{marque: "Expedition", prix: 11889},{marque: "Skandic", prix: 12349},{marque: "Tundra", prix: 10949}];

    render(){
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-lg-10 col">
                        <h1>
                            Tableau d'évènements
                        </h1>

                        <table>
                            <tr>
                                <th><h2>Modele</h2></th>
                                <th><h2>Marque</h2></th>
                                <th><h2>Prix</h2></th>
                            </tr>
                            {this.listeEvenements.map((valeurListe) =>{
                                return(
                                    <tr>
                                        <LigneTableau model={this.state.modele} valeur={valeurListe}></LigneTableau>
                                    </tr>
                                );
                            })}
                        </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Tableau;