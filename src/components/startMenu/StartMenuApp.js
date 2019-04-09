import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    LargeWidgetsContainer,
    SmallWidgetBox,
    SmallWidgetsContainer,
    StartMenu,
    Widget
} from "./style";
import mempryGameIcon from "../taskbar/img/memory-game-icon-taskbar.jpg";
import calculatorIcon from "../taskbar/img/calculator-icon-taskbar.jpg";
import settingsIcon from "../taskbar/img/settings-icon-taskbar.png";
import neighborhoodIcon from "../taskbar/img/neighborhood-map-icon-taskbar.jpg";
import weatherIcon from "../taskbar/img/weather-icon-taskbar.jpg";
import resumeIcon from "../taskbar/img/resume-icon-taskbar.jpg";
import aboutIcon from "../taskbar/img/about-icon-taskbar.jpg";
import contactIcon from "../taskbar/img/contact-icon-taskbar.jpg";
import businessIcon from "../taskbar/img/the-business-company-icon-taskbar.jpg";
import myReadsIcon from "../taskbar/img/my-reads-icon-taskbar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenuApp = props => {
    return (
        <StartMenu onClick={() => props.closeApp("startMenuOpen")}>
            <SmallWidgetsContainer>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/about"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "aboutOpen",
                                aboutIcon,
                                7,
                                "aboutMinimize"
                            )
                        }
                    >
                        <FontAwesomeIcon icon={["fa", "file"]} />
                    </Link>
                </SmallWidgetBox>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/contact"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "contactOpen",
                                contactIcon,
                                8,
                                "contactMinimize"
                            )
                        }
                    >
                        <FontAwesomeIcon icon={["fa", "address-card"]} />
                    </Link>
                </SmallWidgetBox>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/settings"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "settingsOpen",
                                settingsIcon,
                                3,
                                "settingsMinimize"
                            )
                        }
                    >
                        <FontAwesomeIcon icon={["fa", "cog"]} />
                    </Link>
                </SmallWidgetBox>
            </SmallWidgetsContainer>
            <LargeWidgetsContainer>
                <Widget style={{ gridArea: "widget-1" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/neighborhood-map"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "neighborhoodOpen",
                                neighborhoodIcon,
                                5,
                                "neighborhoodMinimize"
                            )
                        }
                    >
                        <span className="name">Neighborhood Map</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-2" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/myreads"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "myReadsOpen",
                                myReadsIcon,
                                11,
                                "myReadsMinimize"
                            )
                        }
                    >
                        <span className="name">My Reads</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-3" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/calculator"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "calculatorOpen",
                                calculatorIcon,
                                2,
                                "calculatorMinimize"
                            )
                        }
                    >
                        <span className="name">Calculator</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-4" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/resume"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "resumeOpen",
                                resumeIcon,
                                6,
                                "resumeMinimize"
                            )
                        }
                    >
                        <span className="name">Resume</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-5" }} title="github">
                    <a
                        href="https://github.com/misshu1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "github"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-6" }} title="codesandbox">
                    <a
                        href="https://codesandbox.io/u/misshu1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "codepen"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-7" }} title="linkedin">
                    <a
                        href="https://www.linkedin.com/in/andreinedelus/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "linkedin-in"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-8" }} title="instagram">
                    <a
                        href="https://www.instagram.com/andreinedelus.ro/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-9" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/thebusinesscompany"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "businessCompanyOpen",
                                businessIcon,
                                10,
                                "businessCompanyMinimize"
                            )
                        }
                    >
                        <span className="name">The Business Company</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-10" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/memorygame"
                                : "/apps"
                        }
                        onClick={() => {
                            props.startApp(
                                "memoryGameOpen",
                                mempryGameIcon,
                                1,
                                "memoryGameMinimize"
                            );
                        }}
                    >
                        <span className="name">Memory Game</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-11" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 28rem)").matches
                                ? "/apps/weather"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "weatherOpen",
                                weatherIcon,
                                4,
                                "weatherMinimize"
                            )
                        }
                    >
                        <span className="name">Weather</span>
                    </Link>
                </Widget>
            </LargeWidgetsContainer>
        </StartMenu>
    );
};

export default StartMenuApp;

StartMenuApp.propTypes = {
    closeApp: PropTypes.func.isRequired,
    startApp: PropTypes.func.isRequired
};
