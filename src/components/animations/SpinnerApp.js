import React from "react";
import { SpinnerContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Spinner() {
    return (
        <SpinnerContainer>
            <FontAwesomeIcon icon="spinner" size="2x" pulse />
        </SpinnerContainer>
    );
}

export default Spinner;
