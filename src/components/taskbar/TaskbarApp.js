import React from "react";
import PropTypes from "prop-types";
import Taskbar from "./style/Taskbar";
import OpenAppsContainer from "./style/OpenAppsContainer";
import LogoContainer from "./style/LogoContainer";
import Logo from "./style/Logo";
import BorderLogo from "./style/BorderLogo";
import HomeButtonContainer from "./style/HomeButtonContainer";
import ClockContainer from "./style/ClockContainer";
import BackButtonContainer from "./style/BackButtonContainer";
import Clock from "./Clock";

const TaskbarApp = props => {
    return (
        <Taskbar
            onClick={() => {
                props.closeApp("startMenuOpen");
                props.closeApp("calendarOpen");
            }}
        >
            <HomeButtonContainer>home</HomeButtonContainer>

            <LogoContainer
                onClick={() => props.toggleAppVisibility("startMenuOpen")}
                title="Start"
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
            <OpenAppsContainer> </OpenAppsContainer>
            <ClockContainer
                onClick={() => props.toggleAppVisibility("calendarOpen")}
            >
                <Clock />
            </ClockContainer>
            <BackButtonContainer>back</BackButtonContainer>
        </Taskbar>
    );
};

export default TaskbarApp;

TaskbarApp.propTypes = {
    toggleAppVisibility: PropTypes.func.isRequired
};
