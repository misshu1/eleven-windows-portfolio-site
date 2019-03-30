import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Taskbar,
    BackButtonContainer,
    BorderLogo,
    ClockContainer,
    HomeButtonContainer,
    Logo,
    LogoContainer,
    OpenAppsContainer
} from "./style";
import ClockApp from "./ClockApp";

class TaskbarApp extends Component {
    render() {
        const { closeApp, toggleAppVisibility, openApps } = this.props;
        return (
            <Taskbar
                onClick={() => {
                    closeApp("startMenuOpen");
                    closeApp("calendarOpen");
                }}
            >
                <HomeButtonContainer>home</HomeButtonContainer>

                <LogoContainer
                    onClick={() => toggleAppVisibility("startMenuOpen")}
                >
                    <BorderLogo>
                        {/* This 4 spans are used for border animation inside BorderLogo component */}
                        <span />
                        <span />
                        <span />
                        <span />
                        <Logo src={require("./img/logo.svg")} alt="logo" />
                    </BorderLogo>
                </LogoContainer>
                <OpenAppsContainer>{openApps}</OpenAppsContainer>
                <ClockContainer
                    onClick={() => toggleAppVisibility("calendarOpen")}
                >
                    <ClockApp />
                </ClockContainer>
                <BackButtonContainer>back</BackButtonContainer>
            </Taskbar>
        );
    }
}

export default TaskbarApp;

TaskbarApp.propTypes = {
    toggleAppVisibility: PropTypes.func.isRequired
};
