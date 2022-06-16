import { useState } from 'react';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dari react router dom
import { useNavigate } from "react-router-dom";

function CreateIdentity() {

    //state
    const [name, setName] = useState('');
    const [hobby, setHobby] = useState('');
    const [about, setAbout] = useState('');
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [github, setGithub] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const navigate = useNavigate();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.post('https://6a06-116-206-28-17.ngrok.io/api/identity', {
            name: name,
            hobby: hobby,
            about: about,
            company: company,
            job: job,
            country: country,
            address: address,
            phone: phone,
            email: email,
            instagram: instagram,
            linkedin: linkedin,
            github: github
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
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={job} onChange={(e) => setJob(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={linkedin} onChange={(e) => setLinkedIn(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={github} onChange={(e) => setGithub(e.target.value)} placeholder="Masukkan Content" />
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