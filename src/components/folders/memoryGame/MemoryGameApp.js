import React, { Component } from "react";
import Folder from "../../folders/folderStructure/Folder";
import NameBar from "../../folders/folderStructure/nameBar/NameBar";
import Name from "../../folders/folderStructure/nameBar/Name";
import Buttons from "../../folders/folderStructure/nameBar/Buttons";
import BackgroundContainer from "./style/BackgroundContainer";
import Container from "./style/Container";
import Deck from "./style/Deck";
import Card from "./style/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let openCards = [];
let cards = [];
class MemoryGameApp extends Component {
    state = {
        cards: [
            { name: "gem", open: false, match: false },
            { name: "gem", open: false, match: false },
            { name: "paper-plane", open: false, match: false },
            { name: "paper-plane", open: false, match: false },
            { name: "anchor", open: false, match: false },
            { name: "anchor", open: false, match: false },
            { name: "bolt", open: false, match: false },
            { name: "bolt", open: false, match: false },
            { name: "cube", open: false, match: false },
            { name: "cube", open: false, match: false },
            { name: "leaf", open: false, match: false },
            { name: "leaf", open: false, match: false },
            { name: "bicycle", open: false, match: false },
            { name: "bicycle", open: false, match: false },
            { name: "bomb", open: false, match: false },
            { name: "bomb", open: false, match: false }
        ],
        openCards: []
    };

    render() {
        return (
            <Folder
                style={{
                    top: "50px",
                    left: "50px",
                    width: "90%",
                    height: "80%",
                    zIndex: this.props.windowIndex[1]
                }}
                onClick={() => this.props.activeWindow(1)}
            >
                <NameBar>
                    <Name>Memory Game</Name>
                    <Buttons>
                        <div>
                            <FontAwesomeIcon icon="window-minimize" size="sm" />
                        </div>
                        <button>
                            <FontAwesomeIcon icon="times" size="lg" />
                        </button>
                    </Buttons>
                </NameBar>
                <BackgroundContainer>
                    <Container>
                        <Deck> </Deck>
                    </Container>
                </BackgroundContainer>
            </Folder>
        );
    }
}

export default MemoryGameApp;
