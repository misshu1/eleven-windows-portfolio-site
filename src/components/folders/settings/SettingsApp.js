import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    AppContainer,
    BoxIcon,
    BoxImg,
    Icon,
    ThemesImg,
    Title,
    Wrapper
} from "./style";
import darkImg from "./img/dark-preview.jpg";
import lightImg from "./img/light-preview.jpg";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class SettingsApp extends Component {
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
            this.props.closeApp("settingsOpen", "settingsMinimize");
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
            settingsOpen,
            minimizeApp,
            settingsMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={settingsOpen}
                    minimize={settingsMinimize}
                    close={close}
                    appIndex={windowIndex[3]}
                    onClick={() => activeWindow(3)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Settings</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("settingsMinimize", true)
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
                        <Wrapper>
                            <Title>Themes</Title>
                            <BoxImg>
                                <ThemesImg
                                    src={darkImg}
                                    onClick={() =>
                                        this.props.changeTheme("dark")
                                    }
                                    alt="dark theme"
                                />
                                <ThemesImg
                                    src={lightImg}
                                    onClick={() =>
                                        this.props.changeTheme("light")
                                    }
                                    alt="light theme"
                                />
                            </BoxImg>
                            <Title>Resize App</Title>
                            <BoxIcon>
                                <Icon
                                    onClick={() => this.props.changeAppSize(16)}
                                >
                                    <img
                                        src={require("../../../components/desktop/img/folder-icon.png")}
                                        alt="100%"
                                        style={{
                                            width: "80px",
                                            height: "60px"
                                        }}
                                    />
                                    <span style={{ fontSize: "16px" }}>
                                        100%
                                    </span>
                                </Icon>
                                <Icon
                                    onClick={() => this.props.changeAppSize(12)}
                                >
                                    <img
                                        src={require("../../../components/desktop/img/folder-icon.png")}
                                        alt="100%"
                                        style={{
                                            width: "60px",
                                            height: "45px"
                                        }}
                                    />
                                    <span style={{ fontSize: "12px" }}>
                                        75%
                                    </span>
                                </Icon>
                                <Icon
                                    onClick={() => this.props.changeAppSize(8)}
                                >
                                    <img
                                        src={require("../../../components/desktop/img/folder-icon.png")}
                                        alt="100%"
                                        style={{
                                            width: "40px",
                                            height: "30px"
                                        }}
                                    />
                                    <span style={{ fontSize: "8px" }}>50%</span>
                                </Icon>
                            </BoxIcon>
                        </Wrapper>
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
