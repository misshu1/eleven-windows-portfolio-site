import React, { Component } from "react";
import {
    BackgroundContainer,
    Card,
    Deck,
    ResultPopUp,
    ScorePanel
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let openCards = [];
let selected = [];
let timer = null;

class MemoryGameCore extends Component {
    state = {
        cards: [],
        moves: 0,
        minutes: 0,
        seconds: 0,
        matchedCards: 0
    };

    componentDidMount() {
        this.setCards();
    }

    componentWillUnmount() {
        this.restartGame();
    }

    setCards = () => {
        const cards = [
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
        const deck = this.shuffle(cards);
        this.setState({ cards: [...deck] });
    };

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

    timeCounter = () => {
        timer = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
            if (this.state.seconds === 60) {
                this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
            }
        }, 1000);
    };

    movesCounter = num => {
        this.setState(prevState => ({
            moves: prevState.moves + num
        }));
        if (this.state.moves === 1) {
            this.timeCounter();
        }
    };

    restartGame = () => {
        this.setState({
            moves: 0,
            minutes: 0,
            seconds: 0,
            matchedCards: 0
        });
        openCards = [];
        selected = [];
        this.setCards();
        clearInterval(timer);
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

    ceckCards = e => {
        if (openCards.length < 2) {
            openCards.push(e.target.id);
            selected = [];
            selected.push(e.target.id);
            this.movesCounter(1);
            this.state.cards.map((cards, index) => {
                if (selected[0].includes(index) === true) {
                    // Get the id of the card without the card name
                    const selectedCard = selected[0].match(/\d/g).join("");
                    this.setState(prevState => ({
                        cards: prevState.cards.map((obj, index) =>
                            index === Number(selectedCard)
                                ? Object.assign(obj, { open: true })
                                : obj
                        )
                    }));
                }

                if (openCards.length === 2) {
                    // Get the card name without the id
                    const first = String(openCards[0].replace(/[0-9]/g, ""));
                    const second = String(openCards[1].replace(/[0-9]/g, ""));

                    if (first === second) {
                        if (openCards[0].includes(first) === true) {
                            const selectedCard = openCards[0]
                                .match(/\d/g)
                                .join("");
                            this.setState(prevState => ({
                                cards: prevState.cards.map((obj, index) =>
                                    index === Number(selectedCard)
                                        ? Object.assign(obj, { match: true })
                                        : obj
                                ),
                                matchedCards: prevState.matchedCards + 1
                            }));
                        }

                        if (openCards[1].includes(second) === true) {
                            const selectedCard = openCards[1]
                                .match(/\d/g)
                                .join("");
                            this.setState(prevState => ({
                                cards: prevState.cards.map((obj, index) =>
                                    index === Number(selectedCard)
                                        ? Object.assign(obj, { match: true })
                                        : obj
                                ),
                                matchedCards: prevState.matchedCards + 1
                            }));
                        }
                        openCards = [];
                    } else {
                        setTimeout(() => {
                            if (openCards[0].includes(first) === true) {
                                const selectedCard = openCards[0]
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
                                const selectedCard = openCards[1]
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
                return null;
            });
        }
    };

    render() {
        const { moves, seconds, minutes, matchedCards } = this.state;
        return (
            <BackgroundContainer>
                <ScorePanel>
                    {/* Stop timer when all cards match */}
                    {matchedCards === 16 ? clearInterval(timer) : ""}
                    <ul>
                        <li style={{ color: "yellow" }}>
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                        <li
                            style={
                                moves > 40
                                    ? { color: "#fff" }
                                    : { color: "yellow" }
                            }
                        >
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                        <li
                            style={
                                moves > 32
                                    ? { color: "#fff" }
                                    : { color: "yellow" }
                            }
                        >
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                    </ul>
                    <span>{moves} Moves</span>
                    <span>
                        {minutes > 0 ? minutes : 0} {" : "}
                        {seconds > 0 ? seconds : 0}
                    </span>
                    <div onClick={this.restartGame}>Restart Game</div>
                </ScorePanel>
                <Deck>{this.createCards()}</Deck>
                <ResultPopUp matchedCards={matchedCards}>
                    <h2>Well done!</h2>
                    <p>Completed in {moves} moves.</p>
                    <p>
                        Time:{" "}
                        <span>
                            {minutes > 0 ? minutes : 0} {" : "}
                            {seconds > 0 ? seconds : 0}
                        </span>
                    </p>
                    <ul>
                        <li style={{ color: "yellow" }}>
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                        <li
                            style={
                                moves > 40
                                    ? { color: "#fff" }
                                    : { color: "yellow" }
                            }
                        >
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                        <li
                            style={
                                moves > 32
                                    ? { color: "#fff" }
                                    : { color: "yellow" }
                            }
                        >
                            <FontAwesomeIcon icon="star" size="lg" />
                        </li>
                    </ul>
                    <button onClick={this.restartGame}>Play again!</button>
                </ResultPopUp>
            </BackgroundContainer>
        );
    }
}

export default MemoryGameCore;
