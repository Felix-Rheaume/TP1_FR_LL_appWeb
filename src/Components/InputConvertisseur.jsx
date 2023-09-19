import React from "react";

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

export default InputConvertisseur;