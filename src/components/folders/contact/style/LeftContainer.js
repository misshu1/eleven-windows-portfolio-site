import styled from "styled-components";

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: flex-end;
    width: 100%;
    height: 50%;
    padding: 2rem;
    && p {
        line-height: 1.6;
        margin: 0;
    }
    && .contact-icons {
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        max-width: 7rem;
    }
    && .contact-icons a {
        color: #e1e2e8;
        text-decoration: none;
    }
    && .contact-icons a:hover {
        color: #ef3271;
        transition: 0.2s;
    }
    @media (min-width: 28em) {
        width: 50%;
        height: 100%;
    }
`;
