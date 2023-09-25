import React from "react";
import ReactCarousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import ContainerBase from "./ConteneurBase";

class Carousel extends React.Component {
    render() {
        return (
            <ContainerBase>
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
            </ContainerBase>

        );
    }
}

export default Carousel;