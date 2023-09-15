import React from "react";

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

export default LigneTableau;