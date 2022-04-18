import React, { useState, useEffect } from "react";
import Sentences from "../../components/Sentences";
import Container from "react-bootstrap/Container";
import PaginationComponent from "../../components/Pagination";
import SyntaxService from "../../services/SyntaxService";
import SpinnerLoading from "../../components/SpinnerLoading";

const SyntaxPage = () => {
    const [sentences, setSentences] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sentencesPerPage] = useState(5);
    const [loaded, setLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (loaded) return;
        async function fetchData() {
            setIsLoading(true);
            const response = await SyntaxService.fetchSyntax();
            setSentences(response.data);
            console.log(response.data);
            setIsLoading(false);
        }
        void fetchData();
        setLoaded(true);
    }, [loaded]);

    const lastSentenceIndex = currentPage * sentencesPerPage;
    const firstSentenceIndex = lastSentenceIndex - sentencesPerPage;

    const currentSentence = sentences.slice(
        firstSentenceIndex,
        lastSentenceIndex
    );

    const paginate = (pageCount) => {
        setCurrentPage(pageCount);
    };

    if(isLoading) {
        return <SpinnerLoading/>;
    }

    return (
        <Container className="mt-3">
            <h1>Синтаксическая разметка</h1>
            <Sentences sentences={currentSentence} type="syntax"/>
            <PaginationComponent
                sentencesPerPage={sentencesPerPage}
                currentPage={currentPage}
                totalPages={sentences.length}
                paginate={paginate}
            />
        </Container>
    );
};

export default SyntaxPage;
