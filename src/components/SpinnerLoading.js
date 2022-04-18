import {Container, Spinner} from "react-bootstrap";
import React from 'react';

const spinnerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%"
}

const SpinnerLoading = () => {
    return (
        <Container style={spinnerStyle}>
            <Spinner size="lg" animation="border" variant="primary" />
        </Container>
    );
};

export default SpinnerLoading;