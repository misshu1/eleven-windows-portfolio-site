import React, { Component } from "react";
import { Route } from "react-router-dom";
import history from "./history";
import { ThemeProvider } from "styled-components";
import FolderApp from "./components/folders/FolderApp";
import TaskbarApp from "./components/taskbar/TaskbarApp";
import StartMenuApp from "./components/startMenu/StartMenuApp";
import Desktop from "./components/desktop/Desktop";
import Icon from "./components/desktop/Icon";
import LightTheme from "./components/theme/Light";
import DarkTheme from "./components/theme/Dark";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import MemoryGameApp from "./components/folders/memoryGame/MemoryGameApp";
library.add(
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar
);

class App extends Component {
    state = {
        startMenuOpen: false,
        memoryGameOpen: false,
        windowIndex: {
            1: 100,
            2: 104
        }
    };

    startMemoryGame = () => {
        this.setState({ memoryGameOpen: true });
    };

    closeMemoryGame = () => {
        this.setState({ memoryGameOpen: false });
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

    activeWindow(newActive) {
        const newObj = {};
        Object.keys(this.state.windowIndex).forEach(() => {
            newObj.key = 100;
        });
        const activedWindow = Object.assign({}, newObj, { [newActive]: 104 });
        this.setState({ windowIndex: activedWindow });
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
                                    render={() => (
                                        <FolderApp
                                            windowIndex={this.state.windowIndex}
                                            activeWindow={this.activeWindow.bind(
                                                this
                                            )}
                                        />
                                    )}
                                />

                                <MemoryGameApp
                                    windowIndex={this.state.windowIndex}
                                    activeWindow={this.activeWindow.bind(this)}
                                    memoryGameOpen={this.state.memoryGameOpen}
                                    closeMemoryGame={this.closeMemoryGame}
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
                                        this.openUrlMobile("/documents")
                                    }
                                    onDoubleClick={() =>
                                        this.openUrlDesktop("/documents")
                                    }
                                    onKeyPress={(e, url) =>
                                        this.handleKeyPress(e, "/documents")
                                    }
                                >
                                    <img
                                        className="icon-img"
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                        width="80px"
                                        height="60px"
                                    />
                                    <div>Documents</div>
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
                            <StartMenuApp
                                closeStartMenu={this.closeStartMenu}
                                startMenuOpen={startMenuOpen}
                                startMemoryGame={this.startMemoryGame}
                            />
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
