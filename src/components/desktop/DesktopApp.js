import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import TaskbarApp from "../../components/taskbar/TaskbarApp";
import { Icon, DesktopContainer, AppIcon } from "./style";
import SpinnerApp from "../../components/animations/SpinnerApp";

const CalendarApp = lazy(() =>
    import("../../components/taskbar/calendar/CalendarApp")
);
const StartMenuApp = lazy(() =>
    import("../../components/startMenu/StartMenuApp")
);
const MemoryGameApp = lazy(() =>
    import("../../components/folders/memoryGame/MemoryGameApp")
);
const CalculatorApp = lazy(() =>
    import("../../components/folders/calculator/CalculatorApp")
);
const SettingsApp = lazy(() =>
    import("../../components/folders/settings/SettingsApp")
);

class App extends Component {
    state = {
        startMenuOpen: "close",
        memoryGameOpen: "close",
        calendarOpen: "close",
        calculatorOpen: "close",
        settingsOpen: "close",
        memoryGameMinimize: null,
        calculatorMinimize: null,
        settingsMinimize: null,
        openApps: [],
        windowIndex: {
            1: 100,
            2: 100,
            3: 100
        }
    };

    minimizeApp = (app, boolean) => {
        this.setState({ [app]: boolean });
    };

    toggleAppVisibility = app => {
        this.state[app] === "close"
            ? this.setState({ [app]: "open" })
            : this.setState({ [app]: "close" });
    };

    startApp = async (openApp, icon, zIndex, minimize) => {
        if (this.state[openApp] === "close") {
            await this.activeWindow(zIndex);
            await this.setState(prevState => ({
                [openApp]: "open",
                openApps: [
                    ...prevState.openApps,
                    <AppIcon
                        key={openApp}
                        onClick={() => {
                            this.minimizeApp([minimize], false);
                            this.activeWindow(zIndex);
                        }}
                        appIndex={this.state.windowIndex[zIndex]}
                    >
                        <img src={icon} alt={openApp} />
                    </AppIcon>
                ]
            }));
        }
    };

    closeApp = async (app, minimize) => {
        if (this.state[app] === "open") {
            await this.setState({ [minimize]: null });
            await this.setState(prevState => ({
                [app]: "close",
                openApps: [
                    ...prevState.openApps.filter(item => item.key !== app)
                ]
            }));
        }
    };

    activeWindow = newActive => {
        const newObj = {};
        Object.keys(this.state.windowIndex).forEach((item, index) => {
            newObj[index + 1] = 100;
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
            calculatorOpen,
            settingsOpen,
            calculatorMinimize,
            settingsMinimize,
            memoryGameMinimize,
            openApps
        } = this.state;
        return (
            <Route
                path="/"
                render={() => (
                    <React.Fragment>
                        <DesktopContainer
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
                                            <Suspense fallback={<SpinnerApp />}>
                                                <MemoryGameApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    memoryGameOpen={
                                                        memoryGameOpen
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    memoryGameMinimize={
                                                        memoryGameMinimize
                                                    }
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {calculatorOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <CalculatorApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    calculatorOpen={
                                                        calculatorOpen
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    calculatorMinimize={
                                                        calculatorMinimize
                                                    }
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {settingsOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <SettingsApp
                                                    changeTheme={
                                                        this.props.changeTheme
                                                    }
                                                    changeAppSize={
                                                        this.props.changeAppSize
                                                    }
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    settingsOpen={settingsOpen}
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    settingsMinimize={
                                                        settingsMinimize
                                                    }
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
                            <Route
                                exact
                                path="/apps/settings"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <SettingsApp
                                            changeTheme={this.props.changeTheme}
                                            changeAppSize={
                                                this.props.changeAppSize
                                            }
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            settingsOpen={settingsOpen}
                                            closeApp={this.closeApp}
                                        />
                                    </Suspense>
                                )}
                            />
                            <Icon tabIndex="1">
                                <img
                                    src={require("../../components/desktop/img/folder-icon.png")}
                                    alt="my stuff"
                                />
                                <div>My Stuff</div>
                            </Icon>
                            <Icon tabIndex="2">
                                <img
                                    src={require("../../components/desktop/img/folder-icon.png")}
                                    alt="test"
                                />
                                <div>Documents</div>
                            </Icon>
                            <Icon tabIndex="3">
                                <img
                                    src={require("../../components/desktop/img/folder-icon.png")}
                                    alt="test"
                                />
                                <div>About</div>
                            </Icon>
                        </DesktopContainer>
                        <TaskbarApp
                            logo={this.props.logo}
                            memoryGameOpen={memoryGameOpen}
                            calculatorOpen={calculatorOpen}
                            settingsOpen={settingsOpen}
                            toggleAppVisibility={this.toggleAppVisibility}
                            closeApp={this.closeApp}
                            startApp={this.startApp}
                            openApps={openApps}
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
                                    removeIcon={this.removeIcon}
                                />
                            </Suspense>
                        ) : (
                            ""
                        )}
                    </React.Fragment>
                )}
            />
        );
    }
}

export default App;
