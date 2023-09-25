import React from "react";
import LigneTableau from "./LigneTableau";
import ContainerBase from "./ConteneurBase";

class Tableau extends React.Component {

    state = {
        modele: "Skidoo"
    }

    listeEvenements = [{ marque: "Summit", prix: 14799 }, { marque: "Freeride", prix: 19699 }, { marque: "Backcountry", prix: 11849 }, { marque: "Expedition", prix: 11889 }, { marque: "Skandic", prix: 12349 }, { marque: "Tundra", prix: 10949 }];

    render() {
        return (
            <ContainerBase>
                <h1>
                    Tableau d'évènements
                </h1>

                <table>
                    <tbody>
                        <tr>
                            <th><h2>Modele</h2></th>
                            <th><h2>Marque</h2></th>
                            <th><h2>Prix</h2></th>
                        </tr>
                        {this.listeEvenements.map((valeurListe) => {
                            return (
                                <React.Fragment key={valeurListe.marque}>
                                    <tr>
                                        <LigneTableau model={this.state.modele} valeur={valeurListe}></LigneTableau>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </ContainerBase>
        );
    }
}

export default Tableau;