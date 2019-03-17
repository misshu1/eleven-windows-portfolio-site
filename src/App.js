import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./components/theme/Dark";
import DesktopApp from "./components/desktop/DesktopApp";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar,
    faSpinner,
    faFile,
    faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedinIn,
    faGithub,
    faInstagram,
    faCodepen
} from "@fortawesome/free-brands-svg-icons";
library.add(
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar,
    faLinkedinIn,
    faGithub,
    faCodepen,
    faInstagram,
    faSpinner,
    faFile,
    faAddressCard
);

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={DarkTheme}>
                <DesktopApp />
            </ThemeProvider>
        );
    }
}

export default App;
