import styled from "styled-components";

export const SearchIcon = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    color: #fff;
    bottom: 0;
    margin-left: 90%;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background: #26c11b;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media (min-width: 28em) {
        position: fixed;
        margin: auto;
        right: 2rem;
        bottom: 2rem;
    }
`;
