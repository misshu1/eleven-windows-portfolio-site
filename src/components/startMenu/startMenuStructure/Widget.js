import styled from "styled-components";
import memoryGame from "../img/memory-game.png";

const Widget = styled.div`
    background: #007bff;
    color: #d6d8de;
    position: relative;

    &&:hover {
        opacity: 0.9;
    }

    &&:nth-child(1) {
        background: url(${memoryGame});
        background-position: top center;
        background-size: cover;
    }

    &&:nth-child(1) a,
    :nth-child(3) a {
        text-decoration: none;
        color: #d6d8de;
        cursor: default;
        display: block;
        height: 100%;
        width: 100%;
    }

    &&:nth-child(1) a span {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 2rem;
        background: rgba(0, 0, 0, 0.4);
        bottom: 0;
    }

    &&:nth-child(5) {
        background: #000;
    }

    &&:nth-child(6) {
        background: #111518;
    }

    &&:nth-child(7) {
        background: #0077b5;
    }

    &&:nth-child(5) a,
    &&:nth-child(6) a,
    &&:nth-child(7) a {
        position: absolute;
        text-align: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #d6d8de;
    }

    &&:nth-child(8) {
        background: #fff;
    }

    &&:nth-child(8) a {
        position: absolute;
        text-align: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
    }

    &&:nth-child(5) a span,
    &&:nth-child(6) a span,
    &&:nth-child(7) a span,
    &&:nth-child(8) a span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translateY(-50%, 50%);
        -webkit-transform: translateY(-50%, 50%);
    }
`;

export default Widget;
