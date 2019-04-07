import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.3rem;

    .date {
        display: none;
    }

    &&:hover {
        background: ${props => props.theme.folderHoverBg};
        outline: 1px solid ${props => props.theme.folderHoverOutline};
    }

    &&:focus {
        background: ${props => props.theme.folderFocusBg};
        outline: 1px solid ${props => props.theme.folderFocusOutline};
    }

    @media (min-width: 28em) {
        width: 100%;
        padding: 0.3rem 0.5rem;
        margin: 0.1rem 0;

        .date {
            display: block;
            min-width: 10rem;
            text-align: right;
        }
    }
`;
