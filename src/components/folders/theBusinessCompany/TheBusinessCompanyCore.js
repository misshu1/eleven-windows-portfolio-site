import React, { Component } from "react";
import LogoApp from "./logo/LogoApp";
import LoginApp from "./login/LoginApp";
import ShowcaseApp from "./showcase/ShowcaseApp";
import { SwapOrder, Container } from "./style";
import WidgetsApp from "./widgets/WidgetsApp";
import AboutUsApp from "./aboutUs/AboutUsApp";
import ArticlesApp from "./articles/ArticlesApp";

class App extends Component {
    render() {
        return (
            <Container>
                {window.matchMedia("(max-width: 50rem)").matches ? (
                    <LoginApp />
                ) : (
                    ""
                )}
                <SwapOrder>
                    <LogoApp />
                    <ShowcaseApp />
                </SwapOrder>
                <WidgetsApp />
                <AboutUsApp />
                <ArticlesApp />
            </Container>
        );
    }
}

export default App;
