import React from "react";
import ReactCarousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { Container } from "react-bootstrap";

class Carousel extends React.Component {
    render() {
        return (
            <Container>
                <div className="col-lg-10 col justify-content-lg-center">
                    <h1>Carousel</h1>
                    <ReactCarousel>
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
                </div>
            </Container>

        );
    }
}

export default Carousel;