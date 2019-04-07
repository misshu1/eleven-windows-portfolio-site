import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";
import TheBusinessCompanyCore from "./TheBusinessCompanyCore";

class TheBusinessCompanyApp extends Component {
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
            this.props.closeApp(
                "businessCompanyOpen",
                "businessCompanyMinimize"
            );
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
            businessCompanyOpen,
            businessCompanyMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={businessCompanyOpen}
                    minimize={businessCompanyMinimize}
                    close={close}
                    appIndex={windowIndex[10]}
                    onClick={() => activeWindow(10)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">The Business Company</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp(
                                            "businessCompanyMinimize",
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
                        <TheBusinessCompanyCore />
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default TheBusinessCompanyApp;

TheBusinessCompanyApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    businessCompanyOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
