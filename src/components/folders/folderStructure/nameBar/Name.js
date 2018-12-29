import styled from "styled-components";

const Name = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.default};
    height: 100%;
    padding-left: 1.5rem;
`;

export default Name;
