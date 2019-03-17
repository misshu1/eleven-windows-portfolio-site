import styled from "styled-components";

const SmallWidgetBox = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    && a {
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #d6d8de;
        width: 100%;
        height: 100%;
        cursor: default;
    }
    &&:hover {
        background: rgba(100, 100, 100, 0.3);
    }
`;

export default SmallWidgetBox;
