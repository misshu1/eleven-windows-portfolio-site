import React from "react";
import PropTypes from "prop-types";
import Taskbar from "./taskbarStructure/Taskbar";
import OpenAppsContainer from "./taskbarStructure/OpenAppsContainer";
import LogoContainer from "./taskbarStructure/LogoContainer";
import Logo from "./taskbarStructure/Logo";
import BorderLogo from "./taskbarStructure/BorderLogo";
import HomeButtonContainer from "./taskbarStructure/HomeButtonContainer";
import ClockContainer from "./taskbarStructure/ClockContainer";
import BackButtonContainer from "./taskbarStructure/BackButtonContainer";
import Clock from "./Clock";

const TaskbarApp = props => {
    return (
        <Taskbar>
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
                    <Logo
                        src={require("./taskbarStructure/img/small-logo.svg")}
                        alt="logo"
                    />
                </BorderLogo>{" "}
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
