import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppContainer from "../calculator/style/AppContainer";
import NameBar from "../folderStructure/nameBar/NameBar";
import Name from "../folderStructure/nameBar/Name";
import Buttons from "../folderStructure/nameBar/Buttons";
import Section from "./style/Section";
import CalculatorInput from "./style/CalculatorInput";
import Operators from "./style/Operators";
import ButtonsContainer from "./style/ButtonsContainer";
import NumberPad from "./style/NumberPad";
import Result from "./style/Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CalculatorApp extends Component {
    state = {
        value: "",
        calculatorOpen: "close",
        close: ""
    };
    static getDerivedStateFromProps(props, state) {
        return { calculatorOpen: props.calculatorOpen };
    }

    componentDidMount() {
        this.props.activeWindow(3);
        this.calculateInput.focus();
    }
    quitApp() {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("calculatorOpen");
        }, 200);
    }

    render() {
        const { calculatorOpen, close } = this.state;
        return (
            <AppContainer
                calculatorOpen={calculatorOpen}
                close={close}
                style={{
                    zIndex: this.props.windowIndex[3]
                }}
                appIndex={this.props.windowIndex[3]}
                onClick={() => this.props.activeWindow(3)}
            >
                <NameBar>
                    <Name>Calculator</Name>
                    <Buttons>
                        <div>
                            <FontAwesomeIcon icon="window-minimize" size="sm" />
                        </div>
                        <Link
                            to={
                                window.matchMedia("(max-width: 56.25rem)")
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
                <Section>
                    <CalculatorInput
                        placeholder="0"
                        ref={input => {
                            this.calculateInput = input;
                        }}
                    />
                    <Result>rez</Result>
                    <ButtonsContainer>
                        <NumberPad>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>.</button>
                            <button>0</button>
                            <button>DEL</button>
                        </NumberPad>
                        <Operators>
                            <button>&divide;</button>
                            <button>&times;</button>
                            <button>-</button>
                            <button>+</button>
                            <button>=</button>
                        </Operators>
                    </ButtonsContainer>
                </Section>
            </AppContainer>
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
