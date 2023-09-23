import React from "react";
import ReactCarousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { Col, Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-lg-10 col">

                        <h1>Carousel</h1>
                        <ReactCarousel interval={2000} >
                            <ReactCarousel.Item>
                                <CarouselImage imageIndex={0} />
                            </ReactCarousel.Item>
                            <ReactCarousel.Item>
                                <CarouselImage imageIndex={1} />
                            </ReactCarousel.Item>
                            <ReactCarousel.Item>
                                <CarouselImage imageIndex={2} />
                            </ReactCarousel.Item>
                            <ReactCarousel.Item>
                                <CarouselImage imageIndex={3} />
                            </ReactCarousel.Item>
                            <ReactCarousel.Item>
                                <CarouselImage imageIndex={4} />
                            </ReactCarousel.Item>
                        </ReactCarousel>

                    </Col>
                </Row>

            </Container>

        );
    }
}

export default Carousel;