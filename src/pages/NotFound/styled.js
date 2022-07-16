import styled from "styled-components";

const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 64px;
        font-weight: 400;
        color: ${(props) => props.theme.foreground};
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    a {
        font-size: 24px;
        margin: 10px 0px;
        text-decoration: none;
        color: ${(props) => props.theme.foreground};
        transform: scale(1);
        transition: all 0.1s linear;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export default NotFoundWrapper;
