import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";

import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class AboutApp extends Component {
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
            this.props.closeApp("aboutOpen", "aboutMinimize");
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
            aboutOpen,
            aboutMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={aboutOpen}
                    minimize={aboutMinimize}
                    close={close}
                    appIndex={windowIndex[7]}
                    onClick={() => activeWindow(7)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">About me</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("aboutMinimize", true)
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
                        Under Construction About me
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default AboutApp;
