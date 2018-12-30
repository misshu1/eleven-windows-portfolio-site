import React, { Component } from "react";
import { Route } from "react-router-dom";
import history from "./history";
import { ThemeProvider } from "styled-components";
import FolderApp from "./components/folders/FolderApp";
import TaskbarApp from "./components/taskbar/TaskbarApp";

import Desktop from "./components/desktop/Desktop";
import Icon from "./components/desktop/Icon";
import LargeWidgetsContainer from "./components/startMenu/LargeWidgetsContainer";
import SmallWidgetsContainer from "./components/startMenu/SmallWidgetsContainer";
import StartMenu from "./components/startMenu/StartMenu";
import Widget from "./components/startMenu/Widget";
import LightTheme from "./components/theme/Light";
import DarkTheme from "./components/theme/Dark";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
library.add(faLongArrowAltLeft, faWindowMinimize, faTimes);

class App extends Component {
    state = {
        startMenuOpen: false,
        windowIndex: {
            1: 100,
            2: 104
        }
    };

    startMenuClickHandler = () => {
        this.setState(prevState => {
            return { startMenuOpen: !prevState.startMenuOpen };
        });
    };

    closeStartMenu = () => {
        if (this.state.startMenuOpen === true) {
            return this.setState({ startMenuOpen: false });
        }
    };

    resizeIcons = (num, imgWidth, imgHeigth) => {
        const iconContainer = document.querySelectorAll(".icon-container");
        const iconImg = document.querySelectorAll(".icon-img");
        const imgSize = iconImg.forEach(
            item =>
                (item.style.width = imgWidth + "rem") &&
                (item.style.height = imgHeigth + "rem")
        );
        const containerSize = iconContainer.forEach(
            item =>
                (item.style.width = num + "rem") &&
                (item.style.height = num + "rem")
        );

        return containerSize && imgSize;
    };

    activeWindow(newActive) {
        const newObj = {};
        Object.keys(this.state.windowIndex).forEach(() => {
            newObj.key = 100;
        });
        const activeWindow = Object.assign({}, newObj, { [newActive]: 104 });
        this.setState({ windowIndex: activeWindow });
    }
    openUrlMobile = url => {
        // Opens on mobile with onClick
        if (window.matchMedia("(max-width: 900px)").matches) {
            history.push(url);
        }
    };

    openUrlDesktop = url => {
        //  Opens on desktop with doubleClick
        if (window.matchMedia("(min-width: 901px)").matches) {
            history.push(url);
        }
    };

    handleKeyPress = (e, url) => {
        if (e.key === "Enter") {
            history.push(url);
        }
    };

    render() {
        const { startMenuOpen } = this.state;
        return (
            <ThemeProvider theme={DarkTheme}>
                <Route
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <Desktop onClick={this.closeStartMenu}>
                                <Route
                                    path="/mystuff"
                                    render={() => <FolderApp />}
                                />
                                <Icon
                                    tabIndex="1"
                                    onClick={() =>
                                        this.openUrlMobile("/mystuff")
                                    }
                                    onDoubleClick={() =>
                                        this.openUrlDesktop("/mystuff")
                                    }
                                    onKeyPress={(e, url) =>
                                        this.handleKeyPress(e, "/mystuff")
                                    }
                                    className="icon-container"
                                >
                                    <img
                                        className="icon-img"
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                        width="80px"
                                        height="60px"
                                    />
                                    <div>My Stuff</div>
                                </Icon>
                                <Icon
                                    tabIndex="2"
                                    className="icon-container"
                                    onClick={() =>
                                        this.openUrlMobile("/mystuff/projects")
                                    }
                                    onDoubleClick={() =>
                                        this.openUrlDesktop("/mystuff/projects")
                                    }
                                    onKeyPress={(e, url) =>
                                        this.handleKeyPress(
                                            e,
                                            "/mystuff/projects"
                                        )
                                    }
                                >
                                    <img
                                        className="icon-img"
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                        width="80px"
                                        height="60px"
                                    />
                                    <div>Projects</div>
                                </Icon>
                                <Icon
                                    tabIndex="3"
                                    className="icon-container"
                                    onClick={() => this.openUrlMobile("/about")}
                                    onDoubleClick={() =>
                                        this.openUrlDesktop("/about")
                                    }
                                >
                                    <img
                                        className="icon-img"
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                        width="80px"
                                        height="60px"
                                    />
                                    <div>About</div>
                                </Icon>
                                {/* <button
                                    onClick={() =>
                                        this.resizeIcons(4, 3.43, 2.56)
                                    }
                                >
                                    size 4
                                </button>
                                <button
                                    onClick={() =>
                                        this.resizeIcons(5.5, 5, 3.75)
                                    }
                                >
                                    default
                                </button>
                                <button
                                    onClick={() =>
                                        this.resizeIcons(8, 7.5, 5.62)
                                    }
                                >
                                    size 8
                                </button> */}
                                {/* <div
                            style={{
                                position: "absolute",
                                width: "500px",
                                height: "500px",
                                top: "300px",
                                left: "500px",
                                background: "black",
                                zIndex: this.state.windowIndex[1]
                            }}
                            onClick={() => this.activeWindow(1)}
                        />
                        <div
                            style={{
                                position: "absolute",
                                width: "500px",
                                height: "500px",
                                top: "200px",
                                left: "550px",
                                background: "green",
                                zIndex: this.state.windowIndex[2]
                            }}
                            onClick={() => this.activeWindow(2)}
                        /> */}
                            </Desktop>
                            <StartMenu display={startMenuOpen}>
                                <SmallWidgetsContainer />
                                <LargeWidgetsContainer>
                                    <Widget style={{ gridArea: "widget-j" }}>
                                        widget J
                                    </Widget>
                                    <Widget style={{ gridArea: "widget-M" }} />
                                    <Widget style={{ gridArea: "widget-z" }} />
                                    <Widget style={{ gridArea: "widget-x" }} />
                                    <Widget style={{ gridArea: "widget-c" }} />
                                    <Widget style={{ gridArea: "widget-v" }} />
                                    <Widget style={{ gridArea: "widget-L" }}>
                                        Contact
                                    </Widget>
                                    <Widget style={{ gridArea: "widget-e" }}>
                                        widget e
                                    </Widget>
                                    <Widget style={{ gridArea: "widget-r" }}>
                                        widget r
                                    </Widget>
                                    <Widget style={{ gridArea: "widget-q" }}>
                                        widget e
                                    </Widget>
                                    <Widget style={{ gridArea: "widget-w" }}>
                                        widget r
                                    </Widget>
                                </LargeWidgetsContainer>
                            </StartMenu>
                            <TaskbarApp
                                startMenuClickHandler={
                                    this.startMenuClickHandler
                                }
                            />
                        </React.Fragment>
                    )}
                />
            </ThemeProvider>
        );
    }
}

export default App;
