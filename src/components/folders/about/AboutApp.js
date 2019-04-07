import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    AppContainer,
    Container,
    AchievementsContainer,
    AchievementsDetails
} from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";
import nanodegree from "./img/nanodegree.png";
import scholarship from "./img/scholarship.png";

class AboutApp extends Component {
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
            this.props.closeApp("aboutOpen", "aboutMinimize");
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
            aboutOpen,
            aboutMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={aboutOpen}
                    minimize={aboutMinimize}
                    close={close}
                    appIndex={windowIndex[7]}
                    onClick={() => activeWindow(7)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">About me</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp("aboutMinimize", true)
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
                            <p>
                                My first interaction with code was in 2009 when
                                I created my first website, back then I was not
                                thinking that I can do my living from it.
                            </p>

                            <p>
                                In 2017 I saw an ad on Facebook about a
                                scholarship program to learn web development. I
                                read some information about that and I
                                registered for the scholarship. One month passed
                                and they announced the people selected for this
                                program -- 60,000 out of the 200,000 registered.
                            </p>

                            <p>
                                The funny part of this is that I received an
                                email telling me that I was not selected for
                                this program, and I felt so bad in that day. But
                                the very next day they send me a second email
                                telling me that the first email was a mistake
                                and I was selected.
                            </p>

                            <p>
                                The scholarship start date came and , after a
                                few weeks I’ve learned so much and was so
                                motivated to learn more about programing, that I
                                completed the 3 month scholarship program in
                                only 1 month. The course was so well put
                                together and the community always there to help
                                when I got stuck in some quizzes.
                            </p>

                            <p>
                                When the scholarship was over, the next step was
                                to announce the recipients of a 6 months
                                nanodegree program. That day was the longest day
                                of my life. The email came telling me that I was
                                one of the 10% of 60,000 people who moved on to
                                phase 2 of the scholarship -- 6 months of
                                learning Front-End Web Development. It was the
                                best thing that happened to me, and for this I
                                want to thank Udacity for showing me a path to
                                follow, that I had not seen before, and did not
                                know existed.
                            </p>
                            <AchievementsContainer>
                                <img src={scholarship} alt="Scholarship" />
                                <AchievementsDetails>
                                    <h2>
                                        Google Developer Challenge Scholarship
                                    </h2>
                                    <div className="links">
                                        <a
                                            href="https://www.udacity.com/google-scholarships"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Link
                                        </a>
                                        <span>November 2017</span>
                                    </div>
                                </AchievementsDetails>
                            </AchievementsContainer>
                            <AchievementsContainer>
                                <img src={nanodegree} alt="Nanodegree" />
                                <AchievementsDetails>
                                    <h2>Front-End Web Developer Nanodegree</h2>
                                    <div className="links">
                                        <a
                                            href="https://confirm.udacity.com/TDVJVDUK"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Link
                                        </a>
                                        <span>August 2018</span>
                                    </div>
                                </AchievementsDetails>
                            </AchievementsContainer>
                        </Container>
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default AboutApp;

AboutApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    aboutOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
