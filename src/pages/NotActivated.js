import React from 'react';
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NotActivated = ({email}) => {
    return (
        <Container className="mt-3 text-center">
            <Card border="primary">
                <Card.Header>Активация</Card.Header>
                <Card.Body>
                    <Card.Title style={{color: "red"}}>Почти готово…</Card.Title>
                    <Card.Text>
                        <p>
                            Пожалуйста, проверьте свою электронную почту
                            <span style={{color: "red"}}> ({email}) </span>
                            для подтверждения вашей учетной записи.
                        </p>
                        <hr/>
                        <p>
                            Если
                            <span style={{color: "red"}}> {email} </span>
                            не является вашим адресом электронной почты, вернитесь и введите правильный адрес.
                        </p>
                        <p>
                            Если вы не получили наше письмо в течение 15 минут, проверьте папку со спамом.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default NotActivated;