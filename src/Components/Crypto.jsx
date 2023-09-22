import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LigneCrypto from "./LigneCrypto";

class Crypto extends React.Component{

    state = {
        listeLignesCrypto: [
            {nom: "Bitcoin", prix: 95309, quantite: 29},
            {nom: "Ethereum", prix: 2233, quantite: 12},
            {nom: "Tether", prix: 136, quantite: 3},
            {nom: "USD Coin", prix: 1365, quantite: 7},
            {nom: "BNB", prix: 293, quantite: 5},
            {nom: "XRP", prix: 0.683, quantite: 77},
            {nom: "Cardano", prix: 0.3493, quantite: 3},
            {nom: "Solana", prix: 26.77, quantite: 32},
            {nom: "Polkadot", prix: 5.828, quantite: 65}
        ],
        idModif: 0
    }

    onModifBoutonClique = (idActuel) => {

    }

    render(){
        return(
            <Container>
            <Row className="justify-content-md-center">
                <Col className="col-lg-10 col">
                    <h1>Crypto</h1>
                    <table className="table table-hover table-responsive text-center tableCrypto">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Quantité</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    {this.state.listeLignesCrypto.map((valeurListe) =>{
                            return(
                                <tr>
                                    <LigneCrypto nom={valeurListe.nom} prix={valeurListe.prix} quantite={valeurListe.quantite} total={valeurListe.prix * valeurListe.quantite}></LigneCrypto>
                                </tr>
                            );
                        })}
                    </table>
                </Col>
            </Row>
            
        </Container>
        )
    }
}

export default Crypto;