import React from "react";
import PropTypes from "prop-types";

class LigneTableau extends React.Component{

    render() {

        let numberString = this.props.valeur.prix.toLocaleString('fr-FR');

        return (
            <>
                <th>
                    {this.props.model}
                </th>
                <th>
                    {this.props.valeur.marque}
                </th>
                <th>
                    {numberString} $
                </th>
            </>
        );
    }
}

LigneTableau.propTypes = {
    valeur: PropTypes.exact({
        prix: PropTypes.number,
        marque: PropTypes.string,
    }).isRequired,
    model: PropTypes.string.isRequired,
}

export default LigneTableau;