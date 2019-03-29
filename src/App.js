import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./components/theme/DarkTheme";
import LightTheme from "./components/theme/LightTheme";
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
    state = {
        theme: DarkTheme
    };

    changeTheme = theme => {
        if (theme === "dark") {
            this.setState({
                theme: DarkTheme
            });
        } else if (theme === "light") {
            this.setState({
                theme: LightTheme
            });
        }
    };

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <DesktopApp changeTheme={this.changeTheme} />
            </ThemeProvider>
        );
    }
}

export default App;
