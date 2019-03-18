import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NameBar from "../style/nameBar/NameBar";
import Name from "../style/nameBar/Name";
import Buttons from "../style/nameBar/Buttons";
import AnimateFadeInOut from "../../animations/AnimateFadeInOut";
import AppContainer from "./style/AppContainer";
import Title from "./style/Title";
import ThemesImg from "./style/ThemesImg";
import Wrapper from "./style/Wrapper";
import BoxImg from "./style/BoxImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./style/Icon";
import BoxIcon from "./style/BoxIcon";
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
                        <Wrapper>
                            <Title>Themes</Title>
                            <BoxImg>
                                <ThemesImg />
                                <ThemesImg />
                            </BoxImg>
                            <Title>Resize App</Title>
                            <BoxIcon>
                                <Icon>
                                    <img
                                        src={require("../../../components/desktop/img/folder-icon.png")}
                                        alt="100%"
                                        style={{
                                            width: "80px",
                                            height: "60px"
                                        }}
                                    />
                                    <span>100%</span>
                                </Icon>
                                <Icon>
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
                                <Icon>
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
