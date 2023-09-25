import { func, number } from "prop-types";
import React from "react";

class LigneModifCrypto extends React.Component{

    state = {
        montant: this.props.montant,
        quantite: this.props.quantite
    };

    handleMontantChange = (event) => {
        this.setState({ montant: event.target.value });
      };
      
    handleQuantiteChange = (event) => {
    this.setState({ quantite: event.target.value });
    };

    render(){
        return(
            <>
                <tr>
                    <th>
                        Modifiez
                    </th>
                    <th>
                        <input type="text" id="montantChamp" value={this.state.montant} onChange={this.handleMontantChange}></input>
                    </th>
                    <th>
                        <input type="text" id="quantiteChamp" value={this.state.quantite} onChange={this.handleQuantiteChange}></input>
                    </th>
                    <th>
                        <button className="btn btn-primary" onClick={() => this.props.enregistrer(this.props.id, this.state.montant,this.state.quantite)}>Enregistrer</button>
                    </th>
                </tr>
            </>
        )
    }

}

LigneModifCrypto.propTypes = {
    montant: number.isRequired,
    quantite: number.isRequired,
    id: number.isRequired,
    enregistrer: func
}

export default LigneModifCrypto;