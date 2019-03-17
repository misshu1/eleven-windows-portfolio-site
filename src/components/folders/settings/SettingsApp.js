import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NameBar from "../style/nameBar/NameBar";
import Name from "../style/nameBar/Name";
import Buttons from "../style/nameBar/Buttons";
import AnimateFadeInOut from "../../animations/AnimateFadeInOut";
import AppContainer from "./style/AppContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class SettingsApp extends Component {
    state = {
        close: "",
        disabled: true
    };

    componentDidMount() {
        this.props.activeWindow(3);
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("settingsOpen");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const { windowIndex, activeWindow, settingsOpen } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={settingsOpen}
                    close={close}
                    appIndex={windowIndex[3]}
                    onClick={() => activeWindow(3)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Settings</Name>
                            <Buttons>
                                <div>
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
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default SettingsApp;

SettingsApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    settingsOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
