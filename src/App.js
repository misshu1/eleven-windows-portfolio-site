import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import TaskbarApp from "./components/taskbar/TaskbarApp";
import Desktop from "./components/desktop/Desktop";
import Icon from "./components/desktop/Icon";
import DarkTheme from "./components/theme/Dark";
import SpinnerApp from "./components/animations/SpinnerApp";
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
    faStar,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedinIn,
    faGithub,
    faInstagram,
    faCodepen
} from "@fortawesome/free-brands-svg-icons";
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
    faStar,
    faLinkedinIn,
    faGithub,
    faCodepen,
    faInstagram,
    faSpinner
);
const CalendarApp = lazy(() =>
    import("./components/taskbar/calendar/CalendarApp")
);
const StartMenuApp = lazy(() => import("./components/startMenu/StartMenuApp"));
const MemoryGameApp = lazy(() =>
    import("./components/folders/memoryGame/MemoryGameApp")
);
const CalculatorApp = lazy(() =>
    import("./components/folders/calculator/CalculatorApp")
);
class App extends Component {
    state = {
        startMenuOpen: "close",
        memoryGameOpen: "close",
        calendarOpen: "close",
        calculatorOpen: "close",
        windowIndex: {
            1: 100,
            2: 100,
            3: 100
        }
    };

    toggleAppVisibility = key => {
        this.state[key] === "close"
            ? this.setState({ [key]: "open" })
            : this.setState({ [key]: "close" });
    };

    startApp = key => {
        this.setState({ [key]: "open" });
    };

    closeApp = key => {
        if (this.state[key] === "open") {
            this.setState({ [key]: "close" });
        }
    };

    activeWindow = newActive => {
        const newObj = {};
        Object.keys(this.state.windowIndex).forEach(() => {
            newObj.key = 100;
        });
        const activedWindow = Object.assign({}, newObj, { [newActive]: 104 });
        this.setState({ windowIndex: activedWindow });
    };

    render() {
        const {
            startMenuOpen,
            windowIndex,
            memoryGameOpen,
            calendarOpen,
            calculatorOpen
        } = this.state;
        return (
            <ThemeProvider theme={DarkTheme}>
                <Route
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <Desktop
                                onClick={() => {
                                    this.closeApp("startMenuOpen");
                                    this.closeApp("calendarOpen");
                                }}
                            >
                                {/* Desktop Routes */}
                                <Route
                                    exact
                                    path="/apps"
                                    render={() => (
                                        <React.Fragment>
                                            {memoryGameOpen === "open" ? (
                                                <Suspense
                                                    fallback={<SpinnerApp />}
                                                >
                                                    <MemoryGameApp
                                                        windowIndex={
                                                            windowIndex
                                                        }
                                                        activeWindow={
                                                            this.activeWindow
                                                        }
                                                        memoryGameOpen={
                                                            memoryGameOpen
                                                        }
                                                        closeApp={this.closeApp}
                                                    />
                                                </Suspense>
                                            ) : (
                                                ""
                                            )}
                                            {calculatorOpen === "open" ? (
                                                <Suspense
                                                    fallback={<SpinnerApp />}
                                                >
                                                    <CalculatorApp
                                                        windowIndex={
                                                            windowIndex
                                                        }
                                                        activeWindow={
                                                            this.activeWindow
                                                        }
                                                        calculatorOpen={
                                                            calculatorOpen
                                                        }
                                                        closeApp={this.closeApp}
                                                    />
                                                </Suspense>
                                            ) : (
                                                ""
                                            )}
                                        </React.Fragment>
                                    )}
                                />

                                {/* Mobile Routes */}
                                <Route
                                    exact
                                    path="/apps/memorygame"
                                    render={() => (
                                        <Suspense fallback={<SpinnerApp />}>
                                            <MemoryGameApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                memoryGameOpen={memoryGameOpen}
                                                closeApp={this.closeApp}
                                            />
                                        </Suspense>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/apps/calculator"
                                    render={() => (
                                        <Suspense fallback={<SpinnerApp />}>
                                            <CalculatorApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                calculatorOpen={calculatorOpen}
                                                closeApp={this.closeApp}
                                            />
                                        </Suspense>
                                    )}
                                />
                                <Icon tabIndex="1">
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="my stuff"
                                    />
                                    <div>My Stuff</div>
                                </Icon>
                                <Icon tabIndex="2">
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                    />
                                    <div>Documents</div>
                                </Icon>
                                <Icon tabIndex="3">
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                    />
                                    <div>About</div>
                                </Icon>
                            </Desktop>
                            <TaskbarApp
                                memoryGameOpen={memoryGameOpen}
                                calculatorOpen={calculatorOpen}
                                toggleAppVisibility={this.toggleAppVisibility}
                                closeApp={this.closeApp}
                            />
                            {calendarOpen === "open" ? (
                                <Suspense fallback={<SpinnerApp />}>
                                    <CalendarApp />
                                </Suspense>
                            ) : (
                                ""
                            )}
                            {startMenuOpen === "open" ? (
                                <Suspense fallback={<SpinnerApp />}>
                                    <StartMenuApp
                                        closeApp={this.closeApp}
                                        startApp={this.startApp}
                                    />
                                </Suspense>
                            ) : (
                                ""
                            )}
                        </React.Fragment>
                    )}
                />
            </ThemeProvider>
        );
    }
}

export default App;
