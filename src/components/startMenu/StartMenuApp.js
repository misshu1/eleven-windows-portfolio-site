import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LargeWidgetsContainer from "./startMenuStructure/LargeWidgetsContainer";
import SmallWidgetsContainer from "./startMenuStructure/SmallWidgetsContainer";
import StartMenu from "./startMenuStructure/StartMenu";
import Widget from "./startMenuStructure/Widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenuApp = props => {
    return (
        <StartMenu
            display={props.startMenuOpen}
            onClick={() => props.closeApp("startMenuOpen")}
        >
            <SmallWidgetsContainer />
            <LargeWidgetsContainer>
                <Widget style={{ gridArea: "widget-1" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/memorygame"
                                : "/apps"
                        }
                        onClick={() => props.startApp("memoryGameOpen")}
                    >
                        <span>Memory Game</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-2" }}>
                    widget 2 calendar
                </Widget>
                <Widget style={{ gridArea: "widget-3" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/calculator"
                                : "/apps"
                        }
                        onClick={() => props.startApp("calculatorOpen")}
                    >
                        <span>Calculator</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-4" }}>
                    widget 4 resume
                </Widget>
                <Widget style={{ gridArea: "widget-5" }} title="github">
                    <a
                        href="https://github.com/misshu1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "github-square"]}
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
                                icon={["fab", "linkedin"]}
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
                    widget 9 neighborhood map
                </Widget>
                <Widget style={{ gridArea: "widget-10" }}>
                    widget 10 notepad
                </Widget>
                <Widget style={{ gridArea: "widget-11" }}>
                    widget 11 weather app
                </Widget>
            </LargeWidgetsContainer>
        </StartMenu>
    );
};

export default StartMenuApp;

StartMenuApp.propTypes = {
    startMenuOpen: PropTypes.string.isRequired,
    closeApp: PropTypes.func.isRequired,
    startApp: PropTypes.func.isRequired
};
