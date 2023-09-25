import React from "react";
import imageReact from "../Images/React.png";
import imageHtml from "../Images/Html.png";
import imageCss from "../Images/Css.png";
import imageRien from "../Images/Rien.png";
import imageNode from "../Images/Node.png";
import imageJS from "../Images/Javascript.png";
import PropTypes from 'prop-types';

const altText = "Une belle image"


function CarouselImage(props) {
    let imageSrc;
    switch (props.imageIndex) {
        case 0:
            imageSrc = imageReact
            break
        case 1:
            imageSrc = imageHtml
            break
        case 2:
            imageSrc = imageCss
            break
        case 3:
            imageSrc = imageJS
            break
        case 4:
            imageSrc = imageNode
            break
        default:
            imageSrc = imageRien
    }

    return <img className="carouselImages" src={imageSrc} alt={altText}  />
}

CarouselImage.propTypes = {
    imageIndex: PropTypes.number.isRequired
}

export default CarouselImage;

