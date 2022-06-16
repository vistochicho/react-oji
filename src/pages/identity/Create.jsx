import { useState } from 'react';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

function CreateIdentity() {

    //state
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [hobby, setHobby] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const navigate = useNavigate();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.post('https://6fd9-116-206-12-50.ngrok.io/api/identity', {
            photo: photo,
            name: name,
            hobby: hobby
        })
        .then(() => {

            //redirect
            navigate('/identity');

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
                            
                            <Form onSubmit={ storePost }>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Masukkan Gambar" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Hobby</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Masukkan Hobby" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateIdentity;