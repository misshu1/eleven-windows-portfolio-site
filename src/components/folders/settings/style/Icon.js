import styled from "styled-components";

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    cursor: default;
    &&:hover {
        background: ${props => props.theme.settingsBg};
        outline: 1px solid ${props => props.theme.settingsOutline};
    }
`;
