import styled from "styled-components";

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 14.8%;
    color: ${(props) => props.theme.foreground};
    @media (max-width: 767.98px) {
        height: 25%;
        justify-content: flex-end;
    }
    @media (max-width: 575.98px) {
        height: 50%;
    }
`;

export const InputWrapper = styled.input`
    font-size: 64px;
    padding: 0px 115px;
    border: 0px;
    border-bottom: 2px solid #707070;
    color: ${(props) => props.theme.foreground};
    background-color: ${(props) => props.theme.background};
    text-align: right;
    width: 100%;
    &:focus {
        outline: 0px;
        border: 0px;
        border-bottom: 2px solid #707070;
    }
    @media (max-width: 767.98px) {
        font-size: 56px;
        padding: 0px 20px;
    }
`;

export const CurrentHistoryWrapper = styled.span`
    width: max-content;
    padding: 10px;
`;
