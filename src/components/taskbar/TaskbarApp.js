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
    OpenAppsContainer,
    AppIcon
} from "./style";
import logoBlue from "./img/logo-blue.svg";
import logoRed from "./img/logo-red.svg";
import settingsIcon from "./img/settings-icon-taskbar.png";
import contactIcon from "./img/contact-icon-taskbar.jpg";
import ClockApp from "./ClockApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TaskbarApp extends Component {
    showIcons = () => {
        const { minimizeApp, activeWindow, desktopState } = this.props;
        const create = desktopState.openApps.map(item => {
            const app = item[0];
            const icon = item[1];
            const zIndex = item[2];
            const minimize = item[3];

            return (
                <AppIcon
                    key={app}
                    minimize={desktopState[minimize]}
                    onClick={() => {
                        if (desktopState[minimize] !== null) {
                            minimizeApp(minimize, false);
                        }
                        activeWindow(zIndex);
                    }}
                    appIndex={desktopState.windowIndex[zIndex]}
                >
                    <img src={icon} alt={app} />
                </AppIcon>
            );
        });
        return create;
    };

    render() {
        const { closeApp, toggleAppVisibility, logo } = this.props;
        return (
            <Taskbar
                onClick={() => {
                    closeApp("startMenuOpen");
                    closeApp("calendarOpen");
                }}
            >
                <ContactContainer>
                    <Link
                        to={"/apps/contact"}
                        onClick={() =>
                            this.props.startApp(
                                "contactOpen",
                                contactIcon,
                                3,
                                "contactMinimize"
                            )
                        }
                    >
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
                <OpenAppsContainer>{this.showIcons()}</OpenAppsContainer>
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
