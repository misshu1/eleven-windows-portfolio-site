import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./components/theme/DarkTheme";
import LightTheme from "./components/theme/LightTheme";
import DesktopApp from "./components/desktop/DesktopApp";
import { GlobalStyle } from "./components/style";
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
        theme: DarkTheme,
        logo: "red",
        size: 16
    };

    changeAppSize = size => {
        this.setState({ size: size });
    };

    changeTheme = theme => {
        if (theme === "dark") {
            this.setState({
                theme: DarkTheme,
                logo: "red"
            });
        } else if (theme === "light") {
            this.setState({
                theme: LightTheme,
                logo: "blue"
            });
        }
    };

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <React.Fragment>
                    <GlobalStyle size={this.state.size} />
                    <DesktopApp
                        changeTheme={this.changeTheme}
                        logo={this.state.logo}
                        changeAppSize={this.changeAppSize}
                    />
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
