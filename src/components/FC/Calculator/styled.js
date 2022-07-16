import styled from "styled-components";

const CalculatorWrapper = styled.div`
    display: flex;
    padding: 24px 42px;
    width: 100%;
    height: calc(100% - 121px);
    @media (max-width: 1919.98px) {
        padding: 24px 10px;
    }
    @media (max-width: 1399.98px) {
        padding: 12px 4px;
    }
    @media (max-width: 991.98px) {
        padding: 24px 10px;
    }
    @media (max-width: 767.98px) {
        padding: 24px 10px;
    }
    @media (max-width: 575.98px) {
        padding: 24px 10px;
    }
`;

const DisplayKeypadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 23px;
    border-right: 2px solid #707070;
    width: 80%;
    @media (max-width: 767.98px) {
        border-right: 0;
        width: 100%;
    }
`;

export { DisplayKeypadWrapper, CalculatorWrapper };
