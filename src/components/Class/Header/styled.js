import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: ${(props) => props.color.headerbackground};
    color: ${(props) => props.color.background};
    padding: 0px 32px;
    height: 11%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: ${(props) => props.color.white};
        font-size: 32px;
    }
    .history {
        position: absolute;
    }
`;

const HistoryWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 0px;
    background-color: rgba(0, 0, 0, 0.4);
    .history {
        width: 60%;
        height: calc(100% - 160px);
        padding: 20px 0px;
        background-color: ${(props) => props.color.headerbackground};
        display: flex;
        overflow: auto;
    }
`;

export { HeaderWrapper, HistoryWrapper };
