import React from "react";
import Taskbar from "./taskbarStructure/Taskbar";
import OpenAppsContainer from "./taskbarStructure/OpenAppsContainer";
import LogoContainer from "./taskbarStructure/LogoContainer";
import Logo from "./taskbarStructure/Logo";
import BorderLogo from "./taskbarStructure/BorderLogo";
import HomeButtonContainer from "./taskbarStructure/HomeButtonContainer";
import ClockContainer from "./taskbarStructure/ClockContainer";
import BackButtonContainer from "./taskbarStructure/BackButtonContainer";
import Clock from "./Clock";

const TaskbarApp = props => {
    return (
        <Taskbar>
            <HomeButtonContainer>home</HomeButtonContainer>

            <LogoContainer onClick={props.startMenuClickHandler} title="Start">
                <BorderLogo>
                    {/* This 4 spans are used for border animation inside BorderLogo component */}
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo
                        src={require("./taskbarStructure/img/small-logo.svg")}
                        alt="logo"
                    />
                </BorderLogo>{" "}
            </LogoContainer>
            <OpenAppsContainer> </OpenAppsContainer>
            <ClockContainer onClick={props.calendarClickHandler}>
                <Clock />
            </ClockContainer>
            <BackButtonContainer>back</BackButtonContainer>

            {/* <ButtonContainer />
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
            </ButtonContainer> */}
        </Taskbar>
    );
};

export default TaskbarApp;
