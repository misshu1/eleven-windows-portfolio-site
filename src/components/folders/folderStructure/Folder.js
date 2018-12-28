import styled from "styled-components";

const Folder = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: lightcoral;

    @media (min-width: 450px) {
        height: 60%;
        top: 20%;
        left: 10%;
        width: 700px;
    }
`;

export default Folder;
