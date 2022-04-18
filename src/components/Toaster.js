import {Toast, ToastContainer} from "react-bootstrap";
import React from 'react';

const Toaster = (props) => {
    return (
        <ToastContainer className="p-3" position={"top-end"} style={{zIndex: 999999}}>
            <Toast bg={"danger"} onClose={props.onClose} animation={true}>
                <Toast.Header>
                    <strong className="me-auto">Diploma</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Toaster;