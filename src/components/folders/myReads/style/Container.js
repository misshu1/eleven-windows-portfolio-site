import styled from "styled-components";
import arrowDown from "../img/arrow-drop-down.svg";

export const Container = styled.div`
    box-sizing: border-box;
    margin-top: 2.5rem;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    && h2 {
        border-bottom: 1px solid ${props => props.theme.folderBorder};
    }

    && ol {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    && ol li {
        position: relative;
        margin: 1rem;
        width: 8.75rem;
    }

    && ol li img {
        width: 8.4rem;
        height: 12rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    && .select-container {
        position: absolute;
        right: -0.3rem;
        top: 10rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: none;
        background: #9381e2;
        background-image: url(${arrowDown});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 2rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    && ol li select {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    && .book-details {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

    && .book-details span:nth-child(1) {
        color: ${props => props.theme.whiteBlack};
        transition: color 0.2s ease-in-out;
    }

    && .book-details span:nth-child(2) {
        margin-top: 0.3rem;
        font-size: 0.8rem;
    }

    && .search-books-bar {
        display: flex;
        position: fixed;
        width: 100%;
        top: 2.5rem;
        left: 0;
        z-index: 5;
        display: flex;
    }
    && .search-books-bar span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
        outline: 1px solid ${props => props.theme.borderColor};
    }
    && .search-books-bar input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
        margin: 0;
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        background: ${props => props.theme.folderNameBarBg};
        border: none;
        outline: 1px solid ${props => props.theme.borderColor};
        transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    }
    && .search-books-bar input::placeholder {
        color: ${props => props.theme.textColor};
        transition: color 0.2s ease-in-out;
    }

    && .search-help {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    && .search-help p {
        line-height: 1.3;
        text-align: center;
    }

    && .add-book-result {
        margin-top: 3rem;
    }
    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        margin-top: 0;
    }
`;
