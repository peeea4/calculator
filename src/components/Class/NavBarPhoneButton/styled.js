import styled from "styled-components";

const NavBarPhoneButtonWrapper = styled.div`
    display: none;
    background-color: transparent;
    cursor: pointer;
    span {
        width: 30px;
        height: 2px;
        background-color: ${(props) => props.theme.navColor};
    }
    @media (max-width: 767.98px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
    }
`;

export default NavBarPhoneButtonWrapper;
