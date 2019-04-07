import React, { Component } from "react";
import {
    Icon,
    ExpandButton,
    WidgetContainer,
    Widget,
    WidgetInfo,
    ShortInfo
} from "./style";

class WidgetsApp extends Component {
    state = {
        widget1: "close",
        widget2: "close",
        widget3: "close",
        widget4: "close"
    };

    toggleOpen = key => {
        if (this.state[key] === "close") {
            this.setState({ [key]: "open" });
        } else {
            this.setState({ [key]: "close" });
        }
    };

    render() {
        const { widget1, widget2, widget3, widget4 } = this.state;
        return (
            <React.Fragment>
                <WidgetContainer>
                    <div>
                        <Widget
                            style={
                                widget1 === "open"
                                    ? {
                                          boxShadow:
                                              "0px 0px 15px 0px rgba(0, 0, 0, 0.75)"
                                      }
                                    : { boxShadow: "none" }
                            }
                        >
                            <Icon
                                style={
                                    widget1 === "open"
                                        ? { background: "black" }
                                        : { background: "#53b8c4" }
                                }
                            >
                                01
                            </Icon>
                            <ShortInfo>
                                <h2>Our services</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, magnam!
                                </p>
                            </ShortInfo>
                            <ExpandButton>
                                <button
                                    onClick={() => this.toggleOpen("widget1")}
                                    aria-label="view info"
                                >
                                    {widget1 === "close" ? "+" : "-"}
                                </button>
                            </ExpandButton>
                        </Widget>
                        <WidgetInfo
                            style={
                                widget1 === "open"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Atque temporibus magnam minima facilis quasi
                            nemo quas asperiores qui perferendis error, soluta
                            repudiandae rem eaque dignissimos exercitationem
                            vitae obcaecati autem dolorum et. Rem commodi ab
                            magnam similique unde distinctio, porro laboriosam!
                        </WidgetInfo>
                    </div>
                    <div>
                        <Widget
                            style={
                                widget2 === "open"
                                    ? {
                                          boxShadow:
                                              "0px 0px 15px 0px rgba(0, 0, 0, 0.75)"
                                      }
                                    : { boxShadow: "none" }
                            }
                        >
                            <Icon
                                style={
                                    widget2 === "open"
                                        ? { background: "black" }
                                        : { background: "#53b8c4" }
                                }
                            >
                                02
                            </Icon>
                            <ShortInfo>
                                <h2>Our rates</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, magnam!
                                </p>
                            </ShortInfo>
                            <ExpandButton>
                                <button
                                    onClick={() => this.toggleOpen("widget2")}
                                    aria-label="view info"
                                >
                                    {widget2 === "close" ? "+" : "-"}
                                </button>
                            </ExpandButton>
                        </Widget>
                        <WidgetInfo
                            style={
                                widget2 === "open"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Atque temporibus magnam minima facilis quasi
                            nemo quas asperiores qui perferendis error, soluta
                            repudiandae rem eaque dignissimos exercitationem
                            vitae obcaecati autem dolorum et. Rem commodi ab
                            magnam similique unde distinctio, porro laboriosam!
                        </WidgetInfo>
                    </div>
                    <div>
                        <Widget
                            style={
                                widget3 === "open"
                                    ? {
                                          boxShadow:
                                              "0px 0px 15px 0px rgba(0, 0, 0, 0.75)"
                                      }
                                    : { boxShadow: "none" }
                            }
                        >
                            <Icon
                                style={
                                    widget3 === "open"
                                        ? { background: "black" }
                                        : { background: "#53b8c4" }
                                }
                            >
                                03
                            </Icon>
                            <ShortInfo>
                                <h2>Our studies</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, magnam!
                                </p>
                            </ShortInfo>
                            <ExpandButton>
                                <button
                                    onClick={() => this.toggleOpen("widget3")}
                                    aria-label="view info"
                                >
                                    {widget3 === "close" ? "+" : "-"}
                                </button>
                            </ExpandButton>
                        </Widget>
                        <WidgetInfo
                            style={
                                widget3 === "open"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Atque temporibus magnam minima facilis quasi
                            nemo quas asperiores qui perferendis error, soluta
                            repudiandae rem eaque dignissimos exercitationem
                            vitae obcaecati autem dolorum et. Rem commodi ab
                            magnam similique unde distinctio, porro laboriosam!
                        </WidgetInfo>
                    </div>
                    <div>
                        <Widget
                            style={
                                widget4 === "open"
                                    ? {
                                          boxShadow:
                                              "0px 0px 15px 0px rgba(0, 0, 0, 0.75)"
                                      }
                                    : { boxShadow: "none" }
                            }
                        >
                            <Icon
                                style={
                                    widget4 === "open"
                                        ? { background: "black" }
                                        : { background: "#53b8c4" }
                                }
                            >
                                04
                            </Icon>
                            <ShortInfo>
                                <h2>Get a quote</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, magnam!
                                </p>
                            </ShortInfo>
                            <ExpandButton>
                                <button
                                    onClick={() => this.toggleOpen("widget4")}
                                    aria-label="view info"
                                >
                                    {widget4 === "close" ? "+" : "-"}
                                </button>
                            </ExpandButton>
                        </Widget>
                        <WidgetInfo
                            style={
                                widget4 === "open"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Atque temporibus magnam minima facilis quasi
                            nemo quas asperiores qui perferendis error, soluta
                            repudiandae rem eaque dignissimos exercitationem
                            vitae obcaecati autem dolorum et. Rem commodi ab
                            magnam similique unde distinctio, porro laboriosam!
                        </WidgetInfo>
                    </div>
                </WidgetContainer>
            </React.Fragment>
        );
    }
}

export default WidgetsApp;
