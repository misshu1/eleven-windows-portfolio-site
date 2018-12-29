import styled from "styled-components";

const MenuBar = styled.ul`
    box-sizing: border-box;
    display: none;
    text-transform: capitalize;
    list-style-type: none;
    padding-inline-start: 0;
    margin: 0;
    background: ${props => props.theme.primary};
    height: calc(100% - 2.5rem);
    width: 13rem;

    @media (min-width: 600px) {
        display: block;
    }
`;

export default MenuBar;
