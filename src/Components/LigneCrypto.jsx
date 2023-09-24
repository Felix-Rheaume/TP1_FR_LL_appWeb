import React from "react";

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

export default LigneCrypto;