import styled from "styled-components";

const Navigation = styled.li`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding-left: 1rem;
    height: 2.5rem;
    background: ${props => props.theme.default};

    height: 2rem;
    width: 100%;
    display: block;

    &&:nth-child(1),
    :nth-child(4) {
        background: ${props => props.theme.extreme};
        margin-top: 2rem;
        height: 2.5rem;
    }

    && a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        display: block;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    &&:hover {
        background: ${props => props.theme.secundary};
    }
`;

export default Navigation;
