import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";

const Slideshow = () => {
    const images = [
        "https://i.imgur.com/IEwQ4UR.jpg",
        "https://i.imgur.com/5HCcHWf.jpg",
        "https://i.imgur.com/jcLqSYT.jpg",
        "https://i.imgur.com/ojjeOU5.jpg",
        "https://i.imgur.com/dUcCkIj.jpg",
        "https://i.imgur.com/wBVj4gr.jpg",
    ];

    return (
        <div>
            <Fade indicators={true}>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[0]} alt="First Slide" />
                        <p>First Slide</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[1]} alt="Second Slide" />
                        <p>Second Slide</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[2]} alt="Third Slide" />
                        <p>Third Slide</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[3]} alt="Fourth Slide" />
                        <p>Fr Slide</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[4]} alt="Fivth Slide" />
                        <p>Fv Slide</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-holder">
                        <img src={images[5]} alt="Sixth Slide" />
                        <p>Fv Slide</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Slideshow;
