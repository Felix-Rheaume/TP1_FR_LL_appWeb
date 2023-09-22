import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputConvertisseur from "./InputConvertisseur";

class Convertisseur extends React.Component{

    state = {
        distCm: 0,
        distM: 0,
        distKm: 0
    }

    onDistanceChange = (distance, unite) =>{

        var distanceActuelle = Number.parseFloat(distance);
        if(distanceActuelle === null || isNaN(distanceActuelle)){
            distanceActuelle = 0;
        }

        switch(unite){
            case "cm":
                this.setState({
                    distCm: distanceActuelle,
                    distM: distanceActuelle*10,
                    distKm: distanceActuelle*100
                });
                break;
            case "m":
                this.setState({
                    distCm: distanceActuelle/10,
                    distM: distanceActuelle,
                    distKm: distanceActuelle*10
                });
                break;
            case "km":
                this.setState({
                    distCm: distanceActuelle/100,
                    distM: distanceActuelle/10,
                    distKm: distanceActuelle
                });
                break;
            default: break;
        }
    }

    render(){
        return(
        <Container>
            <Row className="justify-content-md-center">
                <Col className="col-lg-10 col">
                    <h1>Convertisseur d'unité de mesure</h1>
                    <InputConvertisseur txtMesure="Centimetres" distance={this.state.distCm} echelle="cm" onDistanceChange={this.onDistanceChange}/>
                    <InputConvertisseur txtMesure="Metres" distance={this.state.distM} echelle="m" onDistanceChange={this.onDistanceChange}/>
                    <InputConvertisseur txtMesure="Kilometres" distance={this.state.distKm} echelle="km" onDistanceChange={this.onDistanceChange}/>
                </Col>
            </Row>
            
        </Container>
        )
    }
}

export default Convertisseur;