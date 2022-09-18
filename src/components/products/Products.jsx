import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const itemData = [
    {
        img: "https://i.imgur.com/dW3AXyE.png",
        title: "Bianco Antico",
        url: "bianco-antico",
    },
    {
        img: "https://i.imgur.com/Nv8Ztsx.png",
        title: "Moon White",
        url: "moon-white",
    },
    {
        img: "https://i.imgur.com/1cnwOhr.png",
        title: "Juparana Sol",
        url: "juparana-sol",
    },
    {
        img: "https://i.imgur.com/X64OziV.png",
        title: "Titanium Black",
        url: "titanium-black",
    },
    {
        img: "https://i.imgur.com/2xMMU9S.png",
        title: "Imperial Red",
        url: "imperial-red",
    },
    {
        img: "https://i.imgur.com/RjABIlp.png",
        title: "Thasos White",
        url: "thasos-white",
    },
    {
        img: "https://i.imgur.com/VgwlHkh.png",
        title: "Multicolor Red",
        url: "multicolor-red",
    },
    {
        img: "https://i.imgur.com/wh6RHSy.png",
        title: "Kavala",
        url: "kavala",
    },
    {
        img: "https://i.imgur.com/McDJgx3.png",
        title: "Travertine",
        url: "travertine",
    },
    {
        img: "https://i.imgur.com/wIowmGf.png",
        title: "Verde Marina",
        url: "verde-marina",
    },
    {
        img: "https://i.imgur.com/qWFI7Or.png",
        title: "Colonial White",
        url: "colonial-white",
    },
    {
        img: "https://i.imgur.com/NNoWkW9.jpg",
        title: "Volakas",
        url: "volakas",
    },
    {
        img: "https://i.imgur.com/3f56NLj.png",
        title: "Madagaskar Blue",
        url: "madagaskar-blue",
    },
    {
        img: "https://i.imgur.com/a2Apu6g.png",
        title: "Himalayan Blue",
        url: "himalayan-blue",
    },
    {
        img: "https://i.imgur.com/wfci4oQ.png",
        title: "Rosa Beta",
        url: "rosa-beta",
    },
    {
        img: "https://i.imgur.com/QOnLIN5.png",
        title: "Perla Beige",
        url: "perla-beige",
    },
    {
        img: "https://i.imgur.com/eXbWqCh.png",
        title: "Imperial Gold",
        url: "imperial-gold",
    },
    {
        img: "https://i.imgur.com/XD2yX6g.png",
        title: "Tan Brown",
        url: "tan-brown",
    },
    {
        img: "https://i.imgur.com/kockprM.png",
        title: "Juparana Colombo",
        url: "juparana-colombo",
    },
    {
        img: "https://i.imgur.com/tobQof8.png",
        title: "Castor Blue",
        url: "castor-blue",
    },
    {
        img: "https://i.imgur.com/RewLMMF.png",
        title: "Paradiso Bash",
        url: "paradiso-bash",
    },
    {
        img: "https://i.imgur.com/cQsu3bi.png",
        title: "Emerald Pearl",
        url: "emerald-pearl",
    },
    {
        img: "https://i.imgur.com/8CYG1x3.png",
        title: "Red Dragon",
        url: "red-dragon",
    },
    {
        img: "https://i.imgur.com/pOoVUaT.png",
        title: "Giallo San Francisco",
        url: "giallo-san-francisco",
    },
    {
        img: "https://i.imgur.com/7lVsCHs.png",
        title: "Oro Brazil",
        url: "oro-brazil",
    },
    {
        img: "https://i.imgur.com/CIJIxoT.png",
        title: "Rosa Porrino",
        url: "rosa-porrino",
    },
    {
        img: "https://i.imgur.com/mmjyiMM.png",
        title: "Sivec",
        url: "sivec",
    },
    {
        img: "https://i.imgur.com/R26L4aN.png",
        title: "Black Forest",
        url: "black-forest",
    },
    {
        img: "https://i.imgur.com/s5P5g1S.png",
        title: "Namibian Gold",
        url: "namibian-gold",
    },
    {
        img: "https://i.imgur.com/Sq7gjpC.png",
        title: "Green Madagascar",
        url: "green-madagascar",
    },
    {
        img: "https://i.imgur.com/v0llUrj.png",
        title: "Skrapar",
        url: "skrapar",
    },
];

const data = {
    description: "Marble Collection",
};

function Products() {
    return (
        <>
            <div className="gallery">
                {itemData.map((item, title) => {
                    return (
                        <div className="pics" key={title}>
                            <Link to={`/products/${item.url}`}>
                                <div>
                                    <img
                                        className="picture"
                                        src={item.img}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </Link>
                            <div>
                                <h4> {item.title}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Products;
