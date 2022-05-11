import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import SemanticService from "../../services/SemanticService";
import SemanticFunctions from "./SemanticFunctions";
import TableComponent from "../Semantic/SemanticTable";
import {tokenize} from "string-punctuation-tokenizer";
import sty from "./SemanticTable.module.css";

const textOptions = (text) => {
    return {text, includeWords: true, includeNumbers: true, includePunctuation: true};
}

const SemanticCard = () => {
    const history = useNavigate();
    const semanticFunctions = new SemanticFunctions();
    const { id } = useParams();
    const [sentence, setSentence] = useState("");
    const [words, setWords] = useState([]);
    const [semanticTags, setSemanticTags] = useState([]);
    const [colors, setColors] = useState([]);

    const onChange = (index, event) => {
        const value = event.target.value;
        setSemanticTags((prev) => {
            const newMatrix = [...prev];
            newMatrix[index] = value;
            console.log(value);
            return newMatrix;
        });
        setColors((prev) => {
            const newColors = [...prev];
            newColors[index] = semanticFunctions.changeColors(value);
            return newColors;
        });
    };

    useEffect(() => {
        const fetchSentence = async () => {
            const response = await SemanticService.fetchOneSemantic(id);
            setSentence(response.data.sentence);
            setWords(tokenize(textOptions(response.data.sentence)));
            setSemanticTags(() => {
                return semanticFunctions.zeroingSemanticTags(response.data.sentence.split(" ").length);
            });
            setColors(() => {
                return semanticFunctions.whitingColors(response.data.sentence.split(" ").length);
            });
        };
        void fetchSentence();
    }, [id]);

    const sendHandler = async () => {
        console.log(semanticTags);
        try {
            console.log("send handler id: " + id);
            await SemanticService.postMarkedSemantic(words, semanticTags, id);
            history("/semantic", {replace: true});
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="mt-3 text-center">
            <Card className={sty.card}>
                <Card.Header as="h5">{sentence}</Card.Header>
                <Card.Body>
                    <div className="container col-12" style={{ paddingBottom: "30px" }}>
                        <form onSubmit={ (event) => { event.preventDefault() }} >
                            <TableComponent words={words} colors={colors} options={semanticFunctions.options} onChange={onChange}/>
                            <Button onClick={sendHandler} variant="success">
                                Отправить
                            </Button>{" "}
                            {/*<Link to="/syntax">
                                <Button variant="secondary">В список предложении</Button>
                            </Link>*/}
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SemanticCard;
