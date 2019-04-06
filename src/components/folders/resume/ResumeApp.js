import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class ResumeApp extends Component {
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
            this.props.closeApp("resumeOpen", "resumeMinimize");
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
            resumeOpen,
            resumeMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={resumeOpen}
                    minimize={resumeMinimize}
                    close={close}
                    appIndex={windowIndex[6]}
                    onClick={() => activeWindow(6)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Resume</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("resumeMinimize", true)
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        <iframe
                            src="/data/cv.pdf"
                            allow="encrypted-media, autoplay"
                            title="Resume"
                            frameBorder="0"
                        />
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default ResumeApp;

ResumeApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    resumeOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
