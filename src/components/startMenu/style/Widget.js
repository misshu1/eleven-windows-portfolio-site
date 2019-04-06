import styled from "styled-components";
import memoryGame from "../img/memory-game.jpg";
import calculator from "../img/calculator.png";
import neighborhood from "../img/neighborhood-map.jpg";
import resume from "../img/resume.jpg";
import weather from "../img/weather.jpg";

export const Widget = styled.div`
    background: #007bff;
    color: ${props => props.theme.textColor};
    position: relative;

    &&:nth-child(1) {
        background: url(${memoryGame});
        background-position: center;
        background-size: cover;
    }

    &&:nth-child(3) {
        background: url(${calculator});
        background-position: center;
        background-size: cover;
    }

    &&:nth-child(4) {
        background: url(${resume});
        background-position: center;
        background-size: cover;
    }

    &&:nth-child(9) {
        background: url(${neighborhood});
        background-position: center;
        background-size: cover;
    }

    &&:nth-child(11) {
        background: url(${weather});
        background-position: center;
        background-size: cover;
    }

    && a {
        text-decoration: none;
        color: #d6d8de;
        cursor: default;
        display: block;
        height: 100%;
        width: 100%;
    }

    && .name {
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 500;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        background: rgba(0, 0, 0, 0.6);
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
    @media (min-width: 28rem) {
        && .name {
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: 500;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
        }

        && .name:hover,
        && a:focus span {
            opacity: 1;
            transition: opacity 0.2s ease-out;
        }
    }
`;
