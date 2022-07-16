import styled from "styled-components";

const ThemeTogglerWrapper = styled.div`
    h3 {
        font-size: 24px;
        font-weight: 200;
        margin-bottom: 7px;
        color: ${(props) => props.color.foreground};
    }
    select,
    option {
        width: 400px;
        font-size: 32px;
        font-weight: 200;
        padding: 28px;
        border: 2px solid ${(props) => props.color.foreground};
        border-radius: 8px;
        background-color: ${(props) => props.color.background};
        color: ${(props) => props.color.foreground};
    }
    option {
        padding: 15px 28px;
    }

    @media (max-width: 575.98px) {
        h3 {
            font-size: 20px;
        }
        select,
        option {
            width: 300px;
            font-size: 26px;
            padding: 22px;
        }
    }

    @media (max-width: 450px) {
        select,
        option {
            width: 200px;
            font-size: 22px;
        }
    }
`;

export default ThemeTogglerWrapper;
