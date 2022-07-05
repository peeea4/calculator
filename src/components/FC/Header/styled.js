import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: ${(props) => props.color.foreground};
    color: ${(props) => props.color.background};
    padding: 42px 32px;
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 32px;
    }
    nav {
        display: flex;
        gap: 32px;
        a {
            font-size: 32px;
            text-decoration: none;
            color: ${(props) => props.color.backgroundLight};
        }
        .active {
            color: ${(props) => props.color.background};
            position: relative;
            &:after {
                content: "";
                width: 100%;
                height: 2px;
                position: absolute;
                top: 100%;
                left: 0px;
                background-color: ${(props) => props.color.background};
            }
        }
    }
`;

export default HeaderWrapper;
