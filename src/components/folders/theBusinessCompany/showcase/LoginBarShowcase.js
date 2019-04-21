import React, { Component } from "react";
import {
    LoginContainer,
    LoginWindow,
    EmailInput,
    PasswordInput
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginBar extends Component {
    state = {
        login: "close"
    };
    toggleLogin = () => {
        this.state.login === "close"
            ? this.setState({ login: "open" })
            : this.setState({ login: "close" });
    };
    render() {
        const { login } = this.state;
        return (
            <React.Fragment>
                <LoginContainer style={loginStyle}>
                    <button onClick={() => this.toggleLogin()}>
                        <FontAwesomeIcon icon="angle-right" /> Login
                    </button>{" "}
                    or <button>Register</button> to enjoy the benefits of our
                    site !
                </LoginContainer>
                <LoginWindow login={login} style={loginPopUp}>
                    <FontAwesomeIcon
                        className="lock"
                        icon="lock"
                        style={{ color: "#53b8c4" }}
                    />
                    <form id="login">
                        <EmailInput />
                        <PasswordInput />
                    </form>
                    <button>
                        <FontAwesomeIcon
                            icon="angle-right"
                            style={{ color: "#fff" }}
                        />{" "}
                        GO
                    </button>
                </LoginWindow>
            </React.Fragment>
        );
    }
}

const loginStyle = {
    position: "absolute",
    right: 0,
    background: "rgba(140, 140, 140, 0.8)",
    zIndex: "5",
    width: "25rem"
};

const loginPopUp = {
    margin: "0",
    right: "0",
    left: "auto",
    top: "3rem"
};

export default LoginBar;
