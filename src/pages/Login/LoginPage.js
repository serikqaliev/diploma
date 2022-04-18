import React, {useContext, useState} from 'react';
import {Button, ButtonGroup, Card, Container, Form} from "react-bootstrap";
import {AuthContext} from "../../index";
import {observer} from "mobx-react-lite";
import Toaster from "../../components/Toaster";
import SpinnerLoading from "../../components/SpinnerLoading";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {authStore} = useContext(AuthContext);
    let button;

    if(authStore.hasError) {
        button = <Toaster message={authStore.errorMessage} onClose={() => authStore.setError(false)}/>
    }

    if(authStore.isLoading) {
        return <SpinnerLoading />;
    }

    const onKeyDown = e => {
        if(e.code === "Enter") {
            void authStore.login(email, password);
        }
    }

    return (
        <React.Fragment>
            {button}
            <Container className="mt-3 text-start">
                <Card>
                    <Card.Header as="h5">Авторизация</Card.Header>
                    <Card.Body>
                        <Form onSubmit={(event) => event.preventDefault()}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    onChange={e => setEmail(e.target.value)}
                                    defaultValue={email}
                                    type="email"
                                    placeholder="Введите email"
                                    onKeyDown={onKeyDown}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control
                                    onChange={e => setPassword(e.target.value)}
                                    defaultValue={password}
                                    type="password"
                                    placeholder="Введите пароль"
                                    onKeyDown={onKeyDown}
                                />
                            </Form.Group>
                            <ButtonGroup aria-label="Basic example">
                                <Button onClick={() => authStore.login(email, password)}>
                                    Войти
                                </Button>
                                <Button onClick={() => authStore.registration(email, password)} variant="outline-secondary">
                                    Зарегистрироваться
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default observer(LoginPage);