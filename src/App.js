import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Taskbar from "./components/taskbar/Taskbar";
import StartButtonImg from "./components/taskbar/StartButtonImg";
import logo from "./components/taskbar/img/small-logo.svg";
import ButtonContainer from "./components/taskbar/ButtonContainer";
import Desktop from "./components/desktop/Desktop";
import Icon from "./components/desktop/Icon";
import LargeWidgetsContainer from "./components/startMenu/LargeWidgetsContainer";
import SmallWidgetsContainer from "./components/startMenu/SmallWidgetsContainer";
import StartMenu from "./components/startMenu/StartMenu";
import Widget from "./components/startMenu/Widget";
import LightTheme from "./components/theme/Light";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft, faLongArrowAltLeft);

class App extends Component {
    state = {
        startMenuOpen: "none"
    };

    startMenuClickHandler = () => {
        this.setState({
            startMenuOpen: this.state.startMenuOpen === "none" ? "flex" : "none"
        });
    };
    closeStartMenu = () => {
        this.setState({ startMenuOpen: "none" });
    };

    resizeIcons = (num, imgWidth, imgHeigth) => {
        const iconContainer = document.querySelectorAll(".icon-container");
        const iconImg = document.querySelectorAll(".icon-img");
        const imgSize = iconImg.forEach(
            item =>
                (item.style.width = imgWidth + "em") &&
                (item.style.height = imgHeigth + "em")
        );
        const containerSize = iconContainer.forEach(
            item =>
                (item.style.width = num + "em") &&
                (item.style.height = num + "em")
        );

        return containerSize && imgSize;
    };

    render() {
        let { startMenuOpen } = this.state;
        return (
            <ThemeProvider theme={LightTheme}>
                <React.Fragment>
                    <Desktop onClick={this.closeStartMenu}>
                        testing
                        <Icon className="icon-container">
                            <img
                                className="icon-img"
                                src={require("./components/desktop/img/folder-icon.png")}
                                alt="test"
                                width="80px"
                                height="60px"
                            />
                            <div>My Stuff</div>
                        </Icon>
                        <Icon className="icon-container">
                            <img
                                className="icon-img"
                                src={require("./components/desktop/img/folder-icon.png")}
                                alt="test"
                                width="80px"
                                height="60px"
                            />
                            <div>My Stuff</div>
                        </Icon>
                        <Icon className="icon-container">
                            <img
                                className="icon-img"
                                src={require("./components/desktop/img/folder-icon.png")}
                                alt="test"
                                width="80px"
                                height="60px"
                            />
                            <div>My Stuff</div>
                        </Icon>
                        <button onClick={() => this.resizeIcons(4, 3.43, 2.56)}>
                            size 4
                        </button>
                        <button onClick={() => this.resizeIcons(5.5, 5, 3.75)}>
                            default
                        </button>
                        <button onClick={() => this.resizeIcons(8, 7.5, 5.62)}>
                            size 8
                        </button>
                    </Desktop>
                    <StartMenu display={startMenuOpen}>
                        <SmallWidgetsContainer />
                        <LargeWidgetsContainer>
                            <Widget style={{ gridArea: "widget-j" }}>
                                widget J
                            </Widget>
                            <Widget style={{ gridArea: "widget-M" }} />
                            <Widget style={{ gridArea: "widget-z" }} />
                            <Widget style={{ gridArea: "widget-x" }} />
                            <Widget style={{ gridArea: "widget-c" }} />
                            <Widget style={{ gridArea: "widget-v" }} />
                            <Widget style={{ gridArea: "widget-L" }}>
                                Contact
                            </Widget>
                            <Widget style={{ gridArea: "widget-e" }}>
                                widget e
                            </Widget>
                            <Widget style={{ gridArea: "widget-r" }}>
                                widget r
                            </Widget>
                            <Widget style={{ gridArea: "widget-q" }}>
                                widget e
                            </Widget>
                            <Widget style={{ gridArea: "widget-w" }}>
                                widget r
                            </Widget>
                        </LargeWidgetsContainer>
                    </StartMenu>
                    <Taskbar>
                        <ButtonContainer />
                        <ButtonContainer>
                            <StartButtonImg
                                src={logo}
                                alt="logo"
                                onClick={this.startMenuClickHandler}
                            />
                        </ButtonContainer>
                        <ButtonContainer>
                            <FontAwesomeIcon
                                icon="long-arrow-alt-left"
                                color="#000"
                                size="2x"
                            />
                        </ButtonContainer>
                    </Taskbar>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
