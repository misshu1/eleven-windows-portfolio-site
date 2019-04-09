import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    AppContainer,
    Container,
    RightContainer,
    LeftContainer,
    EmailInput,
    NameInput,
    MessageInput,
    Button
} from "./style";

import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class ContactApp extends Component {
    state = {
        close: "",
        disabled: true
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("contactOpen", "contactMinimize");
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
            contactOpen,
            contactMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={contactOpen}
                    minimize={contactMinimize}
                    close={close}
                    appIndex={windowIndex[8]}
                    onClick={() => activeWindow(8)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Contact Info</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("contactMinimize", true)
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
                        <Container>
                            <LeftContainer>
                                <h2>Contact me</h2>
                                <p>
                                    If you have any questions feel free to
                                    contact me.
                                </p>
                                <p>I'll reply in maximum 48 hours.</p>
                                <p>
                                    <FontAwesomeIcon
                                        icon="at"
                                        color="#d6d8de"
                                        className="fa-sm"
                                        style={{ paddingRight: ".5rem" }}
                                    />{" "}
                                    {process.env.REACT_APP_EMAIL_ADDRESS}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon="phone"
                                        color="#d6d8de"
                                        className="fa-sm"
                                        style={{ paddingRight: ".5rem" }}
                                    />{" "}
                                    <span
                                        id="phone-number"
                                        onClick={this.revealPhone}
                                    >
                                        {process.env.REACT_APP_PHONE_NUMBER}
                                    </span>
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon="map-marker-alt"
                                        color="#d6d8de"
                                        className="fa-sm"
                                        style={{ paddingRight: ".5rem" }}
                                    />{" "}
                                    Ramnicu Valcea, RO
                                </p>
                                <span className="contact-icons">
                                    <a
                                        href="https://github.com/misshu1"
                                        target="_blank"
                                        rel="external noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "github-square"]}
                                            size="lg"
                                        />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/andreinedelus/"
                                        target="_blank"
                                        rel="external noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "linkedin"]}
                                            size="lg"
                                        />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/andreinedelus.ro/"
                                        target="_blank"
                                        rel="external noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "instagram"]}
                                            size="lg"
                                        />
                                    </a>
                                </span>
                            </LeftContainer>
                            <RightContainer>
                                <form>
                                    <NameInput placeholder="Name" />
                                    <EmailInput placeholder="Email" />
                                    <MessageInput placeholder="Message" />
                                    <Button>Send</Button>
                                </form>
                            </RightContainer>
                        </Container>
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default ContactApp;

ContactApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    contactOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
