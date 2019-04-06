import React, { Component } from "react";
import MemoryGameCore from "./MemoryGameCore";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class MemoryGameApp extends Component {
    state = {
        close: "",
        disabled: true
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    handleDrag() {
        this.setState({
            disabled: false
        });
    }

    quitApp() {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("memoryGameOpen", "memoryGameMinimize");
        }, 200);
    }

    render() {
        const {
            memoryGameOpen,
            windowIndex,
            activeWindow,
            memoryGameMinimize,
            minimizeApp
        } = this.props;
        const { close, disabled } = this.state;

        return (
            <Draggable
                axis="both"
                handle=".handle"
                position={null}
                disabled={disabled}
            >
                <AnimateFadeInOut
                    open={memoryGameOpen}
                    minimize={memoryGameMinimize}
                    close={close}
                    appIndex={windowIndex[1]}
                    onClick={() => activeWindow(1)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Memory Game</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("memoryGameMinimize", true)
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
                        <MemoryGameCore />
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default MemoryGameApp;

MemoryGameApp.propTypes = {
    memoryGameOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    windowIndex: PropTypes.object.isRequired,
    closeApp: PropTypes.func.isRequired
};
