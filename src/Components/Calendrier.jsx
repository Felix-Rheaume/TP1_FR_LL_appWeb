import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Calendrier extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-lg-10 col">
                        <h1>Calendrier</h1>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            locale='fr'
                            events={[
                                { title: '100% tp app web', date: '2023-09-26' },
                                { title: 'Fêter la note app web', date: '2023-10-05' }
                            ]}
                        >
                        </FullCalendar>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Calendrier;
