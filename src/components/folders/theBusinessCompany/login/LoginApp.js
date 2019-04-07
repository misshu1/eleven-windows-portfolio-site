import React, { Component } from "react";
import {
    LoginContainer,
    LoginWindow,
    EmailInput,
    PasswordInput,
    Backdrop
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginApp extends Component {
    state = {
        login: "close"
    };
    login() {
        if (this.state.login === "close") {
            this.setState({ login: "open" });
        }
    }
    closeLogin() {
        if (this.state.login === "open") {
            this.setState({ login: "close" });
        }
    }
    render() {
        const { login } = this.state;
        return (
            <React.Fragment>
                <LoginContainer>
                    <button onClick={() => this.login()}>
                        <FontAwesomeIcon icon="angle-right" /> Login
                    </button>{" "}
                    or <button>Register</button> to enjoy the benefits of our
                    site !
                </LoginContainer>
                <LoginWindow login={login}>
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
                <Backdrop
                    login={login}
                    onClick={() => {
                        this.closeLogin();
                    }}
                />
            </React.Fragment>
        );
    }
}
export default LoginApp;
