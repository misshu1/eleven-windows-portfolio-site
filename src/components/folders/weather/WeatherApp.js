import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";

import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class WeatherApp extends Component {
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
            this.props.closeApp("weatherOpen", "weatherMinimize");
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
            weatherOpen,
            weatherMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={weatherOpen}
                    minimize={weatherMinimize}
                    close={close}
                    appIndex={windowIndex[4]}
                    onClick={() => activeWindow(4)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Weather</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("weatherMinimize", true)
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
                        Under Construction weather app
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default WeatherApp;
