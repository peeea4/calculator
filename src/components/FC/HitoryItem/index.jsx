import React from "react";

import PropTypes from "prop-types";

import StyledHistoryItem from "@/components/FC/HitoryItem/styled";

const HistoryItem = ({ expression }) => (
    <StyledHistoryItem>{expression}</StyledHistoryItem>
);

HistoryItem.propTypes = {
    expression: PropTypes.string.isRequired,
};

export default HistoryItem;
