import React, {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SyntaxService from "../../services/SyntaxService";
import SyntaxFunctions from "./SyntaxFunctions";
import TableComponent from "./SyntaxTable";
import sty from "./SyntaxCard.module.css";

const SyntaxCard = () => {
    const history = useNavigate();
    const syntaxFunctions = new SyntaxFunctions();
    const {id} = useParams();
    const [sentence, setSentence] = useState("");
    const [words, setWords] = useState([]);
    const [syntaxMatrix, setSyntaxMatrix] = useState([]);
    const [colors, setColors] = useState([]);
    const options = syntaxFunctions.options;

    const onChange = (rowIndex, colIndex, event) => {
        const value = parseInt(event.target.value);
        setSyntaxMatrix((prev) => {
            const newMatrix = [...prev];
            newMatrix[rowIndex][colIndex] = value;
            return newMatrix;
        });
        setColors((prev) => {
            const newColors = [...prev];
            newColors[rowIndex][colIndex] = syntaxFunctions.changeColors(value);
            return newColors;
        });
    };

    useEffect(() => {
        const fetchSentence = async () => {
            const response = await SyntaxService.fetchOneSyntax(id);
            setSentence(response.data.sentence);
            setWords(response.data.sentence.split(" "));
            setSyntaxMatrix(() => {
                return syntaxFunctions.zeroingSyntaxMatrix(response.data.sentence.split(" ").length);
            });
            setColors(() => {
                return syntaxFunctions.whitingColors(response.data.sentence.split(" ").length);
            });
        };

        void fetchSentence();
    }, [id]);

    const sendHandler = async () => {
        try {
            await SyntaxService.postMarkedSyntax(words, syntaxMatrix, id);
            history("/syntax", {replace: true});
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="mt-3 text-center">
            <Card className={sty.card}>
                <Card.Header as="h5">{sentence}</Card.Header>
                <Card.Header as="h6" >
                    <ListGroup horizontal className="justify-content-center">
                        {options.map((elem) => {
                            return (<ListGroup.Item style={{backgroundColor: syntaxFunctions.changeColors(elem.value)}}> "{elem.type}" ??? {elem.description}</ListGroup.Item>);
                        })}
                    </ListGroup>
                </Card.Header>
                <Card.Body>
                    <div className="container col-12" style={{paddingBottom: "30px"}}>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                        }}>
                            <TableComponent words={words} colors={colors} options={options}
                                            onChange={onChange}/>
                            <Button onClick={sendHandler} variant="success">
                                ??????????????????
                            </Button>{" "}
                            <Link to="/syntax">
                                <Button variant="secondary">?? ???????????? ??????????????????????</Button>
                            </Link>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SyntaxCard;
