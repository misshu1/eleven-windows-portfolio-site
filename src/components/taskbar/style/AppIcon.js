import styled from "styled-components";

const AppIcon = styled.div`
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    box-sizing: border-box;
    text-align: center;
    height: 100%;
    line-height: 3.5rem;
    width: 3.5rem;
    padding: 0 0.5rem;
    margin: 0 1px;

    &&::after {
        content: "";
        background: rgb(0, 110, 220);
        position: absolute;
        bottom: 0;
        left: 10%;
        height: 2px;
        width: 80%;
    }

    &&:hover::after {
        left: 0;
        width: 100%;
        transition: all 0.4s;
    }

    &&:hover {
        background: rgba(200, 200, 200, 0.2);
    }
`;

export default AppIcon;
