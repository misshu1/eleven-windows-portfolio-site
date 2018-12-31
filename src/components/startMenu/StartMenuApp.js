import React from "react";
import LargeWidgetsContainer from "./startMenuStructure/LargeWidgetsContainer";
import SmallWidgetsContainer from "./startMenuStructure/SmallWidgetsContainer";
import StartMenu from "./startMenuStructure/StartMenu";
import Widget from "./startMenuStructure/Widget";

const StartMenuApp = props => {
    return (
        <StartMenu display={props.startMenuOpen}>
            <SmallWidgetsContainer />
            <LargeWidgetsContainer>
                <Widget style={{ gridArea: "widget-1" }}>widget 1</Widget>
                <Widget style={{ gridArea: "widget-2" }}>widget 2</Widget>
                <Widget style={{ gridArea: "widget-3" }}>widget 3</Widget>
                <Widget style={{ gridArea: "widget-4" }}>widget 4</Widget>
                <Widget style={{ gridArea: "widget-5" }}>widget 5</Widget>
                <Widget style={{ gridArea: "widget-6" }}>widget 6</Widget>
                <Widget style={{ gridArea: "widget-7" }}>widget 7</Widget>
                <Widget style={{ gridArea: "widget-8" }}>widget 8</Widget>
                <Widget style={{ gridArea: "widget-9" }}>widget 9</Widget>
                <Widget style={{ gridArea: "widget-10" }}>widget 10</Widget>
                <Widget style={{ gridArea: "widget-11" }}>widget 11</Widget>
            </LargeWidgetsContainer>
        </StartMenu>
    );
};

export default StartMenuApp;
