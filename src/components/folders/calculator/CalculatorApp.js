import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppContainer from "../calculator/style/AppContainer";
import NameBar from "../style/nameBar/NameBar";
import Name from "../style/nameBar/Name";
import Buttons from "../style/nameBar/Buttons";
import Section from "./style/Section";
import CalculatorInput from "./style/CalculatorInput";
import Operators from "./style/Operators";
import ButtonsContainer from "./style/ButtonsContainer";
import NumberPad from "./style/NumberPad";
import Result from "./style/Result";
import AnimateFadeInOut from "../../animations/AnimateFadeInOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class CalculatorApp extends Component {
    state = {
        value: "",
        prevNum: "",
        result: null,
        operator: "",
        close: "",
        disabled: true
    };

    componentDidMount() {
        this.props.activeWindow(2);
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("calculatorOpen");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    addNumberToInput = val => {
        this.setState({ value: this.state.value + val });
    };

    addZeroToInput = val => {
        if (this.state.value !== "") {
            this.setState({ value: this.state.value + val });
        }
        if (this.state.value === "") {
            this.setState({ value: this.state.value + val + "." });
        }
    };

    addPeriod = val => {
        if (!this.state.value.includes(".")) {
            this.setState({ value: this.state.value + val });
        }
        if (this.state.value === "") {
            this.setState({ value: this.state.value + 0 + val });
        }
    };

    deleteBtn() {
        this.setState({ value: "", result: null });
    }

    add = () => {
        this.setState({
            prevNum: this.state.value,
            value: "",
            operator: "plus"
        });
    };

    minus = () => {
        this.setState({
            prevNum: this.state.value,
            value: "",
            operator: "minus"
        });
    };

    multiply = () => {
        this.setState({
            prevNum: this.state.value,
            value: "",
            operator: "multiply"
        });
    };

    divide = () => {
        this.setState({
            prevNum: this.state.value,
            value: "",
            operator: "divide"
        });
    };

    roundResult = val => {
        if (this.state.result !== null) {
            return Math.round(val * Math.pow(10, 10)) / Math.pow(10, 10);
        }
    };

    calculate = () => {
        const { value, prevNum, operator } = this.state;
        let currentNum = value;
        if (value !== "") {
            switch (operator) {
                case "plus":
                    this.setState({
                        result: +prevNum + +currentNum,
                        prevNum: "",
                        value: ""
                    });
                    break;
                case "minus":
                    this.setState({
                        result: +prevNum - +currentNum,
                        prevNum: "",
                        value: ""
                    });
                    break;
                case "multiply":
                    this.setState({
                        result: +prevNum * +currentNum,
                        prevNum: "",
                        value: ""
                    });
                    break;
                case "divide":
                    this.setState({
                        result: +prevNum / +currentNum,
                        prevNum: "",
                        value: ""
                    });
                    break;
                default:
                    return console.log("Error: Operator not selected!");
            }
        }
    };

    render() {
        const { windowIndex, activeWindow, calculatorOpen } = this.props;
        const { close, disabled, result, value } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={calculatorOpen}
                    close={close}
                    appIndex={windowIndex[2]}
                    onClick={() => activeWindow(2)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Calculator</Name>
                            <Buttons>
                                <div>
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia(
                                            "(max-width: 56.25rem)"
                                        ).matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        <Section>
                            <CalculatorInput
                                onChange={e =>
                                    this.setState({ value: e.target.value })
                                }
                                value={value}
                            />
                            <Result>{this.roundResult(result)}</Result>
                            <ButtonsContainer>
                                <NumberPad>
                                    <button
                                        onClick={() => this.addNumberToInput(7)}
                                    >
                                        7
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(8)}
                                    >
                                        8
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(9)}
                                    >
                                        9
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(4)}
                                    >
                                        4
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(5)}
                                    >
                                        5
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(6)}
                                    >
                                        6
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(1)}
                                    >
                                        1
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(2)}
                                    >
                                        2
                                    </button>
                                    <button
                                        onClick={() => this.addNumberToInput(3)}
                                    >
                                        3
                                    </button>
                                    <button onClick={() => this.addPeriod(".")}>
                                        .
                                    </button>
                                    <button
                                        onClick={() => this.addZeroToInput(0)}
                                    >
                                        0
                                    </button>
                                    <button onClick={() => this.deleteBtn()}>
                                        DEL
                                    </button>
                                </NumberPad>
                                <Operators>
                                    <button onClick={() => this.divide()}>
                                        &divide;
                                    </button>
                                    <button onClick={() => this.multiply()}>
                                        &times;
                                    </button>
                                    <button onClick={() => this.minus()}>
                                        -
                                    </button>
                                    <button onClick={() => this.add()}>
                                        +
                                    </button>
                                    <button onClick={() => this.calculate()}>
                                        =
                                    </button>
                                </Operators>
                            </ButtonsContainer>
                        </Section>
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}

export default CalculatorApp;

CalculatorApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    calculatorOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
