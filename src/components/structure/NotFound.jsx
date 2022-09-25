import React from "react";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="error-container">
            <h1>ERROR 404: PAGE NOT FOUND</h1>
            <div className="embeded-error-container">
                <h4>Page not found. Possible causes:</h4>
                <ul>
                    <li>The given address contains a typographical mistake.</li>
                    <li>
                        The page might be renamed, or it might be accessible
                        under different address.
                    </li>
                    <li>Only God knows.</li>
                </ul>
            </div>
        </div>
    );
}

export default NotFound;
