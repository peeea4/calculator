import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState(() => ({
            error: error,
            errorInfo: errorInfo,
        }));
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h3>Something went wrong</h3>
                </div>
            );
        }
        return this.props.children;
    }
}
