import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    Taskbar,
    SettingsContainer,
    BorderLogo,
    ClockContainer,
    ContactContainer,
    Logo,
    LogoContainer,
    OpenAppsContainer
} from "./style";
import logoBlue from "./img/logo-blue.svg";
import logoRed from "./img/logo-red.svg";
import settingsIcon from "./img/settings-icon-taskbar.png";
import ClockApp from "./ClockApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TaskbarApp extends Component {
    render() {
        const { closeApp, toggleAppVisibility, openApps, logo } = this.props;
        return (
            <Taskbar
                onClick={() => {
                    closeApp("startMenuOpen");
                    closeApp("calendarOpen");
                }}
            >
                <ContactContainer>
                    <Link to="#">
                        <FontAwesomeIcon icon={["fa", "address-card"]} />
                    </Link>
                </ContactContainer>

                <LogoContainer
                    onClick={() => toggleAppVisibility("startMenuOpen")}
                >
                    <BorderLogo>
                        {/* This 4 spans are used for border animation inside BorderLogo component */}
                        <span />
                        <span />
                        <span />
                        <span />
                        <Logo
                            src={logo === "red" ? logoRed : logoBlue}
                            alt="logo"
                        />
                    </BorderLogo>
                </LogoContainer>
                <OpenAppsContainer>{openApps}</OpenAppsContainer>
                <ClockContainer
                    onClick={() => toggleAppVisibility("calendarOpen")}
                >
                    <ClockApp />
                </ClockContainer>
                <SettingsContainer>
                    <Link
                        to={"/apps/settings"}
                        onClick={() =>
                            this.props.startApp(
                                "settingsOpen",
                                settingsIcon,
                                3,
                                "settingsMinimize"
                            )
                        }
                    >
                        <FontAwesomeIcon icon={["fa", "cog"]} />
                    </Link>
                </SettingsContainer>
            </Taskbar>
        );
    }
}

export default TaskbarApp;

TaskbarApp.propTypes = {
    toggleAppVisibility: PropTypes.func.isRequired
};
