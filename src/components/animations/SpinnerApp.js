import React from "react";
import SpinnerAnimation from "./SpinnerAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Spinner() {
    return (
        <SpinnerAnimation>
            <FontAwesomeIcon icon="spinner" size="2x" pulse />
        </SpinnerAnimation>
    );
}

export default Spinner;
