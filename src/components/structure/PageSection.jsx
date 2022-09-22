import React from "react";
import "./PageSection.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function PageSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
}) {
    return (
        <>
            <div
                className={
                    lightBg ? "home__hero-section" : "home__hero-section darkBg"
                }
            >
                <div className="hero-section-container">
                    <div
                        className={
                            lightBg
                                ? "home__hero-row"
                                : "home__hero-row-reverse"
                        }
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1
                                    className={
                                        lightText ? "heading" : "heading dark"
                                    }
                                >
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? "home__hero-subtitle"
                                            : "home__hero-subtitle dark"
                                    }
                                >
                                    {description}
                                </p>
                                <Link to="/sign-up">
                                    <Button
                                        buttonSize="btn--wide"
                                        buttonColor="blue"
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img
                                    src={img}
                                    alt={alt}
                                    className="home__hero-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageSection;
