import styled from "styled-components";

const MenuRoot = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    margin-top: 2rem;
    padding-left: 1rem;
    height: 2.5rem;
    background: ${props => props.theme.default};
    &&:hover {
        background: ${props => props.theme.secundary};
    }
`;

export default MenuRoot;
