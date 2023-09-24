import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LigneCrypto from "./LigneCrypto";
import LigneModifCrypto from "./LigneModifCrypto";

class Crypto extends React.Component{

    state = {
        listeLignesCrypto: [
            {nom: "Bitcoin", prix: 95309, quantite: 29, id: 1},
            {nom: "Ethereum", prix: 2233, quantite: 12, id:2},
            {nom: "Tether", prix: 136, quantite: 3, id:3},
            {nom: "USD Coin", prix: 1365, quantite: 7,id:4},
            {nom: "BNB", prix: 293, quantite: 5,id:5},
            {nom: "XRP", prix: 0.683, quantite: 77, id:6},
            {nom: "Cardano", prix: 0.3493, quantite: 3,id:7},
            {nom: "Solana", prix: 26.77, quantite: 32,id:8},
            {nom: "Polkadot", prix: 5.828, quantite: 65,id:9}
        ],
        idModif: 0
    }

    onModifBoutonClique = (idActuel) => {
        this.setState({
            idModif: idActuel
        });
    }

    onEnregistrerBoutonClique = (idActuel, prix, quantite) => {
        //On set les nouvelles valeurs
        this.setState(
            this.state.listeLignesCrypto.map((valeur) => {
                if(valeur.id === idActuel){
                    valeur.prix = isNaN(prix)?valeur.prix:prix;
                    valeur.quantite = isNaN(quantite)?valeur.quantite:quantite;
                }
                return valeur;
            })
        );

        //On enleve la ligne modif
        this.setState({
            idModif: 0
        });
    }

    render(){
        return(
            <Container>
            <Row className="justify-content-md-center">
                <Col className="col-lg-10 col">
                    <h1>Crypto</h1>
                    <table className="table table-hover table-responsive text-center tableCrypto">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Quantité</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listeLignesCrypto.map((valeurListe) => {
                                let contenuLigneModif = null;
                                if (this.state.idModif === valeurListe.id) {
                                    contenuLigneModif = (
                                        <LigneModifCrypto key={this.state.idModif} id={this.state.idModif} montant={valeurListe.prix} quantite={valeurListe.quantite} enregistrer={this.onEnregistrerBoutonClique} />
                                    );
                                }

                                return (
                                    <React.Fragment key={valeurListe.id}>
                                        <tr>
                                            <LigneCrypto key={valeurListe.id} id={valeurListe.id} nom={valeurListe.nom} prix={valeurListe.prix} quantite={valeurListe.quantite} total={valeurListe.prix * valeurListe.quantite} fonctionModif={this.onModifBoutonClique} />
                                        </tr>
                                        {contenuLigneModif}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
            
        </Container>
        )
    }
}

export default Crypto;