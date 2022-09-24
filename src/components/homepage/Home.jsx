import React from "react";
import Slideshow from "./Slider";
import PageSection from "../structure/PageSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./PagesData";

function Home() {
    return (
        <div>
            <Slideshow />
            <PageSection {...homeObjOne} />
            <PageSection {...homeObjTwo} />
            <PageSection {...homeObjThree} />
        </div>
    );
}

export default Home;
