import styled from "styled-components";

export const Container = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Titillium+Web");

    * {
        font-family: "Titillium Web", Arial, sans-serif;
    }
    box-sizing: border-box;
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    padding: 2.5rem 0;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        padding-top: 0;
    }
`;
