import React, { Component } from "react";
import LogoApp from "./logo/LogoApp";
import LoginApp from "./login/LoginApp";
import ShowcaseApp from "./showcase/ShowcaseApp";
import { SwapOrder, Container } from "./style";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLock,
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import WidgetsApp from "./widgets/WidgetsApp";
import AboutUsApp from "./aboutUs/AboutUsApp";
import ArticlesApp from "./articles/ArticlesApp";

library.add(faLock, faAngleRight, faAngleLeft);
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
