import React from "react";
import Slideshow from "./Slider";
import PageSection from "../structure/PageSection";
import { homeObjOne, homeObjTwo } from "./PagesData";

function Home() {
    return (
        <div>
            <Slideshow />
            <PageSection {...homeObjOne} />
            <PageSection {...homeObjTwo} />
        </div>
    );
}

export default Home;
