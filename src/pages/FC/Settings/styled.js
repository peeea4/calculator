import styled from "styled-components";

const SettingsWrapper = styled.div`
    padding: 64px 84px;
    h2 {
        font-size: 64px;
        font-weight: 400;
        margin-bottom: 47px;
        color: ${(props) => props.color.foreground};
    }
    @media (max-width: 575.98px) {
        padding: 30px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2 {
            width: 100%;
            font-size: 48px;
            margin-bottom: 20px;
            color: ${(props) => props.color.foreground};
        }
    }
    @media (max-width: 450px) {
        padding: 30px 10px;
    }
`;

export default SettingsWrapper;
