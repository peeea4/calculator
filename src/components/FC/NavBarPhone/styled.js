import styled from "styled-components";

const NavBarPhoneWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 400px;
    height: 100%;

    font-size: 32px;
    text-align: left;

    color: ${(props) => props.color.foreground};
    background-color: ${(props) => props.color.background};
    a {
        font-size: 32px;
        text-decoration: none;
        color: ${(props) => props.color.foreground};
        &:visited {
            color: ${(props) => props.color.foreground};
        }
    }
    .active {
        color: ${(props) => props.color.backcroundLight};
        position: relative;
        &:visited {
            color: ${(props) => props.color.backcroundLight};
        }
    }
    @media (max-width: 767.98px) {
        width: 300px;
        padding: 22px;
        font-weight: 200;
        font-size: 26px;
    }
`;

const ModalWrapper = styled.div`
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ShowHistoryBtn = styled.button`
    padding: 10px 20px;
    color: ${(props) => props.color.foreground};
    background-color: ${(props) => props.color.background};
    border: 1px solid ${(props) => props.color.foreground};
    font-size: 24px;
    cursor: pointer;
`;

export { NavBarPhoneWrapper, ModalWrapper, ShowHistoryBtn };
