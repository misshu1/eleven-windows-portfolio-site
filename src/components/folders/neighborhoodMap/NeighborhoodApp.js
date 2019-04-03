import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";

import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class NeighborhoodApp extends Component {
    state = {
        close: "",
        disabled: true
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("neighborhoodOpen", "neighborhoodMinimize");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const {
            windowIndex,
            activeWindow,
            minimizeApp,
            neighborhoodOpen,
            neighborhoodMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={neighborhoodOpen}
                    minimize={neighborhoodMinimize}
                    close={close}
                    appIndex={windowIndex[5]}
                    onClick={() => activeWindow(5)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Neighborhood Map</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp(
                                            "neighborhoodMinimize",
                                            true
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia(
                                            "(max-width: 56.25rem)"
                                        ).matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        Under Construction Neighborhood map
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default NeighborhoodApp;
