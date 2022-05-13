import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

const PaginationComponent = ({sentencesPerPage, totalPages, currentPage, paginate}) => {
    const pageCount = [];

    for (let i = 1; i <= Math.ceil(totalPages / sentencesPerPage); i++) {
        pageCount.push(
            <Pagination.Item
                key={i}
                active={currentPage === i}
                onClick={() => {
                    paginate(i);
                }}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Container className="mt-3">
            <Pagination style={{overflow: "scroll"}}>{pageCount}</Pagination>
        </Container>
    );
};

export default PaginationComponent;
