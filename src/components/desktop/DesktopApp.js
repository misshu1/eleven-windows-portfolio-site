import React, { Component, lazy, Suspense } from "react";
import { Route, Link } from "react-router-dom";
import TaskbarApp from "../../components/taskbar/TaskbarApp";
import { Icon, DesktopContainer } from "./style";
import aboutIcon from "../../components/taskbar/img/about-icon-taskbar.jpg";
import myProjectsIcon from "../../components/taskbar/img/my-projects-icon-taskbar.jpg";
import contactIcon from "../../components/taskbar/img/contact-icon-taskbar.jpg";
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
const MyProjectsApp = lazy(() =>
    import("../../components/folders/myProjects/MyProjectsApp")
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
        myProjectsOpen: "close",
        memoryGameMinimize: null,
        calculatorMinimize: null,
        settingsMinimize: null,
        weatherMinimize: null,
        neighborhoodMinimize: null,
        resumeMinimize: null,
        aboutMinimize: null,
        contactMinimize: null,
        myProjectsMinimize: null,
        openApps: [],
        windowIndex: {
            1: 100,
            2: 100,
            3: 100,
            5: 100,
            6: 100,
            7: 100,
            8: 100,
            9: 100
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
            contactMinimize,
            myProjectsOpen,
            myProjectsMinimize
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
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/memorygame"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {memoryGameOpen === "open" ? (
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
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/calculator"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {calculatorOpen === "open" ? (
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
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/settings"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {settingsOpen === "open" ? (
                                            <SettingsApp
                                                changeTheme={
                                                    this.props.changeTheme
                                                }
                                                changeAppSize={
                                                    this.props.changeAppSize
                                                }
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                settingsOpen={settingsOpen}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                settingsMinimize={
                                                    settingsMinimize
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/weather"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {weatherOpen === "open" ? (
                                            <WeatherApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                weatherOpen={weatherOpen}
                                                weatherMinimize={
                                                    weatherMinimize
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/neighborhood-map"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {neighborhoodOpen === "open" ? (
                                            <NeighborhoodApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                neighborhoodMinimize={
                                                    neighborhoodMinimize
                                                }
                                                neighborhoodOpen={
                                                    neighborhoodOpen
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/resume"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {resumeOpen === "open" ? (
                                            <ResumeApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                resumeMinimize={resumeMinimize}
                                                resumeOpen={resumeOpen}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/about"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {aboutOpen === "open" ? (
                                            <AboutApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                aboutMinimize={aboutMinimize}
                                                aboutOpen={aboutOpen}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />

                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/contact"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {contactOpen === "open" ? (
                                            <ContactApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                contactMinimize={
                                                    contactMinimize
                                                }
                                                contactOpen={contactOpen}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />
                            <Route
                                exact
                                path={
                                    window.matchMedia("(max-width: 28rem)")
                                        .matches
                                        ? "/apps/myprojects"
                                        : "/apps"
                                }
                                render={() => (
                                    <Suspense fallback={<SpinnerApp />}>
                                        {myProjectsOpen === "open" ? (
                                            <MyProjectsApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow}
                                                myProjectsOpen={myProjectsOpen}
                                                closeApp={this.closeApp}
                                                minimizeApp={this.minimizeApp}
                                                myProjectsMinimize={
                                                    myProjectsMinimize
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Suspense>
                                )}
                            />

                            <Icon>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/apps/myprojects"
                                            : "/apps"
                                    }
                                    onTouchStart={() =>
                                        this.startApp(
                                            "myProjectsOpen",
                                            myProjectsIcon,
                                            9,
                                            "myProjectsMinimize"
                                        )
                                    }
                                    onDoubleClick={() =>
                                        this.startApp(
                                            "myProjectsOpen",
                                            myProjectsIcon,
                                            9,
                                            "myProjectsMinimize"
                                        )
                                    }
                                >
                                    <img
                                        src={require("../../components/desktop/img/folder-icon.png")}
                                        alt="Projects"
                                    />
                                    <div>My Projects</div>
                                </Link>
                            </Icon>
                            <Icon>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/apps/about"
                                            : "/apps"
                                    }
                                    onTouchStart={() =>
                                        this.startApp(
                                            "aboutOpen",
                                            aboutIcon,
                                            7,
                                            "aboutMinimize"
                                        )
                                    }
                                    onDoubleClick={() =>
                                        this.startApp(
                                            "aboutOpen",
                                            aboutIcon,
                                            7,
                                            "aboutMinimize"
                                        )
                                    }
                                >
                                    <img
                                        src={require("../../components/desktop/img/folder-icon.png")}
                                        alt="About me"
                                    />
                                    <div>About me</div>
                                </Link>
                            </Icon>
                            <Icon>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/apps/contact"
                                            : "/apps"
                                    }
                                    onTouchStart={() =>
                                        this.startApp(
                                            "contactOpen",
                                            contactIcon,
                                            8,
                                            "contactMinimize"
                                        )
                                    }
                                    onDoubleClick={() =>
                                        this.startApp(
                                            "contactOpen",
                                            contactIcon,
                                            8,
                                            "contactMinimize"
                                        )
                                    }
                                >
                                    <img
                                        src={require("../../components/desktop/img/folder-icon.png")}
                                        alt="Contact"
                                    />
                                    <div>Contact</div>
                                </Link>
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
