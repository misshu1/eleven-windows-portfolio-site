import styled from "styled-components";

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;
    cursor: default;
    &&:hover {
        background: rgba(174, 192, 229, 0.2);
        outline: 1px solid rgb(220, 227, 242, 0.5);
    }
`;

export default Icon;
