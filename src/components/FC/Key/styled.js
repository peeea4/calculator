import styled from "styled-components";

const StyledKeyButton = styled.button`
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    border-radius: 32px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
    border: 2px solid ${(props) => props.theme.backgroundLight};
    &:hover {
        background-color: ${(props) => props.theme.backgroundHover};
    }
    @media (max-width: 1919.98px) {
        width: 120px;
        height: 120px;
        font-size: 64px;
    }
    @media (max-width: 1399.98px) {
        width: 115px;
        height: 115px;
        font-size: 64px;
    }
    @media (max-width: 991.98px) {
        width: 100px;
        height: 100px;
        font-size: 64px;
    }
    @media (max-width: 767.98px) {
        width: 90px;
        height: 90px;
        font-size: 50px;
    }
    @media (max-width: 575.98px) {
        width: 80px;
        height: 80px;
        font-size: 50px;
    }
`;

export default StyledKeyButton;
