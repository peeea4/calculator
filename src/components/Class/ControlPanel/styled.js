import styled from "styled-components";

const ControlPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    gap: 32px;
    @media (max-width: 575.98px) {
        gap: 20px;
    }
`;

export default ControlPanelWrapper;
