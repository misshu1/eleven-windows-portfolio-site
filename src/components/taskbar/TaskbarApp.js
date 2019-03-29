import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Taskbar,
    AppIcon,
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
    showIcon = () => {
        const { calculatorOpen, memoryGameOpen, settingsOpen } = this.props;
        let openApps = [];
        const apps = [
            {
                name: "mem",
                open: memoryGameOpen,
                onChange: updateApp
            },
            {
                name: "calc",
                open: calculatorOpen,
                onChange: updateApp
            },
            {
                name: "sett",
                open: settingsOpen,
                onChange: updateApp
            }
        ];
        function updateApp(name) {
            openApps = [...openApps, <AppIcon key={name}>{name}</AppIcon>];
        }
        apps.filter(item => item.open === "open").map(item =>
            item.onChange(item.name)
        );
        return openApps;
    };

    render() {
        const { closeApp, toggleAppVisibility } = this.props;
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
                <OpenAppsContainer>{this.showIcon()}</OpenAppsContainer>
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
