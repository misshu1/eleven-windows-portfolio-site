import React, { Component } from "react";
import { Button, Container, Img, Wrapper } from "./style";
import img1 from "../showcase/img/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ArticlesApp extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Article about our client</h2>
                    <Wrapper>
                        <Img src={img1} />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ex, ratione a tempora adipisci vitae
                            voluptatibus. Veniam quisquam dignissimos minus
                            tempore, perferendis molestiae corporis. Amet neque
                            libero accusantium beatae consequuntur eaque
                            deleniti cum quae dolorem unde inventore corrupti,
                            ea, quod explicabo.
                        </p>
                        <a href="# ">Read article</a>
                    </Wrapper>
                </Container>
                <Button aria-label="previous article">
                    <FontAwesomeIcon icon="angle-left" />
                </Button>
                <Button aria-label="next article">
                    <FontAwesomeIcon icon="angle-right" />
                </Button>
            </React.Fragment>
        );
    }
}
export default ArticlesApp;
