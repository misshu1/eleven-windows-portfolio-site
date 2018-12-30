import React from "react";
import Taskbar from "./taskbarStructure/Taskbar";
import OpenAppsContainer from "./taskbarStructure/OpenAppsContainer";
import LogoContainer from "./taskbarStructure/LogoContainer";
import HomeButtonContainer from "./taskbarStructure/HomeButtonContainer";
import ClockContainer from "./taskbarStructure/ClockContainer";
import BackButtonContainer from "./taskbarStructure/BackButtonContainer";
import Clock from "./Clock";

const TaskbarApp = props => {
    return (
        <Taskbar>
            <HomeButtonContainer>home</HomeButtonContainer>
            <LogoContainer onClick={props.startMenuClickHandler}>
                logo
            </LogoContainer>
            <OpenAppsContainer>open</OpenAppsContainer>
            <ClockContainer>
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
