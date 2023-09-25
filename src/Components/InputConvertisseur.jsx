import React from "react";
import PropTypes from "prop-types";

class InputConvertisseur extends React.Component{

    handleChange = (event) => {
        this.props.onDistanceChange(event.target.value,this.props.echelle);
    }

    render(){
        return(
            <div>
                <label style={{fontSize: "1.5rem"}}>Saisissez la mesure en {this.props.txtMesure}</label>
                <br/>
                <input type="text" value={this.props.distance} onChange={this.handleChange}></input>
            </div>
        )
    }
}

InputConvertisseur.propTypes = {
    onDistanceChange:  PropTypes.func,
    echelle: PropTypes.string.isRequired,
    distance: PropTypes.number
}

export default InputConvertisseur;