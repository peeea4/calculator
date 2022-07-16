import styled from "styled-components";

const ButtonClearHistoryWrapper = styled.button`
    width: 400px;

    padding: 28px;

    font-size: 32px;
    text-align: left;

    border: 2px solid ${(props) => props.color.foreground};
    border-radius: 8px;

    color: ${(props) => props.color.foreground};
    background-color: ${(props) => props.color.background};

    cursor: pointer;
    @media (max-width: 575.98px) {
        width: 300px;
        padding: 22px;
        font-weight: 200;
        font-size: 26px;
    }
    @media (max-width: 450px) {
        width: 200px;
        font-size: 22px;
    }
`;

export default ButtonClearHistoryWrapper;
