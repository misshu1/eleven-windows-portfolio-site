import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import TaskbarApp from "../../components/taskbar/TaskbarApp";
import { Icon, DesktopContainer } from "./style";
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
const WeatherApp = lazy(() =>
    import("../../components/folders/weather/WeatherApp")
);
const NeighborhoodApp = lazy(() =>
    import("../../components/folders/neighborhoodMap/NeighborhoodApp")
);
const ResumeApp = lazy(() =>
    import("../../components/folders/resume/ResumeApp")
);
const AboutApp = lazy(() => import("../../components/folders/about/AboutApp"));
const ContactApp = lazy(() =>
    import("../../components/folders/contact/ContactApp")
);
class App extends Component {
    state = {
        startMenuOpen: "close",
        memoryGameOpen: "close",
        calendarOpen: "close",
        calculatorOpen: "close",
        settingsOpen: "close",
        weatherOpen: "close",
        neighborhoodOpen: "close",
        resumeOpen: "close",
        aboutOpen: "close",
        contactOpen: "close",
        memoryGameMinimize: null,
        calculatorMinimize: null,
        settingsMinimize: null,
        weatherMinimize: null,
        neighborhoodMinimize: null,
        resumeMinimize: null,
        aboutMinimize: null,
        contactMinimize: null,
        openApps: [],
        windowIndex: {
            1: 100,
            2: 100,
            3: 100,
            5: 100,
            6: 100,
            7: 100,
            8: 100
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

    startApp = async (app, icon, zIndex, minimize) => {
        if (this.state[app] === "close") {
            await this.activeWindow(zIndex);
            await this.setState(prevState => ({
                [app]: "open",
                openApps: [...prevState.openApps, [app, icon, zIndex, minimize]]
            }));
        }
    };

    closeApp = async (app, minimize) => {
        if (this.state[app] === "open") {
            await this.setState({ [minimize]: null });
            await this.setState(prevState => ({
                [app]: "close",
                openApps: [
                    ...prevState.openApps.filter(item => item[0] !== app)
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
            calendarOpen,
            calculatorOpen,
            memoryGameOpen,
            memoryGameMinimize,
            calculatorMinimize,
            settingsOpen,
            settingsMinimize,
            weatherOpen,
            weatherMinimize,
            neighborhoodOpen,
            neighborhoodMinimize,
            resumeOpen,
            resumeMinimize,
            aboutOpen,
            aboutMinimize,
            contactOpen,
            contactMinimize
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
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    settingsOpen={settingsOpen}
                                                    settingsMinimize={
                                                        settingsMinimize
                                                    }
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {weatherOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <WeatherApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    weatherOpen={weatherOpen}
                                                    weatherMinimize={
                                                        weatherMinimize
                                                    }
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {neighborhoodOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <NeighborhoodApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    neighborhoodMinimize={
                                                        neighborhoodMinimize
                                                    }
                                                    neighborhoodOpen={
                                                        neighborhoodOpen
                                                    }
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {resumeOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <ResumeApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    resumeMinimize={
                                                        resumeMinimize
                                                    }
                                                    resumeOpen={resumeOpen}
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {aboutOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <AboutApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    aboutMinimize={
                                                        aboutMinimize
                                                    }
                                                    aboutOpen={aboutOpen}
                                                />
                                            </Suspense>
                                        ) : (
                                            ""
                                        )}
                                        {contactOpen === "open" ? (
                                            <Suspense fallback={<SpinnerApp />}>
                                                <ContactApp
                                                    windowIndex={windowIndex}
                                                    activeWindow={
                                                        this.activeWindow
                                                    }
                                                    closeApp={this.closeApp}
                                                    minimizeApp={
                                                        this.minimizeApp
                                                    }
                                                    contactMinimize={
                                                        contactMinimize
                                                    }
                                                    contactOpen={contactOpen}
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
                                            minimizeApp={this.minimizeApp}
                                            memoryGameMinimize={
                                                memoryGameMinimize
                                            }
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
                                            minimizeApp={this.minimizeApp}
                                            calculatorMinimize={
                                                calculatorMinimize
                                            }
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
                                            minimizeApp={this.minimizeApp}
                                            settingsMinimize={settingsMinimize}
                                        />
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path="/apps/weather"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <WeatherApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            closeApp={this.closeApp}
                                            minimizeApp={this.minimizeApp}
                                            weatherOpen={weatherOpen}
                                            weatherMinimize={weatherMinimize}
                                        />
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path="/apps/neighborhood-map"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <NeighborhoodApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            closeApp={this.closeApp}
                                            minimizeApp={this.minimizeApp}
                                            neighborhoodMinimize={
                                                neighborhoodMinimize
                                            }
                                            neighborhoodOpen={neighborhoodOpen}
                                        />
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path="/apps/resume"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <ResumeApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            closeApp={this.closeApp}
                                            minimizeApp={this.minimizeApp}
                                            resumeMinimize={resumeMinimize}
                                            resumeOpen={resumeOpen}
                                        />
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path="/apps/about"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <AboutApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            closeApp={this.closeApp}
                                            minimizeApp={this.minimizeApp}
                                            aboutMinimize={aboutMinimize}
                                            aboutOpen={aboutOpen}
                                        />
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path="/apps/contact"
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        <ContactApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow}
                                            closeApp={this.closeApp}
                                            minimizeApp={this.minimizeApp}
                                            contactMinimize={contactMinimize}
                                            contactOpen={contactOpen}
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
                            toggleAppVisibility={this.toggleAppVisibility}
                            closeApp={this.closeApp}
                            startApp={this.startApp}
                            minimizeApp={this.minimizeApp}
                            minimize={this.state.minimize}
                            activeWindow={this.activeWindow}
                            desktopState={this.state}
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
