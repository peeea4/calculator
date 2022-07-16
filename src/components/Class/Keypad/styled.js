import styled from "styled-components";

const KeyPadWrapper = styled.div`
    display: grid;
    grid-template: repeat(4, auto) / repeat(5, auto);
    padding: 30px 70px;
    width: 100%;
    height: 100%;
    @media (max-width: 1919.98px) {
        padding: 30px 70px;
    }
    @media (max-width: 1399.98px) {
        padding: 30px 10px;
    }
    @media (max-width: 991.98px) {
        padding: 30px 0px;
    }
    @media (max-width: 767.98px) {
        grid-template: repeat(4, 120px) / repeat(5, auto);
        padding: 30px 0px;
        padding-top: 40px;
    }
    @media (max-width: 575.98px) {
        padding-top: 80px;
        grid-template: repeat(4, 110px) / repeat(5, auto);
        padding: 30px 0px;
        padding-top: 60px;
    }
`;

export default KeyPadWrapper;
