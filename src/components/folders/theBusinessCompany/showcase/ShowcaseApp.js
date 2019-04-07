import React, { Component } from "react";
import { ShowcaseContainer, ShowcaseNav, TextContainer, Img } from "./style";
import LoginBarShowcase from "./LoginBarShowcase";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ShowcaseApp extends Component {
    state = {
        images: [img1, img2, img3],
        index: 0,
        text: ["office", "floor", "team"]
    };

    backButton() {
        if (this.state.index <= this.state.images.length - 1) {
            this.setState({ index: this.state.index - 1 });
        }
        if (this.state.index === 0) {
            this.setState({ index: this.state.images.length - 1 });
        }
    }

    nextButton() {
        if (this.state.index < this.state.images.length - 1) {
            this.setState({ index: this.state.index + 1 });
        } else {
            this.setState({ index: 0 });
        }
    }

    render() {
        const { images, index, text } = this.state;
        return (
            <React.Fragment>
                <ShowcaseContainer>
                    {window.matchMedia("(min-width: 50rem)").matches ? (
                        <LoginBarShowcase />
                    ) : (
                        ""
                    )}
                    <Img index={index} src={images[index]} alt="img" />
                    <TextContainer>
                        <div style={{ textAlign: "right" }}>
                            <span>the</span>
                            <h2>{text[index]}</h2>
                        </div>
                        <span data-plus>+</span>
                    </TextContainer>
                    <ShowcaseNav>
                        <button
                            onClick={() => this.backButton()}
                            aria-label="previous image"
                        >
                            <FontAwesomeIcon icon="angle-left" />
                        </button>
                        <span />
                        <button
                            onClick={() => this.nextButton()}
                            aria-label="next image"
                        >
                            <FontAwesomeIcon icon="angle-right" />
                        </button>
                    </ShowcaseNav>
                </ShowcaseContainer>
            </React.Fragment>
        );
    }
}

export default ShowcaseApp;
