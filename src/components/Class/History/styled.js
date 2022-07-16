import styled from "styled-components";

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0 0 0;
    width: 20%;
    color: ${(props) => props.theme.foreground};
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.foreground};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${(props) => props.theme.foreground};
    }

    h3 {
        font-size: 32px;
        font-weight: 400;
    }
    div {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    @media (max-width: 767.98px) {
        display: none;
    }
`;

export const ButtonShowAll = styled.button`
    border: 1px solid ${(props) => props.theme.foreground};
    border-radius: 4px;

    background-color: transparent;
    color: ${(props) => props.theme.foreground};

    text-align: center;

    width: 150px;

    padding: 10px;
    margin-top: 10px;

    cursor: pointer;
`;
