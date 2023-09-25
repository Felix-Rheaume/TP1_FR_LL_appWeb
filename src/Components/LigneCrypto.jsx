import React from "react";
import PropTypes from "prop-types";

class LigneCrypto extends React.Component{



    render(){
        return(
            <>
                <th>
                    {this.props.nom}
                </th>
                <th>
                    {this.props.prix} $
                </th>
                <th>
                    {this.props.quantite}
                </th>
                <th>
                    {parseFloat(Number(this.props.total).toFixed(2))} $
                </th>
                <th>
                    <button className="btn btn-primary" onClick={() => this.props.fonctionModif(this.props.id)}>Modifier</button>
                </th>
            </>
        )
    }

}

LigneCrypto.propTypes = {
    nom: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    quantite: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    total: PropTypes.number,
    fonctionModif: PropTypes.func
}

export default LigneCrypto;