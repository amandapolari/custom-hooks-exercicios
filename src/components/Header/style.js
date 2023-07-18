import styled from 'styled-components';
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100vw;
    height: 10vh;

    h2 {
        font-size: 1.5em;
        font-family: sans-serif;
        color: #ffffff;
    }
    img {
        width: 35%;

        margin-left: 18px;
    }
`;

export const TittleContainer = styled.div`
    display: flex;

    justify-content: space-between;
    width: 200px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    width: 470px;

    button {
        background: none;
        color: white;
        font-size: 1em;
        border: white 1px solid;
        padding: 8px;
        :hover {
            background: white;
            color: black;
        }
    }
`;
