import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const webWorker = new Worker('Webworker.js')

class FibonnaciWebWorker extends React.Component{

    state = {
        valeurACalculer: 0,
        resultat: null,
    }

    handleChangedValue = (e) => {
        this.setState(() => ({
            valeurACalculer: !isNaN(parseInt(e.target.value)) ? parseInt(e.target.value) : 0
        }));
    }

    handleCalculer = (e) => {
        webWorker.postMessage(this.state.valeurACalculer)
        
        webWorker.onmessage = (e) => {
            this.setState({ resultat: e.data });
        }
    }

    render(){
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-lg-10 col">
                        <h1>Calculateur de Fibonacci</h1>
                        <label htmlFor="saisieFibonacci">Enter n:&nbsp;</label>
                        <input onChange={this.handleChangedValue} id="saisieFibonacci" type="number" value={this.state.valeurACalculer} />
                        <button onClick={this.handleCalculer}>Calculer</button>
                        <p>Fibonacci({this.state.valeurACalculer}) = {this.state.resultat}</p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default FibonnaciWebWorker;