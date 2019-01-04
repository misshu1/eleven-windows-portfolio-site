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

let cards = [
    { id: 1, name: "gem", open: false, match: false },
    { id: 1, name: "gem", open: false, match: false },
    { id: 2, name: "paper-plane", open: false, match: false },
    { id: 2, name: "paper-plane", open: false, match: false },
    { id: 3, name: "anchor", open: false, match: false },
    { id: 3, name: "anchor", open: false, match: false },
    { id: 4, name: "bolt", open: false, match: false },
    { id: 4, name: "bolt", open: false, match: false },
    { id: 5, name: "cube", open: false, match: false },
    { id: 5, name: "cube", open: false, match: false },
    { id: 6, name: "leaf", open: false, match: false },
    { id: 6, name: "leaf", open: false, match: false },
    { id: 7, name: "bicycle", open: false, match: false },
    { id: 7, name: "bicycle", open: false, match: false },
    { id: 8, name: "bomb", open: false, match: false },
    { id: 8, name: "bomb", open: false, match: false }
];

let openCards = [];
let selected = [];
class MemoryGameApp extends Component {
    state = {
        cards: []
    };

    componentWillMount() {
        const deck = this.shuffle(cards);
        this.setState({ cards: deck });
    }

    createCards = () => {
        const create = this.state.cards.map((card, index) => (
            <Card
                key={index}
                onClick={this.ceckCards}
                id={card.name + " " + index}
                open={card.open}
                match={card.match}
            >
                <FontAwesomeIcon icon={card.name} />
            </Card>
        ));
        return create;
    };

    ceckCards = e => {
        if (openCards.length < 2) {
            openCards.push(e.target.id);
            selected = [];
            selected.push(e.target.id);
            console.log(this.state.cards);
            for (let i = 0; i < this.state.cards.length; i++) {
                if (selected[0].includes(i) === true) {
                    let selectedCard = selected[0].match(/\d/g).join("");
                    this.setState(prevState => ({
                        cards: prevState.cards.map((obj, index) =>
                            index === Number(selectedCard)
                                ? Object.assign(obj, { open: true })
                                : obj
                        )
                    }));
                }
                if (openCards.length === 2) {
                    let first = String(openCards[0].replace(/[0-9]/g, ""));
                    let second = String(openCards[1].replace(/[0-9]/g, ""));
                    if (first === second) {
                        if (openCards[0].includes(first) === true) {
                            let selectedCard = openCards[0]
                                .match(/\d/g)
                                .join("");
                            this.setState(prevState => ({
                                cards: prevState.cards.map((obj, index) =>
                                    index === Number(selectedCard)
                                        ? Object.assign(obj, { match: true })
                                        : obj
                                )
                            }));
                        }
                        if (openCards[1].includes(second) === true) {
                            let selectedCard = openCards[1]
                                .match(/\d/g)
                                .join("");
                            this.setState(prevState => ({
                                cards: prevState.cards.map((obj, index) =>
                                    index === Number(selectedCard)
                                        ? Object.assign(obj, { match: true })
                                        : obj
                                )
                            }));
                        }

                        console.log("match");

                        openCards = [];
                    } else {
                        console.log("fail");
                        setTimeout(() => {
                            if (openCards[0].includes(first) === true) {
                                let selectedCard = openCards[0]
                                    .match(/\d/g)
                                    .join("");
                                this.setState(prevState => ({
                                    cards: prevState.cards.map((obj, index) =>
                                        index === Number(selectedCard)
                                            ? Object.assign(obj, {
                                                  open: false
                                              })
                                            : obj
                                    )
                                }));
                            }
                            if (openCards[1].includes(second) === true) {
                                let selectedCard = openCards[1]
                                    .match(/\d/g)
                                    .join("");
                                this.setState(prevState => ({
                                    cards: prevState.cards.map((obj, index) =>
                                        index === Number(selectedCard)
                                            ? Object.assign(obj, {
                                                  open: false
                                              })
                                            : obj
                                    )
                                }));
                            }
                        }, 600);
                        setTimeout(() => {
                            openCards = [];
                        }, 650);
                    }
                }
            }
            // for (let i = 0; i < this.state.cards.length; i++) {
            //     if (this.state.selected.includes(i) === true) {
            //         let selectedCard = this.state.selected
            //             .match(/\d/g)
            //             .join("");
            //         this.setState(prevState => ({
            //             cards: prevState.cards.map((obj, index) =>
            //                 index === Number(selectedCard)
            //                     ? Object.assign(obj, { open: true })
            //                     : obj
            //             )
            //         }));
            //     }
            // }

            // if (openCards.length === 2) {
            //     if (openCards[0] === openCards[1]) {
            //         console.log("match");

            //         openCards = [];
            //     } else {
            //         console.log("fail");

            //         setTimeout(() => {
            //             openCards = [];
            //         }, 500);
            //     }
            // }
        }
    };

    // Shuffle function from http://stackoverflow.com/a/2450976
    shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
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
                        <Deck>{this.createCards()}</Deck>
                    </Container>
                </BackgroundContainer>
            </Folder>
        );
    }
}

export default MemoryGameApp;
