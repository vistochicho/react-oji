import { useState, useEffect } from 'react';

import { Card, Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

import axios from 'axios';

import { useNavigate, useParams } from "react-router-dom";

function EditIdentity() {

    //state
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [hobby, setHobby] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const history = useNavigate();

    //get ID from parameter URL
    const { id } = useParams();

    //hook useEffect
    useEffect(() => {

        //panggil function "getPOstById"
        getPostById();
        
    }, []);

    //function "getPostById"
    const getPostById = async() => {

        //get data from server
        const response = await axios.put(`https://6fd9-116-206-12-50.ngrok.io/api/identity/${id}`);
        //get response data
        const data = await response.data.data

        //assign data to state
        setPhoto(data.photo);
        setName(data.name);
        setHobby(data.hobby);

    };

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.patch(`https://6fd9-116-206-12-50.ngrok.io/api/identity/${id}`, {
            photo: photo,
            name: name,
            hobby: hobby
        })
        .then(() => {

            //redirect
            history.push('/posts');

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })
        
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>

                            {
                                validation.errors &&
                                    <Alert variant="danger">
                                        <ul class="mt-0 mb-0">
                                            { validation.errors.map((error, index) => (
                                                <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                                            )) }
                                        </ul>
                                    </Alert>
                            }

                            <Form onSubmit={ updatePost }>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>GAMBAR</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Masukkan Photo" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>NAMA</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>HOBBY</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Masukkan Hobby" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    UPDATE
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EditIdentity;