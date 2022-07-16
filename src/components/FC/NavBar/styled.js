import styled from "styled-components";

const NavBarWrapper = styled.nav`
    display: flex;
    gap: 32px;
    a {
        font-size: 32px;
        text-decoration: none;
        color: ${(props) => props.theme.navColorDark};
        &:visited {
            color: ${(props) => props.theme.navColorDark};
        }
    }
    .active {
        color: ${(props) => props.theme.navColor};
        position: relative;
        &:after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            top: 100%;
            left: 0px;
            background-color: ${(props) => props.theme.navColor};
        }
        &:visited {
            color: ${(props) => props.theme.navColor};
        }
    }

    @media (max-width: 767.98px) {
        display: none;
    }
`;

export default NavBarWrapper;
