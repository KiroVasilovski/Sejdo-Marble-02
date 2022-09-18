import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const itemData = [
    {
        img: "https://i.imgur.com/dW3AXyE.png",
        title: "Bianco Antico",
        url: "bianco-antico",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/Nv8Ztsx.png",
        title: "Moon White",
        url: "moon-white",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/1cnwOhr.png",
        title: "Juparana Sol",
        url: "juparana-sol",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/X64OziV.png",
        title: "Titanium Black",
        url: "titanium-black",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/2xMMU9S.png",
        title: "Imperial Red",
        url: "imperial-red",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/RjABIlp.png",
        title: "Thasos White",
        url: "thasos-white",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/VgwlHkh.png",
        title: "Multicolor Red",
        url: "multicolor-red",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/wh6RHSy.png",
        title: "Kavala",
        url: "kavala",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/McDJgx3.png",
        title: "Travertine",
        url: "travertine",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/wIowmGf.png",
        title: "Verde Marina",
        url: "verde-marina",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/qWFI7Or.png",
        title: "Colonial White",
        url: "colonial-white",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/NNoWkW9.jpg",
        title: "Volakas",
        url: "volakas",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/OYrRWpQ.png",
        title: "Madagascar Blue",
        url: "madagascar-blue",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/a2Apu6g.png",
        title: "Himalayan Blue",
        url: "himalayan-blue",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/wfci4oQ.png",
        title: "Rosa Beta",
        url: "rosa-beta",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/QOnLIN5.png",
        title: "Perla Beige",
        url: "perla-beige",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/eXbWqCh.png",
        title: "Imperial Gold",
        url: "imperial-gold",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/XD2yX6g.png",
        title: "Tan Brown",
        url: "tan-brown",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/kockprM.png",
        title: "Juparana Colombo",
        url: "juparana-colombo",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/tobQof8.png",
        title: "Castor Blue",
        url: "castor-blue",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/RewLMMF.png",
        title: "Paradiso Bash",
        url: "paradiso-bash",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/jxHg5Nr.png",
        title: "Emerald Pearl",
        url: "emerald-pearl",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/8CYG1x3.png",
        title: "Red Dragon",
        url: "red-dragon",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/pOoVUaT.png",
        title: "Giallo San Francisco",
        url: "giallo-san-francisco",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/7lVsCHs.png",
        title: "Oro Brazil",
        url: "oro-brazil",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/CIJIxoT.png",
        title: "Rosa Porrino",
        url: "rosa-porrino",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/mmjyiMM.png",
        title: "Sivec",
        url: "sivec",
        type: "marble",
    },
    {
        img: "https://i.imgur.com/R26L4aN.png",
        title: "Black Forest",
        url: "black-forest",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/s5P5g1S.png",
        title: "Namibian Gold",
        url: "namibian-gold",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/Sq7gjpC.png",
        title: "Green Madagascar",
        url: "green-madagascar",
        type: "granite",
    },
    {
        img: "https://i.imgur.com/v0llUrj.png",
        title: "Skrapar",
        url: "skrapar",
        type: "marble",
    },
];

function Products() {
    return (
        <div className="all">
            <input
                className="input"
                type="radio"
                name="Photos"
                id="check1"
                value="All"
                checked
            />
            <input
                className="input"
                type="radio"
                name="Photos"
                id="check2"
                value="Granite"
            />
            <input
                className="input"
                type="radio"
                name="Photos"
                id="check3"
                value="Marble"
            />
            <div className="container">
                <h1 className="heading-1">Our Granit and Marble Selection</h1>
                <div className="top-content">
                    <h3 className="heading-3">Products</h3>
                    <label for="check1"> All </label>
                    <label for="check2"> Granite </label>
                    <label for="check3"> Marble </label>
                </div>
                <div className="photo-gallery">
                    {itemData.map((item, title) => {
                        return (
                            <div className={`pic ${item.type}`} key={title}>
                                <Link to={`/products/${item.url}`}>
                                    <img
                                        className="picture"
                                        src={item.img}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </Link>
                                <div className="pic-description">
                                    <h4 className="pic-description-h">
                                        {" "}
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    );
}

export default Products;
