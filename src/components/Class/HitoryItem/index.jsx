import React, { Component } from "react";

import PropTypes from "prop-types";

import StyledHistoryItem from "@/components/Class/HitoryItem/styled";

class HistoryItem extends Component {
    render() {
        return <StyledHistoryItem>{this.props.expression}</StyledHistoryItem>;
    }
}

HistoryItem.propTypes = {
    expression: PropTypes.string.isRequired,
};

export default HistoryItem;
