import React from "react";
import InputConvertisseur from "./InputConvertisseur";
import ContainerBase from "./ConteneurBase";

class Convertisseur extends React.Component {

    state = {
        distCm: 0,
        distM: 0,
        distKm: 0
    }

    onDistanceChange = (distance, unite) => {

        var distanceActuelle = Number.parseFloat(distance);
        if (distanceActuelle === null || isNaN(distanceActuelle)) {
            distanceActuelle = 0;
        }

        switch (unite) {
            case "cm":
                this.setState({
                    distCm: distanceActuelle,
                    distM: distanceActuelle / 100,
                    distKm: distanceActuelle / 100000
                });
                break;
            case "m":
                this.setState({
                    distCm: distanceActuelle * 100,
                    distM: distanceActuelle,
                    distKm: distanceActuelle / 100
                });
                break;
            case "km":
                this.setState({
                    distCm: distanceActuelle * 100000,
                    distM: distanceActuelle * 100,
                    distKm: distanceActuelle
                });
                break;
            default: break;
        }
    }

    render() {
        return (
            <ContainerBase>
                <h1>Convertisseur d'unité de mesure</h1>
                <InputConvertisseur txtMesure="Centimetres" distance={this.state.distCm} echelle="cm" onDistanceChange={this.onDistanceChange} />
                <InputConvertisseur txtMesure="Metres" distance={this.state.distM} echelle="m" onDistanceChange={this.onDistanceChange} />
                <InputConvertisseur txtMesure="Kilometres" distance={this.state.distKm} echelle="km" onDistanceChange={this.onDistanceChange} />
            </ContainerBase>
        )
    }
}

export default Convertisseur;