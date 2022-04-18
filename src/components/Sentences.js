import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Sentences = ({ sentences, type }) => {


    return (
        <ListGroup as="ul">
            {sentences.map((sentence) => {
                return (
                    <Link key={sentence._id} to={`/${type}/${sentence._id}`}>
                        <ListGroup.Item key={sentence._id} as="li">{sentence.sentence}</ListGroup.Item>
                    </Link>
                );
            })}
        </ListGroup>
    );
};

export default Sentences;
