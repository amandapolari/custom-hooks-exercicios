import styled from 'styled-components';

export const CardContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
    margin: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroudColor};
    color: ${(props) => props.textColor};
    text-align: start;
`;
