import React from "react";
import { Route, Link } from "react-router-dom";
import Folder from "../folders/folderStructure/Folder";
import MenuBar from "../folders/folderStructure/menuBar/MenuBar";
import Navigation from "../folders/folderStructure/menuBar/Navigation";
import NameBar from "../folders/folderStructure/nameBar/NameBar";
import Name from "../folders/folderStructure/nameBar/Name";
import Buttons from "../folders/folderStructure/nameBar/Buttons";
import Icon from "../desktop/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FolderApp = () => {
    return (
        <Folder>
            <NameBar>
                <Name> nume aici random </Name>
                <Buttons>
                    <FontAwesomeIcon icon="window-minimize" size="sm" />
                </Buttons>
                <Buttons hoverBg="#ff0000">
                    <Link to="/">
                        <FontAwesomeIcon icon="times" size="lg" />
                    </Link>
                </Buttons>
            </NameBar>
            <MenuBar>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                </Navigation>

                <Navigation>
                    <Link to="/memory-game">Memory Game</Link>
                </Navigation>
                <Navigation>
                    <Link to="/neighborhood-map">Neighborhood Map</Link>
                </Navigation>

                <Navigation>
                    <Link to="/about">About</Link>
                </Navigation>
            </MenuBar>
            <Route
                exact
                path="/mystuff/projects"
                render={() => (
                    <Icon className="icon-container">
                        <img
                            className="icon-img"
                            src={require("../desktop/img/folder-icon.png")}
                            alt="test"
                            width="80px"
                            height="60px"
                        />
                        <div>Memory Game</div>
                    </Icon>
                )}
            />
            <Route
                exact
                path="/mystuff/al2lea"
                render={() => <p>hihihih folder</p>}
            />
        </Folder>
    );
};

export default FolderApp;
