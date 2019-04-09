import React, { Component, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SpinnerApp from "../../animations/SpinnerApp";
import folderIcon from "../../desktop/img/folder-icon.png";
import mempryGameIcon from "../../taskbar/img/memory-game-icon-taskbar.jpg";
import neighborhoodIcon from "../../taskbar/img/neighborhood-map-icon-taskbar.jpg";
import googleMapsIcon from "./img/google-maps-icon.svg";
import businessIcon from "../../taskbar/img/the-business-company-icon-taskbar.jpg";
import myReadsIcon from "../../taskbar/img/my-reads-icon-taskbar.jpg";
import {
    AppContainer,
    Wrapper,
    NameContainer,
    Tehnologies,
    Container
} from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

const NeighborhoodCore = lazy(() =>
    import("../neighborhoodMap/NeighborhoodCore")
);
const MemoryGameCore = lazy(() => import("../memoryGame/MemoryGameCore"));
const TheBusinessCompanyCore = lazy(() =>
    import("../theBusinessCompany/TheBusinessCompanyCore")
);
const MyReadsCore = lazy(() => import("../myReads/MyReadsCore"));

class MyProjects extends Component {
    state = {
        close: "",
        disabled: true,
        showProjectsList: true,
        openAppName: "",
        projects: {
            neighborhoodMap: false,
            memoryGame: false,
            theBusinessCompany: false,
            myReads: false
        }
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    backButton = () => {
        const newObj = {};
        Object.keys(this.state.projects).map((item, index) => {
            return (newObj[item] = false);
        });
        this.setState({
            projects: newObj,
            showProjectsList: true,
            openAppName: ""
        });
    };

    showApp = async (app, openAppName) => {
        await this.setState({
            showProjectsList: false,
            openAppName: openAppName
        });
        const activeProject = Object.assign({}, { [app]: true });
        await this.setState({ projects: activeProject });
    };

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("myProjectsOpen", "myProjectsMinimize");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const {
            windowIndex,
            activeWindow,
            minimizeApp,
            myProjectsOpen,
            myProjectsMinimize
        } = this.props;
        const {
            disabled,
            close,
            showProjectsList,
            projects,
            openAppName
        } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={myProjectsOpen}
                    minimize={myProjectsMinimize}
                    close={close}
                    appIndex={windowIndex[9]}
                    onClick={() => activeWindow(9)}
                >
                    <AppContainer>
                        <NameBar showProjectsList={showProjectsList}>
                            <FontAwesomeIcon
                                onClick={() =>
                                    !showProjectsList ? this.backButton() : ""
                                }
                                className="back-arrow"
                                icon={["fas", "arrow-left"]}
                                title="Go Back"
                            />
                            <Name className="handle">
                                My Projects {openAppName}
                            </Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("myProjectsMinimize", true)
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        {showProjectsList ? (
                            <Container>
                                <Wrapper
                                    tabIndex="0"
                                    onDoubleClick={() =>
                                        this.showApp(
                                            "theBusinessCompany",
                                            " - The Business Company"
                                        )
                                    }
                                    onTouchStart={() =>
                                        this.showApp(
                                            "theBusinessCompany",
                                            " - The Business Company"
                                        )
                                    }
                                >
                                    <NameContainer>
                                        <img
                                            src={
                                                window.matchMedia(
                                                    "(max-width: 28rem)"
                                                ).matches
                                                    ? businessIcon
                                                    : folderIcon
                                            }
                                            alt="The Business Company"
                                        />
                                        <span>The Business Company</span>
                                    </NameContainer>
                                    <Tehnologies>
                                        <FontAwesomeIcon
                                            icon={["fab", "react"]}
                                            style={{ color: "#00d8ff" }}
                                            title="React.JS"
                                        />
                                    </Tehnologies>
                                    <span className="date">April 2019</span>
                                </Wrapper>

                                <Wrapper
                                    tabIndex="0"
                                    onDoubleClick={() =>
                                        this.showApp(
                                            "neighborhoodMap",
                                            " - Neighborhood Map"
                                        )
                                    }
                                    onTouchStart={() =>
                                        this.showApp(
                                            "neighborhoodMap",
                                            " - Neighborhood Map"
                                        )
                                    }
                                >
                                    <NameContainer>
                                        <img
                                            src={
                                                window.matchMedia(
                                                    "(max-width: 28rem)"
                                                ).matches
                                                    ? neighborhoodIcon
                                                    : folderIcon
                                            }
                                            alt="Neighborhood Map"
                                        />
                                        <span>Neighborhood Map</span>
                                    </NameContainer>
                                    <Tehnologies>
                                        <FontAwesomeIcon
                                            icon={["fab", "react"]}
                                            style={{ color: "#00d8ff" }}
                                            title="React.JS"
                                        />
                                        <FontAwesomeIcon
                                            icon={["fab", "foursquare"]}
                                            style={{ color: "#f94877" }}
                                            title="Foursquare API"
                                        />
                                        <img
                                            src={googleMapsIcon}
                                            alt="google maps icon"
                                            title="Google Maps API"
                                        />
                                    </Tehnologies>
                                    <span className="date">August 2018</span>
                                </Wrapper>

                                <Wrapper
                                    tabIndex="0"
                                    onDoubleClick={() =>
                                        this.showApp("myReads", " - My Reads")
                                    }
                                    onTouchStart={() =>
                                        this.showApp("myReads", " - My Reads")
                                    }
                                >
                                    <NameContainer>
                                        <img
                                            src={
                                                window.matchMedia(
                                                    "(max-width: 28rem)"
                                                ).matches
                                                    ? myReadsIcon
                                                    : folderIcon
                                            }
                                            alt="My Reads"
                                        />
                                        <span>My Reads</span>
                                    </NameContainer>
                                    <Tehnologies>
                                        <FontAwesomeIcon
                                            icon={["fab", "react"]}
                                            style={{ color: "#00d8ff" }}
                                            title="React.JS"
                                        />
                                    </Tehnologies>
                                    <span className="date">July 2018</span>
                                </Wrapper>

                                <Wrapper
                                    tabIndex="0"
                                    onDoubleClick={() =>
                                        this.showApp(
                                            "memoryGame",
                                            " - Memory Game"
                                        )
                                    }
                                    onTouchStart={() =>
                                        this.showApp(
                                            "memoryGame",
                                            " - Memory Game"
                                        )
                                    }
                                >
                                    <NameContainer>
                                        <img
                                            src={
                                                window.matchMedia(
                                                    "(max-width: 28rem)"
                                                ).matches
                                                    ? mempryGameIcon
                                                    : folderIcon
                                            }
                                            alt="Memory Game"
                                        />
                                        <span>Memory Game</span>
                                    </NameContainer>
                                    <Tehnologies>
                                        <FontAwesomeIcon
                                            icon={["fab", "html5"]}
                                            style={{ color: "#e34f26" }}
                                            title="HTML5"
                                        />
                                        <FontAwesomeIcon
                                            icon={["fab", "css3-alt"]}
                                            style={{ color: "#3366cc" }}
                                            title="CSS3"
                                        />
                                        <FontAwesomeIcon
                                            icon={["fab", "js"]}
                                            style={{ color: "#f7df1e" }}
                                            title="JavaScript"
                                        />
                                    </Tehnologies>
                                    <span className="date">March 2018</span>
                                </Wrapper>
                            </Container>
                        ) : (
                            ""
                        )}
                        {projects.neighborhoodMap ? (
                            <Suspense fallback={<SpinnerApp />}>
                                <NeighborhoodCore textBlack />
                            </Suspense>
                        ) : (
                            ""
                        )}

                        {projects.memoryGame ? (
                            <Suspense fallback={<SpinnerApp />}>
                                <MemoryGameCore />
                            </Suspense>
                        ) : (
                            ""
                        )}
                        {projects.theBusinessCompany ? (
                            <Suspense fallback={<SpinnerApp />}>
                                <TheBusinessCompanyCore />
                            </Suspense>
                        ) : (
                            ""
                        )}
                        {projects.myReads ? (
                            <Suspense fallback={<SpinnerApp />}>
                                <MyReadsCore />
                            </Suspense>
                        ) : (
                            ""
                        )}
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default MyProjects;

MyProjects.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    myProjectsOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
